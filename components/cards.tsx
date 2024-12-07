import { Product } from "@prisma/client";

export function ProductCard({product}: Readonly<{product: Product}>){
    const {name, brand,  price, image} = product;
    return(
        <div className="w-64">
            <div className="w-full h-96">
                <img className="w-full h-full object-cover" src={image} alt={name} />
            </div>
            <div className="">
                <h3 className="font-regular">{brand}</h3>
                <p className="">{name}</p>
                <p className="font-bold">{price/100}€</p>
            </div>
        </div>
    )
}