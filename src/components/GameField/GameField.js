// GameField.js
import React from "react";
import Button from "../Button/Button";
import Board from "../Board/Board";
import Game from "../Game/Game";
import "./Style.scss";

const GameField = () => {
    return (
        <div className="game-field">
            <Board />
            <Game />
            <div className="control">
                <Button name="Start Game" className="start-game" />
            </div>
        </div>
    );
};

export default GameField;
