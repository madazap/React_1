import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import logo from "./Logo.png";


export default function navBar() {
  return (
    <div className="navBar">
      <img src={logo} alt="Tienda Feather"></img>
      <ul>
        <li>
          <NavLink className="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="active" to={"/category/men's clothing"}>
            Hombre
          </NavLink>
        </li>
        <li>
          <NavLink className="active" to={"/category/women's clothing"}>
            Mujer
          </NavLink>
        </li>
        <li>
          <NavLink className="active" to={"/category/electronics"}>
            Electronicos
          </NavLink>
        </li>
      </ul>
      <NavLink to={"/cart"}>
        <CartWidget />
      </NavLink>
    </div>
  );
}
