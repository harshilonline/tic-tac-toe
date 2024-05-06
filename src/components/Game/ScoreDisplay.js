/* eslint-disable react/prop-types */
import React from "react";
import "./ScoreDisplay.css";

function ScoreDisplay(props) {
  return (
    <div className="score-display">
      <div className="x-score score">
        <p>{props.playerOne === "X" ? "X (P1)" : "X (CPU)"}</p>
        <p className="score-number">{props.xScore}</p>
      </div>
      <div className="tie-score score">
        <p>Ties</p>
        <p className="score-number">{props.tieScore}</p>
      </div>
      <div className="o-score score">
        <p>{props.playerOne === "O" ? "O (P1)" : "O (CPU)"}</p>
        <p className="score-number">{props.oScore}</p>
      </div>
    </div>
  );
}

export default ScoreDisplay;