import { NextRequest, NextResponse } from 'next/server';
import * as collectionService from '../../../../services/collection.service';

export async function GET(req: NextRequest, {params}: {params: {collectionId: string}}) {
    const {collectionId} = await params;
    try{
        const brands = await collectionService.getCollectionById(collectionId);
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

export async function DELETE(req: NextRequest, {params}: {params: Promise<{collectionId: string}>}) {
    try{
        console.log(params);
        const {collectionId} = await params;
        console.log(collectionId);
        const deletedCollection = await collectionService.deleteCollection(collectionId);
        if(deletedCollection){
            return NextResponse.json({ collection: deletedCollection });
        }else{
            throw new Error("No collections found");
        }
    }catch(e){
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}