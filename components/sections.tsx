"use client";
import { useEffect, useState } from "react";
import { CartLoader, ProductCard, VariantCard } from "./cards";
import { getProductsByBrand } from "../app/action";

export function HomeProdudctsSection({brand, title, description, color, bgColor}:{brand: string, title: string, description: string, color?: string, bgColor?: string}){
    const [brandProducts, setBrandProducts] = useState([]);
    const [icon, setIcon] = useState(null);
    useEffect(()=>{
        getProductsByBrand(brand).then((data) => {
            setBrandProducts(data);
            console.log(`${brand} Products:`,data);
        });
        switch(brand){
            case "Nike":
                setIcon(<svg style={{fill: color}} className={`h-16 fill`} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nike</title><path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"/></svg>);
                break;
            case "New Balance":
                setIcon(<svg style={{fill: color}} className={`h-16`} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>New Balance</title><path d="M12.169 10.306l1.111-1.937 3.774-.242.132-.236-3.488-.242.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8-.17.638-.979 2.233-3.356 2.899.507.06 1.76.616 1.54 2.057-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006-.38-1.48 4.005-.28.137-.237-4.346-.264-.467-1.755 6.178-.363.137-.231-11.096-.693.534-.925 11.948-.775.138-.231-3.504-.231m5 .385l1.1-.006c.738-.005 1.502-.34 1.783-1.018.259-.632-.088-1.171-.55-1.166h-1.067l-1.266 2.19zm-1.27 2.195l-1.326 2.305h1.265c.589 0 1.64-.292 1.964-1.128.302-.781-.253-1.177-.638-1.177h-1.266zM6.26 16.445l-.77 1.315L0 17.77l.534-.923 5.726-.402zm.385-10.216l4.417.006.336 1.248-5.276-.33.523-.924zm5 2.245l.484 1.832-7.542-.495.528-.92 6.53-.417zm-3.84 5.281l-.957 1.661-5.32-.302.534-.924 5.743-.435z"/></svg>);
                break;
            case "adidas":
                setIcon(<svg style={{fill: color}} className={`h-16`} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adidas</title><path d="m24 19.535-8.697-15.07-4.659 2.687 7.145 12.383Zm-8.287 0L9.969 9.59 5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z"/></svg>);
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <section className={`bg-${bgColor ? bgColor : "white"} text-${color ? color : "black"} min-h-96 p-3 lg:px-4 2xl:px-32 flex flex-col items-start gap-3`}>
            {icon}
            <h2 className="font-bold text-xl">{title}</h2>
            <p>{description}</p>
            <div className="w-full overflow-x-auto">
                <div className="w-fit flex gap-2 items-center">
                {brandProducts.length !== 0 ? brandProducts.map((product, index) => {
                    if(product.variants.length === 0) return <ProductCard key={index} product={product} />
                    return product.variants.map((variant, index) => <VariantCard key={index} variant={variant} />)
                })
                : 
                <>
                    <CartLoader />
                    <CartLoader />
                    <CartLoader />
                    <CartLoader />
                    <CartLoader />
                    <CartLoader />
                    <CartLoader />
                </>}
                </div>
            </div>
        </section>
    )
}