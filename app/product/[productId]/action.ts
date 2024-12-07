"use server";
import * as productService from ".././../../services/product.service";

export async function getProduct(id: string){
    const products = await productService.getProductById(id);
    console.log("Products:",products);
    return products;
}