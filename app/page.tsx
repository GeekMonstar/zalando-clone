"use client";

import { useEffect} from "react";
import { HomeProdudctsSection } from "../components/sections";

export default function Home() {
  useEffect(()=>{
    document.title = "Zalando - home";
  }, []);
  return (
    <div className="">
      <HomeProdudctsSection 
        brand="Nike" 
        title="Découvrez la collection Nike de Zalando" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
      />
      <HomeProdudctsSection 
        brand="New Balance" 
        title="Serfez sur la collection New Balance de Zalando" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        bgColor="red-500"
        color="white"
      />
      <HomeProdudctsSection 
        brand="adidas" 
        title="Découvrez la collection adidas de Zalando" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        bgColor="zinc-500"
        color="black"
      />
    </div>
  );
}
