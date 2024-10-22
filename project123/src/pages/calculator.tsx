import { userAgent } from "next/server";
import { ReactNode, useEffect, useState } from "react";

export default function Calculator() {
    const [currentValue, setCurrentValue] = useState<string>("0");
    const [total, setTotal] = useState<number>(0);
    const [displayValue, setDisplayValue] = useState<string>("0");
    const [previousOperator, setPreviousOperator] = useState<
        string | undefined
    >(undefined);

    // page load is equivalent to clear display after operator button is pressed
    const [lastButtonPressedIsOperator, setLastButtonPressedIsOperator] =
        useState<boolean>(true);

    const handleNumber = (number: string) => {
        let newDisplayValue = "";
        if (lastButtonPressedIsOperator == true) {
            newDisplayValue = number;
        } else if (lastButtonPressedIsOperator == false) {
            newDisplayValue = displayValue + number;
        }
        setDisplayValue(newDisplayValue);
        setLastButtonPressedIsOperator(false);
        setCurrentValue(newDisplayValue);
    };

    useEffect(() => {
        console.log("total:", total);
        console.log("prevOp", previousOperator);
        console.log("current value", currentValue);
    }, [total, previousOperator, currentValue]);

    // track calculation by storing previous operator using the current
    const handleOperator = (operator: string): void => {
        let result: number = 0;
        if (operator === "c") {
            setDisplayValue("0");
            setCurrentValue("0");
            setTotal(0);
            setPreviousOperator("+");
            return;
        }

        switch (previousOperator) {
            case "+":
                result = total + parseInt(currentValue);
                break;
            case "-":
                result = total - parseInt(currentValue);
                break;
            case "*":
                result = total * parseInt(currentValue);
                break;
            case "/":
                result = total / parseInt(currentValue);
                break;
            case "=":
                result = total;
                break;
            case undefined:
                result = parseInt(currentValue);
                break;
        }

        setTotal(result);
        setLastButtonPressedIsOperator(true);
        setDisplayValue(String(result));
        setPreviousOperator(operator);

        if (operator === "=") {
            setPreviousOperator(undefined);
            setCurrentValue(String(0));
        }
    };

    return (
        <>
            <div className="flex mx-auto w-52 justify-center font-extrabold text-xl">
                Calculator
            </div>
            <div className="flex-auto mx-auto w-72 bg-slate-300 pt-1 shadow-lg rounded-xl">
                <div className="flex w-52 bg-white rounded-md mx-auto p-3 my-4 font-bold">
                    {displayValue}
                </div>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("1")}
                >
                    1
                </button>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("2")}
                >
                    2
                </button>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("3")}
                >
                    3
                </button>
                <button
                    className={
                        "bg-red-950 text-white p-3 rounded-lg m-4 w-10 font-serif hover:bg-red-700"
                    }
                    onClick={() => handleOperator("+")}
                    style={{
                        backgroundColor:
                            previousOperator === "+" &&
                            lastButtonPressedIsOperator
                                ? "blue"
                                : "#450a0a",
                    }}
                >
                    +
                </button>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("4")}
                >
                    4
                </button>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("5")}
                >
                    5
                </button>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("6")}
                >
                    6
                </button>
                <button
                    className="bg-red-950 text-white p-3 rounded-lg m-4 w-10 font-serif  hover:bg-red-700"
                    onClick={() => handleOperator("-")}
                    style={{
                        backgroundColor:
                            previousOperator === "-" &&
                            lastButtonPressedIsOperator
                                ? "blue"
                                : "#450a0a",
                    }}
                >
                    -
                </button>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("7")}
                >
                    7
                </button>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("8")}
                >
                    8
                </button>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("9")}
                >
                    9
                </button>
                <button
                    className="bg-red-950 text-white p-3 rounded-lg m-4 w-10 font-serif hover:bg-red-700"
                    onClick={() => handleOperator("=")}
                    style={{
                        backgroundColor:
                            previousOperator === "=" &&
                            lastButtonPressedIsOperator
                                ? "blue"
                                : "#450a0a",
                    }}
                >
                    =
                </button>
                <button
                    className="bg-black text-white p-3 rounded-lg m-4 w-10 font-serif"
                    onClick={() => handleNumber("0")}
                >
                    0
                </button>
                <button
                    className="bg-red-950 text-white p-3 rounded-lg m-4 w-10 font-serif hover:bg-red-700"
                    onClick={() => handleOperator("*")}
                    style={{
                        backgroundColor:
                            previousOperator === "*" &&
                            lastButtonPressedIsOperator
                                ? "blue"
                                : "#450a0a",
                    }}
                >
                    *
                </button>
                <button
                    className="bg-red-950 text-white p-3 rounded-lg m-4 w-10 font-serif hover:bg-red-700"
                    onClick={() => handleOperator("/")}
                    style={{
                        backgroundColor:
                            previousOperator === "/" &&
                            lastButtonPressedIsOperator
                                ? "blue"
                                : "#450a0a",
                    }}
                >
                    /
                </button>
                <button
                    className="bg-red-500 text-white p-3 rounded-lg m-4 w-10 font-serif hover:bg-red-700"
                    onClick={() => handleOperator("c")}
                >
                    C
                </button>
            </div>
        </>
    );
}
