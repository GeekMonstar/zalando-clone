"use server";
import * as collectionService from "../../services/collection.service";

export async function getCollectionsForChildren(){
    const collections = await collectionService.getCollectionsByGenderAndAges(["MALE","FEMALE", "UNISEX"], ["KID", "TEEN", "INFANT"]);
    console.log("Collections:",collections);
    return collections;
}