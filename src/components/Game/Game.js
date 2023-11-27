import React, { useEffect } from "react";
import { data } from "../../data/data";
import dirt from "../../assets/img/dirt.svg";
import "./Style.scss";

const Game = () => {
    const element = data.map(item => 
        <div className="game-item" key={item.id} style={{ backgroundImage: `url(${dirt})` }}>
            <img src={item.src} alt={item.id} className={item.class + " " + item.class + "-" + item.id} />
        </div>
    )
    useEffect(() => {
        // console.log(data);
    }, []);

    return (
        <div className="game">
            { element }
        </div>
    );
};

export default Game;