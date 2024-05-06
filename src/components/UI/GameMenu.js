
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./GameMenu.css";
import grayXIcon from "../assets/icon-x-gray.svg";
import darkOIcon from "../assets/icon-o-dark.svg";
import logo from "../assets/logo.svg";

function GameMenu(props) {
  const [disable, setDisable] = useState(false);

  return (
    <div className="welcome-menu-container">
      <img src={logo} alt="x and o logo" className="logo-menu" />
      <div className="pick-mark-container">
        <p className="pick-mark-container__pick-player">Pick player 1 mark</p>
        <div className="pick-xo-btn-container">
          <button
            className={disable ? "disabled" : "pick-x-btn"}
            disabled={disable}
            onClick={() => {
              props.onSetPlayerOneIcon("X");
              props.onSetPlayerTwoIcon("O");
              props.onSetPlayerCpuIcon("O");
              setDisable(true);
            }}
          >
            <img src={grayXIcon} alt="gray X icon" className="xo-icons-menu" />
          </button>
          <button
            className={disable ? "disabled" : "pick-o-btn"}
            disabled={disable}
            onClick={() => {
              props.onSetPlayerOneIcon("O");
              props.onSetPlayerTwoIcon("X");
              props.onSetPlayerCpuIcon("X");
              setDisable(true);
            }}
          >
            <img src={darkOIcon} alt="dark O icon" className="xo-icons-menu" />
          </button>
        </div>
        {!disable && (
          <p className="pick-mark-container__note">Remember: x goes first</p>
        )}
        {disable && (
          <p className="pick-mark-container__note">
            P1 is {props.playerOne}, P2/CPU is {props.playerTwo}
          </p>
        )}
      </div>
      <div className="new-game-btn-container">
        <button
          className="new-game-btn vscpu"
          disabled={!disable}
          onClick={() => {
            props.onDisplayMenuHandler();
            props.onStartPvcGame();
          }}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default GameMenu;
