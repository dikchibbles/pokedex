import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <Link to="/" className="logo"><h1>Pokedex</h1></Link>
            </div>
        </div>
    );
}

export default Header;


