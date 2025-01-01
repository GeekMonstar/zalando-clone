import { NextRequest, NextResponse } from "next/server";
import * as collectionService from "../../../services/collection.service";

export async function POST(req: NextRequest) {
    const { collection } = await req.json();
    try{
        if(!collection){
            throw new Error("Brand is required");
        }else{
            const newCollection = await collectionService.createCollection(collection);
            if(newCollection){
                return NextResponse.json({ collection: newCollection }, { status: 201 });
            }else{
                throw new Error("Collection not created");
            }
        }
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function GET() {
    try{
        const collections = await collectionService.getCollections();
        if(collections){
            return NextResponse.json({ collections });
        }else{
            throw new Error("No collections found");
        }
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function PUT(req: NextRequest) {
    const { collection } = await req.json();
    try{
        if(!collection){
            throw new Error("Collection object is required");
        }else{
            const updatedCollection = await collectionService.updateCollection(collection);
            if(updatedCollection){
                return NextResponse.json({ collection: updatedCollection });
            }else{
                throw new Error("Collection not found");
            }
        }
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function DELETE() {
    try{
        const deletedCollection = await collectionService.deleteAllCollections();
        if(deletedCollection){
            return NextResponse.json({ collection: deletedCollection });
        }else{
            throw new Error("No collections found");
        }
    }catch(e){
        throw new Error((e as Error).message)
    }
}