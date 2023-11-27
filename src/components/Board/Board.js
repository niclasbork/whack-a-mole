// Board.js
import React, { useEffect } from "react";
import "./Style.scss";

const Board = ({ counter, setCounter, timer, setTimer }) => {
  const timerFunc = () => {
    const startGame = document.querySelector(".start-game");
    let intervalId;
    startGame.addEventListener("click", () => {
      intervalId = setInterval(() => {
        setTimer((time) => {
          if (time === 10 - 1) {
            clearInterval(intervalId);
          }
          return time + 1;
        });
      }, 1000);
    });
  };

  const hitEvent = () => {
    const countHit = document.querySelectorAll(".mole");

    const countHitFunc = (e) => {
      console.log("clicked", e.target);
      setCounter((count) => count + 1);
    };

    countHit.forEach((mole) => {
      mole.addEventListener("click", countHitFunc);
    });
  };

  useEffect(() => {
    hitEvent();
    const intervalId = timerFunc();
    return () => clearInterval(intervalId);
  }, [setCounter, setTimer]);

  return (
    <div className="board">
      <div className="score">
        Your score: <span className="bold counter">{counter}</span>
      </div>
      <div className="timer">
        Time: <span className="time bold">{timer}</span>
      </div>
    </div>
  );
};

export default Board;
