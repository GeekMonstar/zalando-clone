"use client";

import { Size } from "@prisma/client";
import { useState, Fragment } from "react";

export function SelectSizeInput({sizes, handleChange}: {sizes: Size[], handleChange: (value: string) => void}) {
    const [value, setValue] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    const handleSelectSize = (size: string) => {
        setValue(size);
        handleChange(size);
    }
    const handleFocus = () => {
        setOpen(true);
    }
    const handleBlur = () => {
        setTimeout(() => {
            setOpen(false);
        }, 200);
    }

    return (
        <div className="w-full">
            <button className={`w-full flex justify-between items-center p-3 border-2 ${open && "border-black"}`} onFocus={handleFocus} onBlur={handleBlur}>
                <span>{value ? value.split("_").join(" ") : "Votre taille"}</span>
                <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" focusable="false" aria-hidden="true"><path d="M2.859 7.475a.75.75 0 0 1 1.06 0l7.55 7.55a.75.75 0 0 0 1.06 0l7.551-7.55a.75.75 0 1 1 1.061 1.06l-7.55 7.55a2.25 2.25 0 0 1-3.182 0l-7.55-7.55a.75.75 0 0 1 0-1.06"></path></svg>
            </button>
            <div className={`${open ? "border-2 border-black border-t-0 flex" : "hidden"} flex-col`}>
                {sizes.map((size, index) => (
                    <Fragment key={index}>
                        <button key={index} className="p-2 flex justify-between hover:bg-red-500" onClick={()=>handleSelectSize(size.name)}><span>{size.name.split("_").join(" ")}</span><span className={`font-semibold ${size.stock > 10 ? "text-green-500" : "text-red-500"}`}>{size.stock > 10 ? "En stock" : `plus que ${size.stock} pièce${size.stock > 1 && "s"}`}</span></button>
                        {index !== sizes.length - 1 && <div className="border-b"></div>}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}