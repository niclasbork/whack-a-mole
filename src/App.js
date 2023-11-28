import { useEffect } from "react";
import "./assets/css/main.scss";
import Mole01 from "./assets/img/mole-01.png";
import Mole02 from "./assets/img/mole-02.png";
import Mole03 from "./assets/img/mole-03.png";
import Button from "./components/Button/Button";
import GameField from "./components/GameField/GameField";

function App() {
  useEffect(() => {
    let startGame = document.querySelector("Button");
    let gameField = document.querySelector(".game-field");

    startGame.addEventListener("click", (e) => {
      e.target.style = "display: none";
      gameField.style = "display: block";
    });
  }, []);
  

  return (
    <div className="App">
      <h1>WHACK-A-MOLE!</h1>
      <img src={Mole01} alt="" className="hello-mole" />
      <img src={Mole02} alt="" className="hello-mole" />
      <img src={Mole03} alt="" className="hello-mole" />
      <Button name="Load Game" className="load-game" />
      <GameField />
    </div>
  );
}

export default App;
