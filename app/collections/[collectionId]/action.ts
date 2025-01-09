"use server";
import * as collectionService from '../../../services/collection.service';

export async function getCollection(collectionId: string){
    try{
        const collections = await collectionService.getCollectionById(collectionId);
        return collections;
    }catch(e){
        throw new Error((e as Error).message);
    }
}