import { prisma } from "../prisma"
import { Age, Product } from "@prisma/client"
import { VariantParams } from "./variant.repository"

export async function createProduct(product: ProductParams): Promise<Product> {
  try{
    const newProduct = await prisma.product.create({
      data: {
        name: product.name,
        brand: product.brand,
        model: product.model,
        description: product.description,
        price: product.price,
        image: product.image,
        gender: product.gender,
        age: product.age,
        variants: {
          create: product.variants
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

export async function getProducts(): Promise<Product[]> {
  try{
    const products = await prisma.product.findMany()
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
      }
    })
    return product
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

export interface ProductParams {
    name: string
    brand: string
    model: string
    description?: string
    gender: string
    age: Age
    price: number
    image?: string
    variants: VariantParams[]
}