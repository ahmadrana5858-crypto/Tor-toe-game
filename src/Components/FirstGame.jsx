import React, { useState } from 'react';
import './FirstGame.css';

export default function FirstGame() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);  

    const handleClick = (index) => {
  
        if (board[index] !== null) return;

        const newBoard = [...board];

         
        newBoard[index] = isXTurn ? "X" : "O";

        setBoard(newBoard);

        
        setIsXTurn(!isXTurn);

        console.log("Clicked:", index, "Value:", newBoard[index]);
    };

    function renderSquare(index) {
        return (
            <button
                className="square"
                onClick={() => handleClick(index)}
            >
                {board[index]}
            </button>
        );
    }

    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <h2 className='hp'>Turn: {isXTurn ? "X" : "O"}</h2>
        </div>
    );
}
