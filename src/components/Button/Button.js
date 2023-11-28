import React from "react";
import "./Style.scss";

const Button = (props) => {
    return (
        <button className={ props.className }>
            { props.name }
        </button>
    ); 
};

export default Button;