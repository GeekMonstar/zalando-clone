"use server";
import * as productSeervice from "../services/product.service";

export async function getPoducts(){
    const poducts = await productSeervice.getProducts();
    console.log("Products:",poducts);
    return poducts;
}