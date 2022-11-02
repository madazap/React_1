import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import "./navBar.css";

const menus = ["Categorias", "Accesorios", "Sale"];

export default function navBar() {
  return (
    <div className="navBar">
      <CartWidget />
      {menus.map((opciones, i) => (
        <ul key={i}>
          <li>
            <a href="">{opciones}</a>
          </li>
        </ul>
      ))}
    </div>
  );
}
