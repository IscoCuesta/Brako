import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <a className="navbar-brand" href="/">
        <img className="logo" src={require("../../static/logo.png")}></img>
      </a>
    </nav>
  );
}

export default Nav;
