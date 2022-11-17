import React, { useEffect, useState } from "react";
import ItemCount from "../itemCount/itemCount";
import "./item.css";
import {Link, useParams} from "react-router-dom";




function ItemCard({id, title,image, price, category}) {

   
  return (
    <div className="itemCard">
      <Link to={`detalle/${id}`}>
        <img className="prodImg" alt={title} src={image} />
        <div className="ProdDescription">
          <h3> {title}</h3>
          <h3> USD {price}</h3>
          <h3> Categoria {category}</h3>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
