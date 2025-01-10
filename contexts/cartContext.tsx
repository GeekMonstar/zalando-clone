"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { Brand, Product, SizeName, Variant } from "@prisma/client";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}){
    const [cart, setCart] = useState<CartItemType[]>([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if(cart){
            setCart(JSON.parse(cart));
        }else{
            localStorage.setItem("cart", JSON.stringify([]));
        }
    }, []);

    useEffect(() => {
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const updateCart = (newCart: CartItemType[]) => {
        setCart([...newCart]);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    return(
        <CartContext.Provider value={{cart, updateCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);
    if(context === undefined){
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export interface ProductType extends Product {
    brand: Brand
}

export interface VariantType extends Variant {
    product: Product
}

export interface CartItemType {
    variant: VariantType
    size: SizeName
    quantity: number
}

interface CartContextType {
    cart: CartItemType[];
    updateCart: (newCart: CartItemType[]) => void;
    clearCart: () => void;
}