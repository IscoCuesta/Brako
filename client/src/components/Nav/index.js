import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <a className="navbar-brand" href="/">
        <img className="logo" src={require("../../static/logo.png")}></img>
      </a>
      <a className="carrito" href="/carrito">
        <img className="logo" src={require("../../static/carrito.png")}></img>
        {props.carrito === 0?
        "":
        <span className="badge badgeSecondary" aria-hidden="true">{props.carrito}</span>
        }
      </a>
    </nav>
  );
}

export default Nav;
