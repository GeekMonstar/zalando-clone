"use client";

import { useEffect} from "react";
import { useRouter } from "next/navigation";
import { useGender } from "../contexts/genderContext";

export default function Home() {
  const {gender} = useGender();
  const router = useRouter();
  useEffect(()=>{
    document.title = "Zalando - home";
    console.log(gender);
    switch(gender){
      case "WOMEN":
        router.push("/home-women");
        break;
      case "CHILDREN":
        router.push("/home-children");
        break;
      default:
        router.push("/home-men");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="">
      
    </div>
  );
}
