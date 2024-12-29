import { NextRequest, NextResponse } from 'next/server';
import * as brandService from '../../../../services/brand.service';

export async function GET(req: NextRequest, {params}: {params: {brandId: string}}) {
    const {brandId} = await params;
    try{
        const brand = await brandService.getBrandById(brandId);
        if(brand){
            return NextResponse.json({ brand }, { status: 201 });
        }else{
            throw new Error("No brands found");
        }
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function PUT(req: NextRequest) {
    const { brand } = await req.json();
    try{
        if(!brand){
            throw new Error("Brand object is required");
        }else{
            const updatedBrand = await brandService.updateBrand(brand);
            if(updatedBrand){
                return NextResponse.json({ brand: updatedBrand });
            }else{
                throw new Error("Brand not found");
            }
        }
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function DELETE(req: NextRequest, {params}: {params: {brandId: string}}) {
    const {brandId} = await params;
    try{
        const deletedBrand = await brandService.deleteBrand(brandId);
        if(deletedBrand){
            return NextResponse.json({ brand: deletedBrand });
        }else{
            throw new Error("No brands found");
        }
    }catch(e){
        throw new Error((e as Error).message)
    }
}