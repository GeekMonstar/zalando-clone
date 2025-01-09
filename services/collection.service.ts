import { Collection } from '@prisma/client';
import { CollectionParams } from '../repositories/collection.repository';
import * as collectionRepository from '../repositories/collection.repository';

export async function createCollection(collection: CollectionParams){
  try{
    const newCollection = await collectionRepository.createCollection(collection);
    return newCollection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function getCollections() {
  try{
    const collections = await collectionRepository.getCollections();
    return collections;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function getCollectionById(id: string) {
  try{
    const collection = await collectionRepository.getCollectionById(id);
    return collection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function getCollectionsByName(name: string){
  try{
    const collections = await collectionRepository.getCollectionsByName(name);
    return collections;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function getCollectionsByGender(genders: string[]): Promise<Collection[]> {
  try{
    const collections = await collectionRepository.getCollectionsByGender(genders);
    return collections;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function getCollectionsByAges(ages: string[]): Promise<Collection[]> {
  try{
    const collections = await collectionRepository.getCollectionsByAges(ages);
    return collections;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function getCollectionsByGenderAndAges(genders: string[], ages: string[]) {
  try{
    const collections = await collectionRepository.getCollectionsByGenderAndAge(genders, ages);
    return collections;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function updateCollection(collection: Collection){
  try{
    const updatedCollection = await collectionRepository.updateCollection(collection);
    return updatedCollection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function deleteAllCollections(){
  try{
    const deletedCollection = await collectionRepository.deleteAllCollections();
    return deletedCollection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}

export async function deleteCollection(id: string){
  try{
    const deletedCollection = await collectionRepository.deleteCollection(id);
    return deletedCollection;
  }catch(e){
    throw new Error((e as Error).message);
  }
}