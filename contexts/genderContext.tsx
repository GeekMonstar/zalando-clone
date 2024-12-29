"use client";
import { createContext, useContext, useState } from "react";

const GenderContext = createContext<GenderContextType>({gender: "MEN", setGender: ()=>{}});

export function GenderContextProvider({children}: Readonly<{children: React.ReactNode}>){
    const [gender, setGender] = useState("MEN");
    return(
        <GenderContext.Provider value={{gender, setGender}}>
            {children}
        </GenderContext.Provider>
    )
}

export function useGender(){
    const context = useContext(GenderContext);
    if(context === undefined){
        throw new Error("useGender must be used within a GenderProvider");
    }
    return context;
}

interface GenderContextType {
    gender : string
    setGender: (gender: string) => void
}