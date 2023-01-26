import { useState } from "react";
import React from "react";
import Square from "./Square";
import BoardDiv from "./assets/styles/boardDiv.js";
import DivStatus from "./assets/styles/divStatus";
import RestartButton from "./assets/styles/restartButton";
import GameTitle from "./assets/styles/gameTitle";
import BoardRow from "./assets/styles/boardRow";

function Board() {
    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [isX, setIsX] = React.useState(true);

    const handleClick = (i) => {
        if (calculeteWinner(squares) || squares[i]){
            return
        }


        squares[i] = isX ? 'X' : 'O';
        setSquares(squares);
        setIsX(!isX)
    }

    const winner = calculeteWinner(squares);
    let status

    if(winner) {
        status = `Winner: ${winner}`
    } else {
        status = `Next player: ${isX ? 'X' : 'O'}`
    }

    const handleRestart = () => {
        setIsX(true);
        setSquares(Array(9).fill(null));
    }
    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />

    }

    return(
        <>
        
        <BoardDiv>
        <GameTitle>Tic Tac Toe</GameTitle>
            <BoardRow>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </BoardRow>
            <BoardRow>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </BoardRow>
            <BoardRow>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </BoardRow>
            <DivStatus>{status}</DivStatus>
            <RestartButton onClick={handleRestart}>Restart Game!</RestartButton>
            </BoardDiv>
            </>
    )
}

function calculeteWinner(squares) {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i]

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return null
}

export default Board;