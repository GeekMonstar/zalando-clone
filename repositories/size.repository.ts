import { Size, SizeName } from "@prisma/client"
import { prisma } from "../prisma"

export async function createSize(size: SizeParams): Promise<Size> {
    try{
        const newSize = await prisma.size.create({
            data: size
        })
        return newSize
    }catch(e){
        throw new Error((e as Error).message)
    }finally{
        await prisma.$disconnect()
    }
}

export interface SizeParams {
    name: SizeName
    stock: number
    variantId: string
}