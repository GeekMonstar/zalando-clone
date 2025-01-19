"use client";

import { useEffect, useState} from "react";
import { CollectionSection, CollectionSectionLoader } from "../../components/sections";
import { useGender } from "../../contexts/genderContext";
import { getCollectionsForWomen } from "./action";
import { CollectionWithProducts } from "../../repositories/collection.repository";

export default function Home() {
  const [collections, setCollections] = useState<CollectionWithProducts[]>([]);
  const {gender} = useGender();
  useEffect(()=>{
    document.title = "Zalando - home";
    console.log(gender);
    getCollectionsForWomen().then(_collections => {
      setCollections(_collections as CollectionWithProducts[]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="">
          {collections.length > 0 ?
            collections.map((collection, index) => <CollectionSection key={index} collection={collection as CollectionWithProducts} />):
            <>
              <CollectionSectionLoader />
              <CollectionSectionLoader />
              <CollectionSectionLoader />
            </>
          }
        </div>
  );
}
