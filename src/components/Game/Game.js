import React, { useEffect } from "react";
import { data } from "../../data/data";
import "./Style.scss";

const Game = () => {
    const element = data.map(item => 
        <div className="hole" key={item.id}>
            <img src={item.src} alt={item.id} className={item.class + " " + item.class + "-" + item.id} />
        </div>
    );
    return (
        <div className="game">
            { element }
        </div>
    );
};

export default Game;