/* eslint-disable @next/next/no-img-element */
"use client";
import { Fragment, MouseEvent, use, useEffect, useState } from "react";
import {useSearchParams} from "next/navigation";
import { getProduct } from "./action";
import { SelectSizeInput } from "../../../components/inputs";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ProductWithVariants } from "../../../repositories/product.repository";
import { useCart } from "../../../contexts/cartContext";
import { SizeName } from "@prisma/client";

export default function Page({params} : {params: Promise<{productId: string}>}) {
    const {productId} = use(params);
    const [product, setProduct] = useState<ProductWithVariants | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentVariant, setCurrentVariant] = useState<number>(0);
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [size, setSize] = useState<string | null>(null);
    const [descriptionsIsOpen, setDescriptionsIsOpen] = useState<{[key: string]: boolean}>({
        "matière et entretien": false,
        "métails du proiduit": false,
        "taille & coupe": false
    });

    const {cart, updateCart} = useCart();

    const searchParams = useSearchParams();
    useEffect(() => {
        console.log(searchParams);
        getProduct(productId).then((product: ProductWithVariants) => {
            setProduct(product);
            setLoading(false);
            if(searchParams.has("variant")){
                const variantIndex = product.variants.findIndex(variant => variant.id === searchParams.get("variant"));
                if(variantIndex !== -1){
                    setCurrentVariant(variantIndex);
                }
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(product){
            document.title = `${product.brand.name} - ${product.name}`;
        }
    }, [product]);

    const handleChangeVariant = (index: number) => {
        setCurrentVariant(index);
    }

    const handleChangeImage = (index: number) => {
        setImageIndex(index);
    };

    const addToCart = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(product);
        updateCart([...cart, {variant: {...product.variants[currentVariant], product}, size: size as SizeName, quantity: 1}]);
        localStorage.setItem("cart", JSON.stringify(cart));
        (e.target as HTMLElement).classList.add("bg-green-500", "border-green-500");
        (e.target as HTMLElement).innerText = "Ajouté !";
        setTimeout(() => {
            (e.target as HTMLElement).classList.remove("bg-green-500", "border-black");
            (e.target as HTMLElement).innerText = "Ajouter au panier";
        }, 1000);
    }

    return (
        <div>
            {(loading && !product) ? (
                <p>Loading...</p>
            ) : (
                <div className="max-sm:px-0 max-xl:px-4 xl:px-32 2xl:px-96 flex max-md:flex-col">
                    <div className="hidden max-md:flex w-full">
                        <Carousel showThumbs={false} showStatus={false} showArrows={true} showIndicators={true} selectedItem={imageIndex}>
                            {product.variants[currentVariant].images.map((image, index) => (
                                <div key={index}>
                                    <img className="w-full h-auto" src={image} alt="" />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="w-1/2 hidden md:flex gap-2">
                        <div className="w-20 flex flex-col gap-2">
                            {product.variants[currentVariant].images.map((image, index) => (
                                <img className={`${imageIndex === index && "border-2 border-black"} object-cover`} onMouseOver={()=>handleChangeImage(index)} width={100} height={100} key={index} src={image} alt="" />
                            ))}
                        </div>
                        <div className="w-full" style={{height: "50rem"}}>
                            <img className="w-full h-full object-cover" src={product.variants[currentVariant].images[imageIndex]} alt="" />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-5 flex flex-col gap-2">
                        <p className="text-2xl">{product.brand.name}</p>
                        <h1 className="font-bold text-2xl">{product.name}</h1>
                        <p className="text-2xl font-semibold">{(product.price + product.variants[currentVariant].additionnalPrice)/100}€ <span className="text-zinc-500 text-sm">TVA incluse</span></p>
                        <p className="mt-10">Couleur: <span className="font-bold">{product.variants[currentVariant].name}</span></p>
                        <div className="flex gap-2">
                            {product.variants.map((variant, index) => (
                                <div key={variant.id} className="w-18 h-32">
                                    <img onClick={()=>handleChangeVariant(index)} className={`w-full h-full object-cover ${currentVariant === index && "border-2 border-black"}`} src={variant.images[0]} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <SelectSizeInput sizes={product.variants[0].sizes} handleChange={setSize} />
                        </div>
                        <div className="flex flex-col border-b-2 border-b">
                            {product.description.map((d: {name: string, value: {name: string, value: string}[]}, index) => {
                                // setDescriptionsIsOpen([...descriptionsIsOpen, false]);
                                return (
                                    <Fragment key={index}>
                                        <button 
                                            key={d.name} 
                                            onClick={()=>setDescriptionsIsOpen({...descriptionsIsOpen, [d.name.toLowerCase()]: descriptionsIsOpen[d.name.toLowerCase()]})}
                                            className={`font-semibold text-lg flex justify-between items-center py-4 px-3 border-t-2`}>
                                            {d.name}
                                            <svg 
                                                // style={{transform: `rotate(${descriptionsIsOpen[d.name.toLowerCase()] ? "180deg": "0"})`}}
                                                viewBox="0 0 24 24" 
                                                width="1em" 
                                                height="1em" 
                                                fill="currentColor" 
                                                focusable="false" 
                                                aria-hidden="true">
                                                    <path d="M2.859 7.475a.75.75 0 0 1 1.06 0l7.55 7.55a.75.75 0 0 0 1.06 0l7.551-7.55a.75.75 0 1 1 1.061 1.06l-7.55 7.55a2.25 2.25 0 0 1-3.182 0l-7.55-7.55a.75.75 0 0 1 0-1.06"></path>
                                            </svg>
                                        </button>
                                        <div 
                                            className={`px-3 ${descriptionsIsOpen[d.name.toLowerCase()] ? "block" : "hidden"}`}
                                        >
                                            {d.value.map((v, index) => (
                                                <p key={index}><span className="font-semibold">{v.name}</span>: {v.value}</p>
                                            ))}
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                        <div className="w-full flex gap-1">
                            <button onClick={addToCart} className="w-full p-2 border border-black bg-black text-white font-semibold transition">Ajouter au panier</button>
                            <button className="w-12 h-12 flex justify-center items-center p-2 border border-black">
                                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-labelledby="wishlist-:R151bk58cap:" focusable="false" aria-hidden="false" role="img"><title id="wishlist-:R151bk58cap:">Wishlist</title><path d="M17.488 1.11h-.146a6.55 6.55 0 0 0-5.35 2.81A6.57 6.57 0 0 0 6.62 1.116 6.406 6.406 0 0 0 .09 7.428c0 7.672 11.028 15.028 11.497 15.338a.75.75 0 0 0 .826 0c.47-.31 11.496-7.666 11.496-15.351a6.43 6.43 0 0 0-6.42-6.306M12 21.228C10.018 19.83 1.59 13.525 1.59 7.442c.05-2.68 2.246-4.826 4.934-4.826h.088c2.058-.005 3.93 1.251 4.684 3.155.226.572 1.168.572 1.394 0 .755-1.907 2.677-3.17 4.69-3.16h.02c2.7-.069 4.96 2.118 5.01 4.817 0 6.089-8.429 12.401-10.41 13.8"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}