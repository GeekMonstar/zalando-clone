import Link from "next/link";
import { Product, Variant } from "@prisma/client";
import { CartItemType, useCart } from "../contexts/cartContext";

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

export function CartVariantCard({cartItem, handleRemove}: Readonly<{cartItem: CartItemType, handleRemove: () => void}>){
    const {variant, size, quantity} = cartItem;
    const {product, name, additionnalPrice, images} = variant;

    const {cart, updateCart} = useCart();

    const handleQuantityChange = (e) => {
        updateCart(cart.map((item) => {
            if(item.variant.id === variant.id){
                return {...item, quantity: e.target.value}
            }
            return item;
        }));
    }
    return(
        <div className="relative flex gap-2 justify-between">
            <div className="flex gap-1">
            <div className="max-sm:w-16 max-sm:h-16 max-lg:w-24 max-lg:h-24 w-32 h-32">
                <img className="w-full h-full object-cover" src={images[0]} alt={product.name} />
            </div>
            <div className="flex flex-col max-lg:flex-row gap-1">
                <div className="">
                    <h3 className="font-regular">{product.brand}</h3>
                    <p className="">{product.name}</p>
                    <p className="font-bold">{(product.price + additionnalPrice)/100}€</p>
                    <p>Couleur: {name}</p>
                    <p>Taille: {size}</p>
                </div>
            </div>
            </div>
            <div className="z-10 h-min flex flex items-center gap-2">
                    <select className="hidden sm:block p-1 border-black border" name="" id="" value={quantity} onChange={(e) => handleQuantityChange(e)}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <div onClick={handleRemove} className="p-1 cursor-pointrer">
                        <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-labelledby="supprimer-:R2sub96:" focusable="false" aria-hidden="false" role="img"><title id="supprimer-:R2sub96:">Supprimer</title><path d="m13.057 11.996 7.723-7.723a.75.75 0 1 0-1.06-1.06l-7.724 7.723-7.723-7.724a.75.75 0 1 0-1.06 1.061l7.723 7.723-7.716 7.717a.75.75 0 1 0 1.06 1.06l7.716-7.716 7.717 7.716a.747.747 0 0 0 1.06 0 .75.75 0 0 0 0-1.06z"></path></svg>
                    </div>
                </div>
            {/* <Link className="absolute left-0 top-0 w-full h-full" href={`/product/${product.id}?variant=${variant.id}`}></Link> */}
        </div>
    )
}

export function CartLoader(){
    return(
        <div style={{width: "256px", height: "480px"}} className="lex justify-center items-center bg-gray-100">
        </div>
    )
}

export interface IProduct extends Product {
    variants: Variant[]
}

export interface IVariant extends Variant {
    product: Product
}

export interface ICartVariant extends IVariant {
    product: IProduct
}