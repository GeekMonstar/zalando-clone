import { NextRequest, NextResponse } from "next/server";
import * as brandService from "../../../services/brand.service";

export async function POST(req: NextRequest) {
  const { brand } = await req.json();
  try{
    if(!brand){
        throw new Error("Brand is required");
    }else{
        const newBrand = await brandService.createBrand(brand);
        if(newBrand){
            return NextResponse.json({ brand: newBrand }, { status: 201 });
        }
    }
  }catch(e){
    throw new Error((e as Error).message)
  }
}

export async function GET(req: NextRequest) {
    const {where} = await req.json();
  try{
    const brands = await brandService.getBrands(where || undefined);
    if(brands){
        return NextResponse.json({ brands });
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

export async function DELETE() {
  try{
    const deletedBrand = await brandService.deleteAllBrands();
    if(deletedBrand){
        return NextResponse.json({ brand: deletedBrand });
    }else{
        throw new Error("No brands found");
    }
  }catch(e){
    throw new Error((e as Error).message)
  }
}