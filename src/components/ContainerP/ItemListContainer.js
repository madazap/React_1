import React from "react";
import { useState, useEffect } from "react";
import "./containerP.css";
import ItemCount from "../itemCount/itemCount";
import ItemCard from "../Item/Item";
import itemListFake from "../Item/ItemList";
import { useParams } from "react-router-dom";


const ContainerP = () => {

   const [products, setProducts] = useState([]);
   const [find, setFind] = useState("");
   const { category } = useParams(); 


   const getImages = () => {
     setTimeout(() => {
       const products = itemListFake;
       setProducts(products);
     }, 2000);
   };

   useEffect(() => {
     getImages();
   }, []);

  return (
    <div className="contenedor">
      <h1>Productos {category} </h1>
      <input
        id="filter"
        name="filter"
        type="text"
        value={find}
        onChange={(event) => setFind(event.target.value)}
      />

      {category
        ? products
            .filter((x) => x.title.includes(find))
            .filter((x) => x.category === category)
            .map((product, i) => (
              <div key={i} className="contador">
                <ItemCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
                <ItemCount stock={8} value={3} />
              </div>
            ))
        : products
            .filter((x) => x.title.includes(find))
            .map((product, i) => (
              <div key={i} className="contador">
                <ItemCard
                  key={i}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
                <ItemCount stock={8} value={3} />
              </div>
            ))}

     
    </div>
  );
};

export default ContainerP;
