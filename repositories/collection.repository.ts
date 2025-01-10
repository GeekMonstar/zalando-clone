import { Age, Collection, Gender, Prisma } from "@prisma/client"
import { prisma } from "../prisma"
import { ProductWithVariants } from "./product.repository"

export async function createCollection(collection: CollectionParams){
    try{
        const newCollection = await prisma.collection.create({
            data: {
                name: collection.name,
                subname: collection.subname,
                description: collection.description,
                ages: {
                    set: collection.ages as Age[]
                },
                mediaType: collection.mediaType,
                mediaSource: collection.mediaSource,
                mainColor: collection.mainColor,
                secondaryColor: collection.secondaryColor,
                products: {
                    connect: collection.products ? collection.products.map(product => ({
                        id: product
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
        return collection
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getCollectionsByName(name: string): Promise<Collection[]> {
    try{
        const collections = await prisma.collection.findMany({
            where: {
                name: {
                    contains: name
                }
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
        return collections
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getCollectionsByGender(genders: string[]): Promise<Collection[]> {
    try{
        const collections = await prisma.collection.findMany({
            where: {
                products: {
                    some: {
                        gender: {
                            in: genders as Gender[]
                        }
                    }
                }
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
        return collections
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getCollectionsByAges(age: string[]): Promise<Collection[]> {
    try{
        const collections = await prisma.collection.findMany({
            where: {
                products: {
                    some: {
                        ages: {
                            hasSome: age as Age[]
                        }
                    }
                }
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
        return collections
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function getCollectionsByGenderAndAge(genders: string[], ages: string[]){
    try{
        const collections = await prisma.collection.findMany({
            where: {
                ages: {
                    hasSome: ages as Age[]
                },
                products: {
                    some: {
                        gender: {
                            in: genders as Gender[]
                        }
                    }
                }
            },
            select: {
                id: true,
                name: true,
                subname: true,
                description: true,
                ages: true,
                mediaType: true,
                mediaSource: true,
                mainColor: true,
                secondaryColor: true,
                products: {
                    include: {
                        brand: true,
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
                secondaryColor: collection.secondaryColor
            }
        })
        return updatedCollection
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function deleteCollection(id: string): Promise<Collection> {
    try{
        const deletedCollection = await prisma.collection.delete({
            where: {
                id
            }
        })
        return deletedCollection
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export async function deleteAllCollections(): Promise<Prisma.BatchPayload> {
    try{
        const collections = await prisma.collection.deleteMany()
        return collections
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export interface CollectionParams {
    name: string
    subname?: string
    description?: string
    ages: Age[]
    mediaType?: string
    mediaSource?: string
    mainColor?: string
    secondaryColor?: string
    products?: string[]
}

export interface CollectionWithProducts extends Collection {
    products: ProductWithVariants[]
}