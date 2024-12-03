import { prisma } from "../prisma"
import { Size, Variant } from "@prisma/client"

export async function createVariant(variant: VariantParams): Promise<Variant> {
    try{
        const newVariant = await prisma.variant.create({
            data: {
                name : variant.name,
                description: variant.description,
                additionnalPrice: variant.additionnalPrice,
                size: variant.size,
                stock: variant.stock,
                images: variant.images,
                product: {
                    connect: {
                        id: variant.productId
                    }
                }
            }
        })
        return newVariant
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getVariants(): Promise<Variant[]> {
    try{
        const variants = await prisma.variant.findMany()
        return variants
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getVariantById(id: string): Promise<Variant | null> {
    try{
        const variant = await prisma.variant.findUnique({
            where: {
                id
            }
        })
        return variant
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getVariantsByProductId(productId: string): Promise<Variant[]> {
    try{
        const variants = await prisma.variant.findMany({
            where: {
                productId
            }
        })
        return variants
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function updateVariant(variant: Variant): Promise<Variant> {
    try{
        const updatedVariant = await prisma.variant.update({
            where: {
                id: variant.id
            },
            data: variant
        })
        return updatedVariant
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function deleteVariant(id: string): Promise<Variant> {
    try{
        const deletedVariant = await prisma.variant.delete({
            where: {
                id
            }
        })
        return deletedVariant
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export interface VariantParams {
    productId: string
    name: string
    description?: string
    additionnalPrice: number
    size: Size,
    stock: number
    images: string[]
}