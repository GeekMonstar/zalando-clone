"use client";

import { createContext, use, useContext, useEffect, useState } from "react";
import { ICartVariant } from "../components/cards";
import { SizeName } from "@prisma/client";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}){
    const [cart, setCart] = useState<CartItemType[]>([]);

    useEffect(() => {
        const cart = localStorage.getItem("cart");
        if(cart){
            setCart(JSON.parse(cart));
        }
    }, []);

    const updateCart = (cartItem) => {
        const {variant, size, quantity} = cartItem;
        console.log(variant.id);
        const index = cart.findIndex(cartItem => cartItem.variant.id === variant.id && cartItem.size === size);
        if(index !== -1){
            const newCart = [...cart];
            newCart[index].quantity += quantity;
            setCart(newCart);
        }else{
            setCart([...cart, {variant, size, quantity}]);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    return(
        <CartContext.Provider value={{cart, setCart: updateCart, clearCart}}>
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
    setCart: (cartItem: CartItemType) => void;
    clearCart: () => void;
}