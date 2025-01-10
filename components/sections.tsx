/* eslint-disable @next/next/no-img-element */
"use client";
import { CartLoader, ProductCard } from "./cards";
import { CollectionWithProducts } from "../repositories/collection.repository";
import Link from "next/link";
import { useEffect } from "react";


export function CollectionSection({collection}:{collection: CollectionWithProducts}){
    useEffect(()=>{
        console.log(collection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <section className="min-h-96 pb-5 flex flex-col items-start gap-2" style={{background: collection.secondaryColor}}>
            <div className="w-full flex flex-col lg:flex-row gap-3 max-xl:px-4 xl:px-32 2xl:px-96 pb-2" style={{background: collection.mainColor, paddingTop: "36px"}}>
                {collection.mediaType === "image" ?
                    <img className="w-full h-auto lg:h-64 lg:w-auto" src={collection.mediaSource} alt={collection.mediaSource}/>:
                    <video className="w-full h-auto lg:h-64 lg:w-auto" autoPlay={true} src={collection.mediaSource} controls={false}></video>
                }
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-2xl">{collection.name}</h2>
                    <p className="text-2xl">{collection.subname}</p>
                    <p>{collection.description}</p>
                    <Link className="w-min border-2 border-black font-semibold px-3 py-2" href={`/collections/${collection.id}`}>Découvrir</Link>
                </div>
            </div>
            <div className="w-full overflow-x-auto max-xl:px-4 xl:px-32 2xl:px-96">
                <div className="w-fit flex gap-2">
                {collection.products.length !== 0 ? collection.products.map((product, index) => {
                    return <ProductCard key={index} product={product} />
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