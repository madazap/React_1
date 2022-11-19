import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/Context";
import ItemCard from "../Item/Item";
import ItemCart from "../Item/itemCart";
import empty from "./Empty cart.png";
import "../cart/cart.css";
import CheckOut from "./CheckOut";

const Cart = () =>{

    const {cart, totalPrice}=useCartContext();
    const [check, setCheck]=useState(false);
    
    const aak = () => {
         
         setCheck(true);
    }; 

        if(cart.length ===0){

            return (
              <div className="emptyCart">
                {" "}
                <img src={empty} alt="Carrito vacio"></img>
                Tu carrito esta vacio
                <NavLink className="vacio" to={"/"}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {" "}
                    Continuar comprando{" "}
                  </button>
                </NavLink>
              </div>
            ); 
            
        }
        
    
    
        return (
          <>
            {cart.map((product) => (
              <ItemCart key={product.id} product={product} />
            ))}

            <p>Total de tu compra {totalPrice()}</p>
            {check ? (
              <CheckOut />
            ) : (
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={aak}
              >
                Finaliza tu compra
              </button>
            )}
          </>
        );
        
       


}


export default Cart;