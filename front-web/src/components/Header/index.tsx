import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => (
  <header className="main-header">
    <Logo />
    <Link to="/">
      <div className="logo-text">
        <span className="logo-text-1">Big Game</span>
        <span className="logo-text-2"> Survey</span>
      </div>
    </Link>
  </header>
);

export default Header;
