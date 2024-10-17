import { Button } from "@/components/button";
import DisplayValue from "@/components/DisplayValue";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FirstPost() {
    const [value, setValue] = useState<number>(0);

    const plus = () => {
        setValue(value + 1);
    };
    const minus = () => {
        setValue((prev) => {
            return value - 1;
        });
    };

    return (
        <>
            <DisplayValue heading="Counter" value={value}>
                <button onClick={plus}>
                    {" "}
                    <Plus className="w-5 h-5" />
                </button>
                <button onClick={minus}>
                    {" "}
                    <Minus className="w-5 h-5" />
                </button>
            </DisplayValue>
        </>
    );
}

//SKA: plus/minus function are redundant
// Button components should just be button tags
