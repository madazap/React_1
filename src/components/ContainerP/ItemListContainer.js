import React from "react";
import { useState, useEffect } from "react";
import "./containerP.css";
import ItemCard from "../Item/Item";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';


const ContainerP = () => {

   const [products, setProducts] = useState([]);
   const [find, setFind] = useState("");
   const { category } = useParams(); 


   

   useEffect(() => {
     const querydb =getFirestore();
     const queryCollection= collection(querydb, 'Productos');
     
      if(category){
          const queryFilter = query(
            queryCollection,
            where("category", "==", category)
          );
          getDocs(queryFilter).then((res) =>
            setProducts(
              res.docs.map((product) => ({ id: product.id, ...product.data() }))
            )
          );

      }
      else{
        getDocs(queryCollection).then((res) =>
          setProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          )
        );
      }
      
   }, [category]);

  return (
    <div className=" mt-32 h-56 max-h-full grid grid-cols-2 gap-4 grid h-screen place-items-center">
      {products.map((prod, i) => (
        <div key={i}>
          <ItemCard
            id={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
            category={prod.category}
          />
        </div>
      ))}
    </div>
  );
};

export default ContainerP;
