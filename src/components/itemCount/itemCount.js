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
    <div className="flex space-x-5">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={counter <= 1}
        onClick={handleMinus}
      >
        -
      </button>
      <span className="text-xl font-semibold text-center inline-block align-baseline">
        {counter}
      </span>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={counter >= stock}
        onClick={handlePlus}
      >
        +
      </button>
      <div className="botonescontador">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          disabled={stock <= 0}
          onClick={() => addA(counter)}
        >
          <svg
            aria-hidden="true"
            className="mr-2 -ml-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>{" "}
          Añadir al carrito{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
