import { CollectionParams } from '../repositories/collection.repository';
import * as collectionService from './collection.service';

export async function createCollection(collection: CollectionParams){
  try{
    const newCollection = await collectionService.createCollection(collection);
    return newCollection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function getCollections(where?) {
  try{
    const collections = await collectionService.getCollections({
      where: where ? where : undefined,
      include: {
        products: {
          include: {
            variants: {
              include: {
                sizes: true
              }
            }
          }
        }
      }
    });
    return collections;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function getCollectionById(id: string) {
  try{
    const collection = await collectionService.getCollectionById(id);
    return collection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function getCollectionsByName(name: string){
  try{
    const collections = await collectionService.getCollectionsByName(name);
    return collections;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function updateCollection(collection: CollectionParams){
  try{
    const updatedCollection = await collectionService.updateCollection(collection);
    return updatedCollection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function deleteAllCollections(){
  try{
    const deletedCollection = await collectionService.deleteAllCollections();
    return deletedCollection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function deleteCollection(id: string){
  try{
    const deletedCollection = await collectionService.deleteCollection(id);
    return deletedCollection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}