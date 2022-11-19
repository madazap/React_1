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
  <div className="formCheck">
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        check();
      }}
    >
      <label>Nombre</label>
      <input
        type="text"
        name="nombre"
        autoComplete="off"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      ></input>
      <label>E Mail</label>
      <input
        type="email"
        name="mail1"
        autoComplete="off"
        value={email1}
        onChange={(e) => setEmail1(e.target.value)}
      ></input>
      <label>Confirma tu E Mail</label>
      <input
        type="email"
        name="mail2"
        autoComplete="off"
        value={email2}
        onChange={(e) => setEmail2(e.target.value)}
      ></input>
      <label>Direccion de envio</label>
      <input
        type="text"
        name="direccion"
        autoComplete="off"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      ></input>
      <p className="ErrorMessage">{errorMessage}</p>
      {errorMessage ? (
        <button type="submit" disabled="disabled">
          Confirmar pedido
        </button>
      ) : (
        <button type="submit">Confirmar pedido</button>
      )}
    </form>
  </div>
);
}

export default CheckOut;