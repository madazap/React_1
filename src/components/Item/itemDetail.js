import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../navBar/NavBar";
import {useParams} from "react-router-dom";
import {GetObjectId} from "./ItemList";
import ItemCard from "./Item";



function ItemDetail (){

       const { idproducto } = useParams(); 
       const [detalle, setDetalle] = useState({});
       const [load, setLoad] =useState(true);
       const sirve = GetObjectId(idproducto);
       
        const getItem = () =>{
          return new Promise ((resolve, reject)=>{
              setTimeout(() => {
                let item = GetObjectId(idproducto);
                resolve(item);
                setLoad(false);
              }, 1500);

          })
        }

              useEffect(() => {
                  async function fetchedItems(){
                    const item=await getItem();
                    setDetalle(item);
                  }
                fetchedItems();
              },[]);

         
          return (
            
           

            <div className="detalle-item">
              {load ? (
                <h3>Cargando Data</h3>
              ) : (
                  <ItemCard
                    id={detalle.id}
                    title={detalle.title}
                    price={detalle.price}
                    description={detalle.description}
                    category={detalle.category}
                    image={detalle.image}
                  />
                
              )}
            </div>
          );
          

                 

    
        const {id,title,price,description, category,image} = GetObjectId(idproducto);

       
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