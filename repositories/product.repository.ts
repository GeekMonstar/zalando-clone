import { prisma } from "../prisma"
import { Age, Category, Gender, Prisma, Product, Type } from "@prisma/client"
import { VariantParams, VariantWithSizes } from "./variant.repository"

export async function createProduct(product: ProductParams): Promise<Product> {
  try{
    const newProduct = await prisma.product.create({
      data: {
        name: product.name,
        model: product.model,
        description: product.description,
        price: product.price,
        image: product.image,
        category: product.category as Category,
        type: product.type as Type,
        gender: product.gender as Gender,
        ages: product.ages as Age[],
        brand: {
          connect: {
            id: product.brandId
          }
        },
        collection: {
          connect: {
            id: product.collectionId
          }
        },
        variants: {
          create: product.variants.map(variant => ({
            name: variant.name,
            description: variant.description,
            additionnalPrice: variant.additionnalPrice,
            images: variant.images,
            sizes: {
              create: variant.sizes.map(size => ({
                name: size.name,
                stock: size.stock
              }))
            }
          }))
        }
    }
    })
    return newProduct
  }catch(e){
    throw new Error((e as Error).message)
  }finally{
    await prisma.$disconnect()
  }
}

export async function getProducts(where?): Promise<Product[]> {
  try{
    const products = await prisma.product.findMany({
      where: where ? where : undefined,
      include: {
        variants: {
          include: {
            sizes: true
          }
        }
      }
    })
    return products
  }catch(e){
    throw new Error((e as Error).message)
  }finally{
    await prisma.$disconnect()
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try{
    const product = await prisma.product.findUnique({
      where: {
        id
      },
      include: {
        brand: true,
        variants: {
          include: {
            sizes: true
          }
        }
      }
    })
    return product
  }catch(e){
    throw new Error((e as Error).message)
  }finally{
    await prisma.$disconnect()
  }
}

export async function getProductsByBrandId(brandId: string): Promise<Product[]> {
  try{
    const products = await prisma.product.findMany({
      where: {
        brandId
      },
      include: {
        variants: {
          include: {
            sizes: true,
            product: true
          }
        }
      }
    })
    return products
  }catch(e){
    throw new Error((e as Error).message)
  }finally{
    await prisma.$disconnect()
  }
}

export async function updateProduct(product: Product): Promise<Product> {
  try{
    const updatedProduct = await prisma.product.update({
      where: {
        id: product.id
      },
      data: product
    })
    return updatedProduct
  }catch(e){
    throw new Error((e as Error).message)
  }finally{
    await prisma.$disconnect()
  }
}

export async function deleteProduct(id: string): Promise<Product> {
  try{
    const deletedProduct = await prisma.product.delete({
      where: {
        id
      }
    })
    return deletedProduct
  }catch(e){
    throw new Error((e as Error).message)
  }finally{
    await prisma.$disconnect()
  }
}

export async function deleteAllProducts(): Promise<Prisma.BatchPayload> {
  try{
    const products = await prisma.product.deleteMany()
    return products
  }catch(e){
    throw new Error((e as Error).message)
  }finally{
    await prisma.$disconnect()
  }
}

export interface ProductParams {
    name: string
    brandId: string
    model: string
    type: Type
    category: Category
    description?: {[key: string]: [key: string] | string}[]
    gender: string
    ages: Age[]
    price: number
    image?: string
    collectionId?: string
    variants: VariantParams[]
}

export interface ProductWithVariants extends Product {
    brandId: string
    variants: VariantWithSizes[]
}