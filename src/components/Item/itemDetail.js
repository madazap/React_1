import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../navBar/NavBar";
import {useParams} from "react-router-dom";
import {GetObjectId} from "./ItemList";
import ItemOnly from "./itemOnly";
import { getDoc, doc, getFirestore } from "firebase/firestore";


function ItemDetail (){

      
       const { idproducto } = useParams(); 
       const [detalle, setDetalle] = useState({});
       const [load, setLoad] =useState(true);


              useEffect(() => {
                  setLoad(false);
                  const querydb = getFirestore();
                  const queryDoc = doc(querydb,'Productos',idproducto);
                  getDoc(queryDoc)
                    .then( res => setDetalle({id:res.id, ...res.data()}))
              },[]);

     


          return (
            <div className="pt-28 ">
              <NavBar />
              <div>
                {load ? <h3>Cargando Data</h3> : <ItemOnly detalle={detalle} />}
              </div>
            </div>
          );

}

export default ItemDetail;