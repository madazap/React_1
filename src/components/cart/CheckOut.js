import { getFirestore, addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useCartContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import Confirm from "../../screens/confirm";


const CheckOut = () => {


const validation = (email1, email2, nombre, direccion) => {
  if (email1 !== email2) return "Verifica tu email";
  if (nombre.length < 1) return "Tu nombre debe tener minimo 6 letras";
  if (direccion.length < 1) return "Tu direccion debe tener minimo 6 letras";
};

const [email1,setEmail1]=useState("");
const [email2, setEmail2] = useState("");
const [nombre, setNombre] = useState("");
const [direccion, setDireccion] = useState("");
const {cart, totalPrice}=useCartContext();
const errorMessage = validation(email1, email2, nombre, direccion);
const navigate = useNavigate();

const check = () => {
   
    const order = {

        buyer: {
            name:nombre,
            email: email1,
            direct: direccion,
        },
        items:  cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity:product.quantity,})),
        total: totalPrice() ,
    }

    const db =getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
        .then( ({id})=>Send(id))

               
            
            };
 
const Send = (id)=>{
    console.log(id);
    navigate("/checkout", {state:{order:id}} );
}



return (
  <div className="formCheck pt-6 ">
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        check();
      }}
    >
      <label className="block text-black-500 font-semi-bold md:text-left mb-1 md:mb-0 pr-4">
        Nombre
      </label>
      <input
        className="bg-blue-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        name="nombre"
        autoComplete="off"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      ></input>
      <label className="block text-black-500 font-semi-bold md:text-left mb-1 md:mb-0 pr-4">
        E Mail
      </label>
      <input
        className="bg-blue-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="email"
        name="mail1"
        autoComplete="off"
        value={email1}
        onChange={(e) => setEmail1(e.target.value)}
      ></input>
      <label className="block text-black-500 font-semi-bold md:text-left mb-1 md:mb-0 pr-4">
        Confirma tu E Mail
      </label>
      <input
        className="bg-blue-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="email"
        name="mail2"
        autoComplete="off"
        value={email2}
        onChange={(e) => setEmail2(e.target.value)}
      ></input>
      <label className="block text-black-500 font-semi-bold md:text-left mb-1 md:mb-0 pr-4">
        Direccion de envio
      </label>
      <input
        className="bg-blue-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        name="direccion"
        autoComplete="off"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      ></input>
      <p className="text-rose-600 font-sans	text-lg ">{errorMessage}</p>
      {errorMessage ? (
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
          disabled="disabled"
        >
          Confirmar pedido
        </button>
      ) : (
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
        >
          Confirmar pedido
        </button>
      )}
    </form>
  </div>
);
}

export default CheckOut;