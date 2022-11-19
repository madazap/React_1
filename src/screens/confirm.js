import React from "react";
import { useLocation } from "react-router-dom";



const Confirm = () => {

    const location=useLocation();

    let order =location.state.order;

    return (

        
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-4xl tracking-tight font-bold lg:text-9xl text-primary-500 dark:text-primary-500">Pedido {order}</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Gracias por tu compra.</p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Desde este momento comenzamos el despacho, nos comunicaremos por mail para cualquier novedad. </p>
            
        </div>   
    </div>



     
    );


}

export default Confirm;