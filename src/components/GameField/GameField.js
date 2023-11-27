// GameField.js
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Board from "../Board/Board";
import Game from "../Game/Game";
import "./Style.scss";

const GameField = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  const resetFunc = () => {
    setCounter(0);
    setTimer(0);
  };

  useEffect(() => {
    const newGame = document.querySelector(".new-game");

    const reset = () => {
      console.log("Reset!");
      resetFunc();
    };

    const ng = newGame.addEventListener("click", reset);

    return () => {
        ng();
    };
  }, []);

  return (
    <div className="game-field">
      <Board counter={counter} setCounter={setCounter} timer={timer} setTimer={setTimer} />
      <Game />
      <div className="control">
        <Button name="Start Game" className="start-game" />
        <Button name="New Game" className="new-game" />
      </div>
    </div>
  );
};

export default GameField;
