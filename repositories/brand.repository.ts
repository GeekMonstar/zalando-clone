import { Brand, Prisma } from "@prisma/client"
import { prisma } from "../prisma"
import { CollectionParams, CollectionWithProducts } from "./collection.repository"

export async function createBrand(brand: BrandParams): Promise<Brand> {
    try{
        const newBrand = await prisma.brand.create({
            data: {
                name: brand.name,
            }
        })
        return newBrand
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getBrands(): Promise<Brand[]> {
    try{
        const brands = await prisma.brand.findMany({
            // include: {
            //     products: {
            //         include:{
            //             variants: {
            //                 include: {
            //                     sizes: true
            //                 }
            //             }
            //         }
            //     }
            // }
        })
        return brands
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getBrandById(id: string): Promise<Brand | null> {
    try{
        const brand = await prisma.brand.findUnique({
            where: {
                id
            },
            include: {
                products: {
                    include:{
                        variants: {
                            include: {
                                sizes: true
                            }
                        }
                    }
                }
            }
        })
        return brand
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getBrandByName(name: string): Promise<Brand[] | null> {
    try{
        const brands = await prisma.brand.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
        return brands
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function updateBrand(brand: Brand): Promise<Brand> {
    try{
        const updatedBrand = await prisma.brand.update({
            where: {
                id: brand.id
            },
            data: brand
        })
        return updatedBrand
    }
    catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function deleteBrand(id: string): Promise<Brand> {
    try{
        const deletedBrand = await prisma.brand.delete({
            where: {
                id
            }
        })
        return deletedBrand
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function deleteAllBrands(): Promise<Prisma.BatchPayload> {
    try{
        const deletedBrands = await prisma.brand.deleteMany()
        return deletedBrands
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export interface BrandParams {
    name: string
    logo?: string
    collections?: CollectionParams[]
}

export interface BrandWithCollections extends Brand {
    collections: CollectionWithProducts[]
}
