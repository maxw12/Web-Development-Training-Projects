import { ReactNode } from "react";

type ButtonProp = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
};

export const Button = (props: ButtonProp) => {
    return (
        <button onClick={(event) => props.handleClick(event)}>
            {props.children}
        </button>
    );
};
