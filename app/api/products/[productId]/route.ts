import * as productService from "../../../../services/product.service";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(req: NextRequest, {params}: {params: Promise<{productId: string}>}){
    try{
        const {productId} = await params;
        console.log(productId)
        const product = await productService.getProductById(productId);
        if(product) return NextResponse.json({product}, {status: 200})
        return NextResponse.json({error: 'Product not found'}, {status: 404})
    }catch(e){
        return NextResponse.json({error: (e as Error).message}, {status: 500})
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

export async function DELETE(req: NextRequest, {params}: {params: Promise<{productId: string}>}){
    try{
        const {productId} = await params;
        const deletedProduct = await productService.deleteProduct(productId);
        return {status: 200, body: {product: deletedProduct}}
    }catch(e){
        return {status: 500, body: {error: (e as Error).message}}
    }
}