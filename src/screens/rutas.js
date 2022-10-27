import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home';
import Detalle from '../components/Item/itemDetail';
const Rutas = () => {
 
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/detalle/:name" element={<Detalle />} />
          <Route path="*" element={<div> Pagina no existe </div>} />
        </Routes>
      </BrowserRouter>
    );
};

export default Rutas;
