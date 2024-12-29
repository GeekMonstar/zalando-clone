"use client";

import { useEffect} from "react";
import { HomeProdudctsSection } from "../../components/sections";
import { useGender } from "../../contexts/genderContext";

export default function Home() {
  const {gender} = useGender();
  useEffect(()=>{
    document.title = "Zalando - home";
    console.log(gender);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        bgColor="#F33"
        color="white"
      />
      <HomeProdudctsSection 
        brand="adidas" 
        title="Découvrez la collection adidas de Zalando" 
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
        bgColor="#777"
        color="white"
      />
    </div>
  );
}
