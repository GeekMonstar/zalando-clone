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
        return NextResponse.json({product: updatedProduct}, {status: 200})
    }catch(e){
        return NextResponse.json({error: (e as Error).message}, {status: 500})
    }
}

export async function DELETE(req: NextRequest, {params}: {params: Promise<{productId: string}>}){
    try{
        const {productId} = await params;
        const deletedProduct = await productService.deleteProduct(productId);
        return NextResponse.json({product: deletedProduct}, {status: 200})
    }catch(e){
        return NextResponse.json({error: (e as Error).message}, {status: 500})
    }
}