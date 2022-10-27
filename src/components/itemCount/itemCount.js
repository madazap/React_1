import React from "react";
import "./itemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, value }) => {
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

    if(counter>0){
      setCounter((c) => c - 1);
    }
    else{
      //no se aceptan negativos
      
    }
  };

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      {counter}
      <button onClick={handlePlus}>+</button>
      <button> Añadir al carrito </button>
    </div>
  );
};

export default ItemCount;
