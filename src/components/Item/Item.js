import React, { useEffect, useState } from "react";
import ItemCount from "../itemCount/itemCount";
import "./item.css";
import {Link, useParams} from "react-router-dom";




function ItemCard({id, title,image, price, category}) {

   
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`detalle/${id}`}>
        <img className="rounded-t-lg object-fill" src={image} alt="" />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <div
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Lo Quiero
            
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ItemCard;
