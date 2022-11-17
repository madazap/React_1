import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Home';
import Detalle from '../components/Item/itemDetail';
import CartProvider from '../Context/Context';
import NavBar from "../components/navBar/NavBar";
import Cart from "../components/cart/index";

const Rutas = () => {
 
    return (
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/detalle/:idproducto" element={<Detalle />} />
            <Route path="/cart" element={<Cart/>} />
            <Route
              path="/category/:category/detalle/:idproducto"
              element={<Detalle />}
            />
            <Route path="*" element={<div> Pagina no existe </div>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    );
};

export default Rutas;
