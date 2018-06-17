import React from "react";

const Navbar = (props) => (
    <nav className="nav nav-fill nb">
        <a className="nav-item">
            <h1>Clicky Game</h1>
        </a>
        <a className="nav-item">
            <h2>{props.message}</h2>
        </a>
        <a className="nav-item">
            <h1>Score: {props.current} | High Score: {props.highScore}</h1>
        </a>
    </nav>
)


export default Navbar;