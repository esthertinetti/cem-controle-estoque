import { Minus, Plus } from "lucide-react";
import { useState } from "react";

interface InputQtdProps {
    label: string;
    initial: number;
}

function InputQtd ({label, initial} : InputQtdProps) {
    const [value, setValue] = useState(initial);

    const decrement = () => setValue((prev) => Math.max(prev - 1, 0));
    const increment = () => setValue((prev) => prev + 1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setValue(newValue);
        } else {
            setValue(0); 
        }
    };

    return (
        <div className="flex flex-col items-center mx-2">
            <span className="font-semibold text-base leading-6 text-center text-[#05004E] block h-6">
                {label}
            </span>
            <div className="flex items-center space-x-1 mt-1">
                <button
                    onClick={decrement}
                    className="bg-[#0A2186] text-white rounded-lg w-[30px] h-[30px] [&_svg]:size-4 justify-center items-center flex"
                >
                    <Minus strokeWidth={3} />
                </button>

                <input
                    type="number"
                    value={value}
                    onChange={handleChange}
                    className="w-10 h-10 text-center bg-gray-100 rounded-lg text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none font-semibold text-sm leading-[18px] text-[#05004E]"
                />
                <button
                    onClick={increment}
                    className="bg-[#0A2186] text-white rounded-lg w-[30px] h-[30px] [&_svg]:size-4 justify-center items-center flex"
                >
                    <Plus strokeWidth={3} />
                </button>
            </div>
        </div>
    )
}

export default InputQtd;