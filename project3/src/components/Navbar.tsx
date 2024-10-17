// import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [name, setName] = useState<string>("");

    fetch("/api/hello").then(async (res) => {
        const data = await res.json();
        setName(data.name);
    });

    return (
        <>
            <div className="flex bg-green-300 shadow-md p-4 mx-auto">
                <h1 className="text-lg font-bold font-serif p-2">
                    First Next Project
                </h1>
                <Link href="/" text="Home" />
                <Link href="/About" text="About" />
                <Link href="/posts/first-post" text="Cards" />
                <p className="ml-auto">Greetings: {name}</p>
            </div>
        </>
    );
}

type LinkProps = {
    href: string;
    text: string;
};

// SKA: Abstract link into its own component
function Link(props: LinkProps) {
    return (
        <a
            href={props.href}
            className="hover:bg-green-200 active:bg-green-500 p-2 rounded-lg"
        >
            <p>{props.text}</p>
        </a>
    );
}
