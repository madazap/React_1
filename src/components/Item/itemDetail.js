import React from "react";
import NavBar from "../navBar/NavBar";
import {useParams} from "react-router-dom";

function ItemDetail (){

     const { name } = useParams(); 

    return(
        <div>
            
            Detalle de Producto  {name}
            </div>

    );



}

export default ItemDetail;