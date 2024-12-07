"use client";

export function SelectInput({options}: {options: {label: string, value: string}[]}) {
    return (
        <div>
            <select className="custom-select">
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}