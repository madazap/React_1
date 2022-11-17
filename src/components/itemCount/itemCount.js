import React from "react";
import "./itemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, value, addA}) => {
  const [counter, setCounter] = useState(value);
  

  const handlePlus = () => {
    if (counter < stock) {
      setCounter((c) => c + 1);
    } else {
      //no hay mas stock, mostrar mensaje
      console.log("no hay mas unidades");
    }
  };

  const handleMinus = () => {

    if(counter>1){
      setCounter((c) => c - 1);
    }
    else{
      //no se aceptan negativos
      
    }
  };

  return (
    <div className="counter">
      <button disabled={counter<=1}  onClick={handleMinus}>-</button>
      <span>{counter}</span>
      <button disabled={counter>=stock} onClick={handlePlus}>+</button>
      <div className="botonescontador">
        <button disabled={stock<=0} onClick={()=>addA(counter)}> Añadir al carrito </button>
      </div>
    </div>
  );
};

export default ItemCount;
