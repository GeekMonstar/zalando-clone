import * as productService from "../../../../services/product.service";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest, params: {productId: string}){
    try{
        const product = await productService.getProductById(params.productId);
        return product ? {status: 200, body: {product}} : {status: 404}
    }catch(e){
        return {status: 500, body: {error: (e as Error).message}}
    }
}

export async function PUT(req: NextRequest){
    try{
        const {product} = await req.json();
        const updatedProduct = await productService.updateProduct(product);
        return {status: 200, body: {product: updatedProduct}}
    }catch(e){
        return {status: 500, body: {error: (e as Error).message}}
    }
}

export async function DELETE(req: NextRequest, params: {productId: string}){
    try{
        const deletedProduct = await productService.deleteProduct(params.productId);
        return {status: 200, body: {product: deletedProduct}}
    }catch(e){
        return {status: 500, body: {error: (e as Error).message}}
    }
}