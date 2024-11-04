type NavBarProps = {
    pageNavigation: string;
    pageButtonDisplayName: string;
    buttonHoverStyle?: "hover:bg-slate-300 active:bg-slate-500";
};

export default function NavBar() {
    return (
        <>
            <div className="bg-slate-500 mx-auto flex p-6 space-x-4">
                <div className="p-2 font-serif font-bold text-yellow-400">
                    {" "}
                    Calculator App{" "}
                </div>
                <LinksToComponents
                    pageNavigation="/"
                    pageButtonDisplayName="Login"
                />
                <LinksToComponents
                    pageNavigation="/calculator"
                    pageButtonDisplayName="Calculator"
                />
                <LinksToComponents
                    pageNavigation="/tictactoe"
                    pageButtonDisplayName="TicTacToe"
                />
            </div>
        </>
    );
}

function LinksToComponents(props: NavBarProps) {
    return (
        <>
            <a
                href={props.pageNavigation}
                className="hover:bg-slate-400 active:bg-slate-100 rounded-md p-2 text-yellow-400 font-bold font-serif"
            >
                {props.pageButtonDisplayName}
            </a>
        </>
    );
}
