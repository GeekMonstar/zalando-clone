import Link from "next/link";
import { Product, Variant } from "@prisma/client";

export function ProductCard({product}: Readonly<{product: IProduct}>){
    const {name, brand,  price, variants} = product;
    return(
        <div className="w-64 relative">
            <div className="w-full h-96">
                <img className="w-full h-full object-cover" src={variants[0].images[0]} alt={name} />
            </div>
            <div className="">
                <h3 className="font-regular">{brand}</h3>
                <p className="">{name}</p>
                <p className="font-bold">{price/100}€</p>
            </div>
            <Link className="absolute left-0 top-0 w-full h-full" href={`/product/${product.id}`}></Link>
        </div>
    )
}

export function VariantCard({variant}: Readonly<{variant: IVariant}>){
    const {product, additionnalPrice, images} = variant;
    return(
        <div className="w-64 relative">
            <div className="w-full h-96">
                <img className="w-full h-full object-cover" src={images[0]} alt={product.name} />
            </div>
            <div className="">
                <h3 className="font-regular">{product.brand}</h3>
                <p className="">{product.name}</p>
                <p className="font-bold">{(product.price + additionnalPrice)/100}€</p>
            </div>
            <Link className="absolute left-0 top-0 w-full h-full" href={`/product/${product.id}?variant=${variant.id}`}></Link>
        </div>
    )
}

export interface IProduct extends Product {
    variants: Variant[]
}

export interface IVariant extends Variant {
    product: Product
}