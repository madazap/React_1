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
    <div className="flex justify-center">
      <div className="flex flex-col  md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-98 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={detalle.image}
          alt={detalle.title}
        />
        <div className="p-6 flex flex-col justify-start">
          <h5 className="text-black-900 text-xl font-medium mb-2">
            {detalle.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">{detalle.description}</p>
          <p className="text-red-700 text-s">USD {detalle.price}</p>

          {GoToCart ? (
            <Link className="text-violet-700 font-bold text-2xl " to="/cart">
              Terminar compra
            </Link>
          ) : (
            <ItemCount stock={8} value={1} addA={addA} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemOnly;
