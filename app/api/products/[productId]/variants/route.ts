import * as variantService from '../../../../../services/variant.service';
import { type NextRequest, NextResponse } from 'next/server';

// export async function POST(req: NextRequest){
//     try{
//         const {variants} = await req.json();
//         const newVariants = await variantService.createVariant(variants);
//         return NextResponse.json({variants: newVariants}, {status: 201})
//     }catch(e){
//         return NextResponse.json({error: (e as Error).message}, {status: 500})
//     }
// }

export async function GET(req: NextRequest, params: {productId: string}){
    try{
        const variants = await variantService.getVariantsByProductId(params.productId);
        return NextResponse.json({variants}, {status: 200})
    }catch(e){
        return NextResponse.json({error: (e as Error).message}, {status: 500})
    }
}