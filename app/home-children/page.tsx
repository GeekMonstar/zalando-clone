"use client";

import { useEffect, useState} from "react";
import { CollectionSection } from "../../components/sections";
import { useGender } from "../../contexts/genderContext";
import { Collection } from "@prisma/client";
import { getCollectionsForChildren } from "./action";
import { CollectionWithProducts } from "../../repositories/collection.repository";

export default function Home() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const {gender} = useGender();
  useEffect(()=>{
    document.title = "Zalando - home";
    console.log(gender);
    getCollectionsForChildren().then(collections => {
      setCollections(collections);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="">
      {collections.map((collection, index) => <CollectionSection key={index} collection={collection as CollectionWithProducts} />)}
    </div>
  );
}
