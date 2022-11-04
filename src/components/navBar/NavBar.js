import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import "./navBar.css";
import { Link } from "react-router-dom";

const menus = ["Hombre", "Mujer", "Joyeria", "Electronicos"];

export default function navBar() {
  return (
    <div className="navBar">
      <CartWidget />

      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/men's clothing"}>Hombre</Link>
        </li>
        <li>
          <Link to={"/category/women's clothing"}>Mujer</Link>
        </li>
        <li>
          <Link to={"/category/jewelery"}>Joyeria</Link>
        </li>
      </ul>
    </div>
  );
}
