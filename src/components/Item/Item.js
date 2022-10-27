import React from "react";
import ItemCount from "../itemCount/itemCount";
import "./item.css";
import {Link, useParams} from "react-router-dom";




function itemCard({id, title, price, image, category}) {


  return (
    <div className="itemCard">
      <Link to={`detalle/${title}`}>
        <img className="prodImg" alt={title} src={image} />
        <div className="ProdDescription">
          <h2> {title}</h2>
          <h3> USD {price}</h3>
          <h3> Categoria {category}</h3>
        </div>
      </Link>
    </div>
  );
}

export default itemCard;
