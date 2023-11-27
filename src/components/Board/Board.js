// Board.js
import React, { useEffect, useState } from "react";
import "./Style.scss";

const Board = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  let timeUp = false;
  
  const initFunc = () => {
    const startGame = document.querySelector(".start-game");
    startGame.addEventListener("click", () => {
      setTimer(0);
      setCounter(0);
      setIntervalFunc();
      animateFunc();
      hitEventFunc();
      timeUp = false;
    });
  };

  const setIntervalFunc = () => {
    let intervalIdTime = setInterval(() => {
      setTimer((time) => {
        if (time === 10 - 1) {
          clearInterval(intervalIdTime);
          timeUp = true
        }
        return time + 1;
      });
    }, 1000);
  };

  const hitEventFunc = () => {
    setCounter(0);
    const countHit = document.querySelectorAll(".mole");
    const countHitFunc = (e) => {
      console.log("clicked", e.target);
      console.log("Hit!");
      setCounter((count) => count + 1);
    };

    countHit.forEach((mole) => {
      mole.addEventListener("click", countHitFunc);
    });
  };

  const randomHole = () => {
    const holes = document.querySelectorAll(".hole")
    const id = Math.floor(Math.random() * holes.length);
    console.log(id);
    const hole = holes[id];
    return hole;
  };

  const animateFunc = (holes) => {
    const time = Math.round(Math.random() * (1000 - 500) + 500);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) animateFunc();
    }, time);
  };

  useEffect(() => {
    initFunc();
  }, []);

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
