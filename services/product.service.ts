import * as productRepository from '../repositories/product.repository';
import { Prisma, Product } from '@prisma/client';

export async function createProducts(products: productRepository.ProductParams[]): Promise<Product[]> {
  try{
    console.log(products);
    const newProducts = await productRepository.createProducts(products);
    return newProducts;
  }catch(e){
    throw new Error((e as Error).message)
  }
}

export async function getProducts(): Promise<Product[]> {
  try{
    return await productRepository.getProducts()
  }catch(e){
    throw new Error((e as Error).message)
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try{
    return await productRepository.getProductById(id)
  }catch(e){
    throw new Error((e as Error).message)
  }
}

export async function updateProduct(product: Product): Promise<Product> {
  try{
    return await productRepository.updateProduct(product)
  }catch(e){
    throw new Error((e as Error).message)
  }
}

export async function deleteProduct(id: string): Promise<Product> {
  try{
    return await productRepository.deleteProduct(id)
  }catch(e){
    throw new Error((e as Error).message)
  }
}

export async function deleteAllProducts(): Promise<Prisma.BatchPayload> {
  try{
    return await productRepository.deleteAllProducts()
  }catch(e){
    throw new Error((e as Error).message)
  }
  
}