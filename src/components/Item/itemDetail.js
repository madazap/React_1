import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../navBar/NavBar";
import {useParams} from "react-router-dom";
import {GetObjectId} from "./ItemList";
import ItemCard from "./Item";



function ItemDetail (){

       const { idproducto } = useParams(); 
       const [detalle, setDetalle] = useState({});
       const [load, setLoad] =useState(false);
       const sirve = GetObjectId(idproducto);
       
        const getItem = () =>{
          return new Promise ((resolve, reject)=>{
              setTimeout(() => {
                let item = GetObjectId(idproducto);
                resolve(item);
                setLoad(true);
              }, 1500);

          })
        }

              useEffect(() => {
                  async function fetchedItems(){
                    const item=await getItem();
                    console.log(item);
                    setDetalle(item);
                  }
                fetchedItems();
              },[]);

         /*
          return (
            <div className="detalle-item">
              {load ? (
                <h3>Problemas al cargar Datos</h3>
              ) : (
                detalle.map((det) => (
                  <ItemCard
                    id={det.id}
                    title={det.title}
                    price={det.price}
                    description={det.description}
                    category={det.category}
                    image={det.image}
                  />
                ))
              )}
            </div>
          );
          */

                  return (
                    <div>
                      <h1> {} </h1>
                      {console.log(detalle)}
                    </div>
                  );

        // la Constante sirve almacena el resutado de una funcion, trae un objeto, todo ok
        
        
        // cuando hago destructure con la misma funcion se supone debe separar las variables
        const {id,title,price,description, category,image} = GetObjectId(idproducto);

        //imprimo  el array y ok
        //console.log(sirve);
      
        
        //console.log(sirve.keys);
        //console.log(Object.values(sirve));
        //console.log (typeof sirve);

    
        // imprimo las variables hecho el destructure y no ... indefinida
        //console.log(sirve.title);
        
        
       
        
        
     
    
      // la cagada es que esta cargando el div con el array en cero, luego el use state actua pero ya el div esta cargado
      //renderizado de la tarjeta de 1 solo producto con mas detalles, despues de que trae la informacion del producto
  
   
    
       
        
    

      //<div className="itemDetail">

      //<img className="prodImg" alt={title} src={image} />
      //<div className="ProdDescription">
      //<h2> {title}</h2>
      //<h2> {id}</h2>
      //<h3> USD {price}</h3>
      //<h3> Categoria {category}</h3>
      //</div>

      //</div>
   
      

}

export default ItemDetail;