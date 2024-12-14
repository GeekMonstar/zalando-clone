"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { ICartVariant } from "../components/cards";
import { SizeName } from "@prisma/client";

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

export interface CartItemType {
    variant: ICartVariant
    size: SizeName
    quantity: number
}

interface CartContextType {
    cart: CartItemType[];
    updateCart: (newCart: CartItemType[]) => void;
    clearCart: () => void;
}