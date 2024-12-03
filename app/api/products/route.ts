import { type NextRequest, NextResponse } from "next/server";
import * as productService from "../../../services/product.service";

export async function POST(req: NextRequest){
    try{
        const {products} = await req.json();
        const newProducts = await productService.createProducts(products);
        return NextResponse.json({products: newProducts}, {status: 201})
    }catch(e){
        console.log(e);
        return NextResponse.json({error: (e as Error).message}, {status: 500})
    }
}

export async function GET(){
    try{
        const products = await productService.getProducts();
        return NextResponse.json({products}, {status: 200})
    }catch(e){
        return NextResponse.json({error: (e as Error).message}, {status: 500})
    }
}