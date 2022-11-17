import "./item.css";
import { Link, useParams } from "react-router-dom";
import ItemCount from "../itemCount/itemCount";
import { useContext, useState } from "react";
import { CartImg } from "../../Context/Context";
import {useCartContext} from "../../Context/Context"

function ItemOnly({ detalle }) {

  //variable para modificar el icono del carrito cuando se agrega algo

const [GoToCart, setGoToCart] = useState(false);
const {addProduct}=useCartContext();

  const addA = (cantidad) => {
    setGoToCart(true);
    addProduct(detalle, cantidad);
  };

  return (
    <div className="itemCardO">
      <Link to={`detalle/${detalle.id}`}>
        <img className="prodImg" alt={detalle.title} src={detalle.image} />
        <div className="ProdDescription">
          <h2> {detalle.title}</h2>
          <h3> USD {detalle.price}</h3>
          <h3> {detalle.description}</h3>
        </div>
      </Link>
      {GoToCart ? <Link className="retorno" to='/cart'>Terminar compra</Link> : 
                      <ItemCount stock={8} value={1} addA={addA} />}
    </div>
  );
}

export default ItemOnly;
