import { ReactNode } from "react";

type ValueProp = {
    heading: string;
    value?: number;
    children?: ReactNode;
};

export const DisplayValue = (props: ValueProp) => {
    return (
        <div className="border-2 rounded-lg shadow-lg shadow-slate-200 border-slate-300 w-64 p-2">
            <h1 className="font-bold font-sans">{props.heading}</h1>
            <p>
                The value you set is: {props.value} {props.children}
            </p>
        </div>
    );
};
