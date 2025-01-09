"use server";
import * as collectionService from "../../services/collection.service";

export async function getCollectionsForMen(){
    const collections = await collectionService.getCollectionsByGenderAndAges(["MALE", "UNISEX"], ["ADULT"]);
    return collections;
}