import { Age, Category, Collection, Gender, Type } from "@prisma/client"
import { prisma } from "../prisma"
import { ProductParams, ProductWithVariants } from "./product.repository"

export async function createCollection(collection: CollectionParams){
    try{
        const newCollection = await prisma.collection.create({
            data: {
                ...collection,
                products: {
                    create: collection.products ? collection.products.map(product => ({
                        name: product.name,
                        brand: product.brand,
                        model: product.model,
                        category: product.category as Category,
                        type: product.type as Type,
                        description: product.description,
                        price: product.price,
                        image: product.image,
                        gender: product.gender as Gender,
                        age: product.age as Age,
                        variants: {
                            create: product.variants ? product.variants.map(variant => ({
                                name: variant.name,
                                description: variant.description,
                                additionnalPrice: variant.additionnalPrice,
                                images: variant.images,
                                sizes: {
                                    create: variant.sizes ? variant.sizes.map(size => ({
                                        name: size.name,
                                        stock: size.stock
                                    })) : []
                                }
                            })) : []
                        }
                    })) : []
                }
            }
        })
        return newCollection
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getCollections(where?): Promise<Collection[]> {
    try{
        const collections = await prisma.collection.findMany({
            where: where ? where : undefined,
            include: {
                products: {
                    include: {
                        variants: {
                            include: {
                                sizes: true
                            }
                        }
                    }
                }
            }
        })
        return collections
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getCollectionById(id: string): Promise<Collection | null> {
    try{
        const collection = await prisma.collection.findUnique({
            where: {
                id
            },
            include: {
                products: {
                    include: {
                        variants: {
                            include: {
                                sizes: true
                            }
                        }
                    }
                }
            }
        })
        return collection
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function updateCollection(collection: Collection): Promise<Collection> {
    try{
        const updatedCollection = await prisma.collection.update({
            where: {
                id: collection.id
            },
            data: {
                name: collection.name,
                description: collection.description,
                mediaType: collection.mediaType,
                mediaSource: collection.mediaSource,
                mainColor: collection.mainColor,
                secondaryColor: collection.secondaryColor,
                brandId: collection.brandId
            }
        })
        return updatedCollection
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export interface CollectionParams {
    name: string
    description?: string
    mediaType?: string
    mediaSource?: string
    mainColor?: string
    secondaryColor?: string
    brandId: string,
    products?: ProductParams[]
}

export interface CollectionWithProducts extends Collection {
    products: ProductWithVariants[]
}