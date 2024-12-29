import { Brand } from '@prisma/client';
import * as brandRepository from '../repositories/brand.repository';

export async function createBrand(brand: brandRepository.BrandParams): Promise<Brand> {
    try{
        return await brandRepository.createBrand(brand)
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function getBrands(where?): Promise<Brand[]> {
    try{
        return await brandRepository.getBrands(where)
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