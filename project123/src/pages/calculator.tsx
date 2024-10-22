import { userAgent } from "next/server";
import { ReactNode, useEffect, useState } from "react";

export default function Calculator() {
    const [currentValue, setCurrentValue] = useState<string>("0");
    const [previousResult, setPreviousResult] = useState<string>("0");
    const [newResult, setNewResult] = useState<number>(0);
    const [displayValue, setDisplayValue] = useState<string>("0");
    const [previousOperator, setPreviousOperator] = useState<string>("+");

    // page load is equivalent to clear display after operator button is pressed
    const [lastButtonPressedIsOperator, setLastButtonPressedIsOperator] =
        useState<boolean>(true);

    const handleNumber = (number: string) => {
        setDisplayValue(number);
        if (lastButtonPressedIsOperator == false) {
            setDisplayValue(displayValue + number);
        }
        setLastButtonPressedIsOperator(false);
        setCurrentValue(displayValue);
    };

    useEffect(() => {
        console.log("newResult:", newResult);
    }, [newResult]);

    // track calculation by storing previous operator using the current
    const handleOperator = (operator: string) => {
        let result: number = 0;
        switch (previousOperator) {
            case "+":
                result = newResult + parseInt(currentValue);
                break;
            case "-":
                result = newResult - parseInt(currentValue);
                break;
            case "*":
                result = newResult * parseInt(currentValue);
                break;
            case "/":
                result = newResult / parseInt(currentValue);
                break;
        }

        setDisplayValue(String(result));
        setNewResult(result);

        setLastButtonPressedIsOperator(true);
        setPreviousOperator(operator);
    };

    return (
        <>
            <div className="flex max-w-xs mx-auto my-auto">Calculator page</div>
            <div className="flex ml-auto mr-auto max-w-lg">
                <div className="flex w-52 ">{displayValue}</div>
                <ul>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("1")}
                    >
                        1
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("2")}
                    >
                        2
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("3")}
                    >
                        3
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("4")}
                    >
                        4
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("5")}
                    >
                        5
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("6")}
                    >
                        6
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("7")}
                    >
                        7
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("8")}
                    >
                        8
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("9")}
                    >
                        9
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleNumber("0")}
                    >
                        0
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleOperator("+")}
                    >
                        +
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleOperator("-")}
                    >
                        -
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleOperator("*")}
                    >
                        *
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleOperator("/")}
                    >
                        /
                    </button>
                    <button
                        className="bg-black text-white p-3 rounded-lg"
                        onClick={() => handleOperator("=")}
                    >
                        =
                    </button>
                </ul>
            </div>
        </>
    );
}
