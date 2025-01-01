"use server";
import * as collectionService from "../../services/collection.service";

export async function getCollectionsForWomen(){
    const collections = await collectionService.getCollectionsByGenderAndAges(["FEMALE", "UNISEX"], ["ADULT"]);
    console.log("Collections:",collections);
    return collections;
}