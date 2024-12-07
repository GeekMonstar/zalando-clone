"use client";

import { useEffect, useState } from "react";
import { getPoducts } from "./action";
import { ProductCard } from "../components/cards";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getPoducts().then(data => {
      setProducts(data);
      console.log("Products:",data);
    });
  }, []);
  return (
    <div className="">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
