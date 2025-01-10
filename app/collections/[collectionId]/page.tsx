/* eslint-disable @next/next/no-img-element */
"use client";

import { use, useEffect, useState } from "react";
import { getCollection } from "./action";
import { ProductCard } from "../../../components/cards";
import { CollectionWithProducts } from "../../../repositories/collection.repository";

export default function Page({params}:{params: Promise<{collectionId: string}>}){
    const [collection, setCollection] = useState<CollectionWithProducts | null>(null);
    const {collectionId} = use(params);
    useEffect(()=>{
        getCollection(collectionId).then(collection => {
            setCollection(collection as CollectionWithProducts);
        });
    }, [collectionId]);
    return(
        <div className="">
            {collection ?
                <div className="">
                    <div className="flex flex-row gap-2 max-xl:px-4 xl:px-32 2xl:px-96 pt-6" style={{background: collection.mainColor || "white"}}>
                        <div className="">
                            <h1 className="text-2xl font-bold">{collection.name}</h1>
                            <p className="text-2xl">{collection.subname}</p>
                            <p>{collection.description}</p>
                        </div>
                        <div className="">
                            {collection.mediaType === "image" ? 
                                <img style={{width: "700px", height: "300px"}} src={collection.mediaSource} alt={collection.name} /> : 
                                <video style={{width: "700px", height: "300px"}} src={collection.mediaSource} controls={false}></video>
                            }
                        </div>
                    </div>
                    <div className="max-xl:px-4 xl:px-32 2xl:px-96 pt-3">
                        <div className="grid grid-cols-4">
                            {collection.products.map((product, index) => {
                                return <ProductCard key={index} product={product} />
                            })}
                        </div>
                    </div>
                </div>
            : "Loading..."}
        </div>
    )
}