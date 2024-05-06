/* eslint-disable react/prop-types */
import React from "react";
import Square from "./Square";
import "./Board.css";

function Board({ board, onClick, winningCombination, winner, className, playerOne, playerCpu}) {
  return (
    <div className="board">
      {board.map((square, i) => (
        <Square
          key={i}
          winningCombination={winningCombination}
          winner={winner}
          playerOne={playerOne}
          playerCpu={playerCpu}
          className={className}
          value={square}
          onClick={() => onClick(i)}
          index={i}
        />
      ))}
    </div>
  );
}
export default Board;