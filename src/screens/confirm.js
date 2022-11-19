import React from "react";
import { useLocation } from "react-router-dom";



const Confirm = () => {

    const location=useLocation();

    let order =location.state.order;

    return (

        <div className="confirmed">
            Pedido {order} ejecutado
        </div>
    )


}

export default Confirm;