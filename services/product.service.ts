import { VariantParams } from '../repositories/variant.repository';
import * as productRepository from '../repositories/product.repository';
import * as variantService from '../services/variant.service';
import { Product } from '@prisma/client';

export async function createProducts(products: productRepository.ProductParams[]): Promise<Product[]> {
  try{
    const newProducts = products.map(async (product) => {
        const _product = await productRepository.createProduct(product)
        if(product.variants){
            const newVariants = product.variants.map(async (variant: VariantParams) => {
                variant.productId = _product.id
                return await variantService.createVariant(variant)
            })
            await Promise.all(newVariants)
        }
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