"use client";

import { Product } from "@prisma/client";
import { use, useEffect, useState } from "react";
import { getProduct } from "./action";

export default function Page({params} : {params: Promise<{productId: string}>}) {
    const {productId} = use(params);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getProduct(productId).then((product) => {
            setProduct(product);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            {(loading && !product) ? (
                <p>Loading...</p>
            ) : (
                <div className="lg:px-4 2xl:px-32 flex max-sm:flex-col">
                    <div className="max-sm:w-full h-screen">
                        <img className="w-full h-full object-cover" src={product?.image} alt="" />
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                        <p className="text-2xl">{product.brand}</p>
                        <h1 className="font-bold text-xl">{product.name}</h1>
                        <p>{product?.description}</p>
                        <p className="text-xl">{product.price/100}€ <span className="font-zinc-500">TVA incluse</span></p>
                        <p>Couleur: <span className="font-bold">{product.variants[0].name}</span></p>
                        <div className="flex gap-2">
                            {product.variants.map((variant) => (
                                <div key={variant.id} className="w-18 h-32">
                                    <img className="w-full h-full object-cover" src={variant.images[0]} alt="" />
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <label htmlFor="size"></label>
                            <select name="size" id="size">
                                <option value="">Choisir une taille</option>
                                {product.variants[0].sizes.map((size) => (
                                    <option key={size.id} value={size.id}>{size.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}