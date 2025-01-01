"use server";
import * as productSeervice from "../services/product.service";
import * as collectionService from "../services/collection.service";

export async function getPoducts(){
    const poducts = await productSeervice.getProducts();
    console.log("Products:",poducts);
    return poducts;
}

export async function getProductsByBrand(brand: string){
    const products = await productSeervice.getProductsByBrand(brand);
    console.log(`${brand} Products:`, products);
    return products;
}

export async function getCollections(){
    const collections = await collectionService.getCollections();
    console.log("Collections:",collections);
    return collections;
}