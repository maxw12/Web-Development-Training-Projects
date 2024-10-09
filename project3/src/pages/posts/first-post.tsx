import { Button } from "@/components/button";
import { DisplayValue } from "@/components/value";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { useState } from "react";

export default function FirstPost() {
    const [value, setValue] = useState(0);

    const plus = () => {
        setValue(value + 1);
    };
    const minus = () => {
        setValue(value - 1);
    };

    return (
        <>
            <DisplayValue heading="Counter" value={value}>
                <Button handleClick={plus}>
                    {" "}
                    <Plus className="w-5 h-5" />
                </Button>
                <Button handleClick={minus}>
                    {" "}
                    <Minus className="w-5 h-5" />
                </Button>
                {/* <button onClick={() => {console.log('clicked but simpler')}} /> */}
            </DisplayValue>
        </>
    );
}
