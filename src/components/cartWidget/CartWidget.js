import React from "react";
import cart from "./cart.png";
import cartc from "./cart-content.png";
import { useCartContext } from "../../Context/Context";
import "./cartWidget.css";

const CartWidget = () => {


const {totalProducts} = useCartContext();

  return (
    <div className="float-right">
      {totalProducts() === 0 ? (
        <img src={cartc}></img>
      ) : (
        <div className="float-right text-red-600 ">
          {totalProducts()}
          <img src={cart}></img>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
