import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex bg-green-300 shadow-md p-4 space-x-3 mx-auto">
                <h1 className="text-lg font-bold font-serif p-2">
                    First Next Project
                </h1>
                <Link
                    href="/"
                    className="hover:bg-green-200 active:bg-green-500 p-2 rounded-lg"
                >
                    Home{" "}
                </Link>
                <Link
                    href="/About"
                    className="hover:bg-green-200 active:bg-green-500 p-2 rounded-lg"
                >
                    About{" "}
                </Link>
                <Link
                    href="/posts/first-post"
                    className="hover:bg-green-200 active:bg-green-500 p-2 rounded-lg"
                >
                    Cards{" "}
                </Link>
            </div>
        </>
    );
}
