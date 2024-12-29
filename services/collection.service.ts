import * as collectionService from './collection.service';

export async function getCollections() {
  try{
    const collections = await collectionService.getCollections();
    return collections;
  }catch(e){
    throw new Error((e as Error).message);
  }
}