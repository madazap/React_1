import React from "react";
import no404 from "./404.png";


const NF404 =() =>{

    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
             
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Lo lamentamos !</span> Pagina no encontrada
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                La pagina que buscas no existe
              </p>
            </div>
            <div className="mt-4">
              <img
                src={no404}
                alt="img 404"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    );


}


export default NF404;