import { Brand, Prisma } from '@prisma/client';
import * as brandRepository from '../repositories/brand.repository';

export async function createBrands(brands: brandRepository.BrandParams[]): Promise<Brand[]> {
    try{
        const newBrands = [];
        for(const brand of brands){
            const newBrand = await brandRepository.createBrand(brand);
            newBrands.push(newBrand);
        }
        return newBrands;
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function getBrands(): Promise<Brand[]> {
    try{
        return await brandRepository.getBrands()
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function getBrandById(id: string): Promise<Brand | null> {
    try{
        return await brandRepository.getBrandById(id)
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function updateBrand(brand: brandRepository.BrandWithCollections): Promise<Brand> {
    try{
        return await brandRepository.updateBrand(brand)
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function deleteBrand(id: string): Promise<Brand> {
    try{
        return await brandRepository.deleteBrand(id)
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function deleteAllBrands(): Promise<Prisma.BatchPayload> {
    try{
        return await brandRepository.deleteAllBrands()
    }catch(e){
        throw new Error((e as Error).message)
    }
}