import CartWidget from "../cartWidget/CartWidget"
import "./navBar.css";


const menus=["Colecciones","Accesorios","Sale","Materiales","Nosotros"];

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

