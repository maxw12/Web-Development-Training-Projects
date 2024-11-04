import { useEffect, useRef, useState } from "react";

export default function Board() {
    let boardSwitch = Array(9).fill(0);
    let boardDisplay = Array(9).fill("");

    const initialBoard = boardSwitch.map((switchItem, i) => ({
        switch: switchItem,
        display: boardDisplay[i],
    }));
    const [player, setPlayer] = useState<"X" | "O" | null>("X");
    const [currentBoardState, setCurrentBoardState] = useState(initialBoard);
    const [winState, SetWinState] = useState<boolean>(false);
    const [scoreX, setScoreX] = useState<number>(0);
    const [scoreY, setScoreY] = useState<number>(0);
    const prevPlayer = useRef<"X" | "O" | null>();

    const playerScores = (i: number) => {
        player === "X" && currentBoardState[i].display === player
            ? setScoreX(scoreX + 1)
            : setScoreY(scoreY + 1);
    };

    function checkWin() {
        if (
            currentBoardState[0].switch === 1 &&
            currentBoardState[0].display === currentBoardState[1].display &&
            currentBoardState[1].display === currentBoardState[2].display
        ) {
            SetWinState(true);
            playerScores(0);
        } else if (
            currentBoardState[0].switch === 1 &&
            currentBoardState[0].display === currentBoardState[3].display &&
            currentBoardState[3].display === currentBoardState[6].display
        ) {
            SetWinState(true);
            playerScores(0);
        } else if (
            currentBoardState[4].switch === 1 &&
            currentBoardState[3].display === currentBoardState[4].display &&
            currentBoardState[4].display === currentBoardState[5].display
        ) {
            SetWinState(true);
            playerScores(4);
        } else if (
            currentBoardState[4].switch === 1 &&
            currentBoardState[1].display === currentBoardState[4].display &&
            currentBoardState[4].display === currentBoardState[7].display
        ) {
            SetWinState(true);
            playerScores(4);
        } else if (
            currentBoardState[4].switch === 1 &&
            currentBoardState[0].display === currentBoardState[4].display &&
            currentBoardState[4].display === currentBoardState[8].display
        ) {
            SetWinState(true);
            playerScores(4);
        } else if (
            currentBoardState[4].switch === 1 &&
            currentBoardState[2].display === currentBoardState[4].display &&
            currentBoardState[4].display === currentBoardState[6].display
        ) {
            SetWinState(true);
            playerScores(4);
        } else if (
            currentBoardState[8].switch === 1 &&
            currentBoardState[2].display === currentBoardState[5].display &&
            currentBoardState[5].display === currentBoardState[8].display
        ) {
            SetWinState(true);
            playerScores(8);
        } else if (
            currentBoardState[8].switch === 1 &&
            currentBoardState[6].display === currentBoardState[7].display &&
            currentBoardState[7].display === currentBoardState[8].display
        ) {
            SetWinState(true);
            playerScores(8);
        }
    }

    const getPrevPlayer = useEffect(() => {
        prevPlayer.current = player;
    }, [player]);

    function handleClick(index: number) {
        const boardStateChanging = currentBoardState.map((boardItem, i) => {
            if (i === index && boardItem.switch !== 1) {
                if (player === "X") {
                    boardItem.switch = 1;
                    boardItem.display = player;
                    setPlayer("O");
                    return boardItem;
                } else {
                    boardItem.switch = 1;
                    boardItem.display = player;
                    setPlayer("X");
                    return boardItem;
                }
            } else {
                return boardItem;
            }
        });
        setCurrentBoardState(boardStateChanging);
        checkWin();
    }

    const degub = useEffect(() => {
        return () => {
            console.log(currentBoardState);
        };
    }, [currentBoardState]);

    return (
        <>
            <div className="flex text-justify font-bold font-mono text-2xl m-auto w-72">
                Noughts and Crosses
            </div>
            {winState ? (
                <div className="w-70 m-auto text-center justify-center  font-bold text-xl text-cyan-700">
                    Congratulations, Player {prevPlayer.current}, you won!
                </div>
            ) : (
                <>
                    <div className="m-auto justify-center w-44">
                        Player {player}, it's your turn
                    </div>
                    <div className="grid grid-cols-3 grid-flow-row mt-4 size-52 m-auto">
                        {currentBoardState.map((boardItem, i) => (
                            <button
                                className={` border-black border-r aspect-square [&:nth-child(3n)]:border-r-0 border-t data-[row=first-row]:border-t-0 ${
                                    i < 3 && "border-t-0"
                                }`}
                                onClick={() => {
                                    handleClick(i);
                                }}
                            >
                                {boardItem.display}
                            </button>
                        ))}
                    </div>
                </>
            )}
            <div className="w-70 m-auto text-center justify-center text-lg">
                Score: X {scoreX}:{scoreY} O
            </div>
            <div className="w-56 m-auto text-center justify-center">
                <button
                    className="bg-cyan-200 m-1 rounded-md p-1"
                    onClick={() => {
                        setCurrentBoardState(initialBoard);
                        setPlayer("X");
                        SetWinState(false);
                    }}
                >
                    Reset Board
                </button>
                <button
                    className="bg-cyan-200 rounded-md m-1 p-1"
                    onClick={() => {
                        setCurrentBoardState(initialBoard);
                        setPlayer("X");
                        SetWinState(false);
                        setScoreX(0);
                        setScoreY(0);
                    }}
                >
                    Reset Game
                </button>
            </div>
        </>
    );
}
