import React, { useState } from "react";
import Game from "./components/Game/Game";
import GameMenu from "./components/UI/GameMenu";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [pvpGameStart, setPvpGameStart] = useState(false);
  const [pvcGameStart, setPvcGameStart] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerCpu, setPlayerCpu] = useState("");

  function refreshPage() {
    window.location.reload(true);
  }

  function setPlayerOneIcon(icon) {
    setPlayerOne(icon);
  }

  function setPlayerTwoIcon(icon) {
    setPlayerTwo(icon);
  }

  function setPlayerCpuIcon(icon) {
    setPlayerCpu(icon);
  }

  function displayMenuHandler() {
    setShowMenu(!showMenu);
  }

  function startPvpGame() {
    setPvpGameStart(!pvpGameStart);
  }

  function startPvcGame() {
    setPvcGameStart(!pvcGameStart);
  }

  return (
    <main className="centered-container">
      {showMenu && (
        <GameMenu
          onDisplayMenuHandler={displayMenuHandler}
          onSetPlayerOneIcon={setPlayerOneIcon}
          onSetPlayerTwoIcon={setPlayerTwoIcon}
          onSetPlayerCpuIcon={setPlayerCpuIcon}
          onStartPvpGame={startPvpGame}
          onStartPvcGame={startPvcGame}
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerCpu={playerCpu}
        />
      )}
      {!showMenu && pvcGameStart && !pvpGameStart && (
        <Game
          onShowMenu={setShowMenu}
          onRefreshPage={refreshPage}
          playerOne={playerOne}
          playerCpu={playerCpu}
        />
      )}
    </main>
  );
}

export default App;