import * as productRepository from '../repositories/product.repository';
import { Prisma, Product } from '@prisma/client';

export async function createProducts(products: productRepository.ProductParams[]): Promise<Product[]> {
  try{
    console.log(products);
    const newProducts = products.map(async (product) => {
        console.log(product);
        const _product = await productRepository.createProduct(product);
        return _product
    })
    return Promise.all(newProducts);
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

export async function getProductsByBrand(brand: string): Promise<Product[]> {
  try{
    return await productRepository.getProductsByBrand(brand)
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