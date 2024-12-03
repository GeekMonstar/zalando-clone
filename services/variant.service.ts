import { Variant } from '@prisma/client';
import * as variantRepository from '../repositories/variant.repository';

export async function createVariant(variant: variantRepository.VariantParams): Promise<Variant> {
    try{
        return await variantRepository.createVariant(variant)
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function getVariants(): Promise<Variant[]> {
    try{
        return await variantRepository.getVariants()
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function getVariantById(id: string): Promise<Variant | null> {
    try{
        return await variantRepository.getVariantById(id)
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function getVariantsByProductId(productId: string): Promise<Variant[]> {
    try{
        return await variantRepository.getVariantsByProductId(productId)
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function updateVariant(variant: Variant): Promise<Variant> {
    try{
        return await variantRepository.updateVariant(variant)
    }catch(e){
        throw new Error((e as Error).message)
    }
}

export async function deleteVariant(id: string): Promise<Variant> {
    try{
        return await variantRepository.deleteVariant(id)
    }catch(e){
        throw new Error((e as Error).message)
    }
}