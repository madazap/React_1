import "./item.css";
import { Link, useParams } from "react-router-dom";

function ItemOnly({ id, title, price, description, category, image }) {
 
 
    return (

        
    <div className="itemCardO">
      <Link to={`detalle/${id}`}>
        <img className="prodImg" alt={title} src={image} />
        <div className="ProdDescription">
          <h2> {title}</h2>
          <h2> {id}</h2>
          <h3> USD {price}</h3>
          <h3> Categoria {category}</h3>
          <h3> {description}</h3>
        </div>
      </Link>
    </div>
  );
}

export default ItemOnly;
