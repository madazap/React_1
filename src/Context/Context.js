import { createContext } from "react";
import { useState, useContext } from "react";

//contexto para cambiar el status del carrito (solo visual)
export const CartImg = createContext(false);
//contexto para el contenido del carrito
export const CartContent = createContext([]);

//retorna el contexto para ser usado mas facil
export const useCartContext = () =>{
  return useContext(CartContent);
} 

const CartProvider = ({children})=>{

    const [cart, setCart] = useState([]);
    //console.log(cart);

    // borrar el carrito entero
    const clearCart = () => setCart([]);
    // esta algo en el carrito ??
    const isInCart = (id) => {
      return cart.find((product) => product.id === id) ? true : false;
    };
    // eliminar del carrito
    const removeProduct = (id) =>  setCart(cart.filter(product=>product.id!==id)); 
    
    // agregar al carrito
    const addProduct = (item, newQTD)=>{
      
      let newCart;
      let product =cart.find(product =>product.id ===item.id);

       if(product){
        product.quantity += newQTD;
        newCart=[...cart];
      }else{
        product = {...item, quantity:newQTD };
        newCart=[...cart,product];
      }
      setCart(newCart);
    }

    const totalPrice =()=>{

      return cart.reduce((prev,act)=> prev + act.quantity * act.price,0);

    }

    const totalProducts = ()=>{
      
      return cart.reduce((acumulador,productoActual)=> acumulador + productoActual.quantity,0);
    }

        return (
          <CartContent.Provider
            value={{ clearCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts, cart }}
          >
            {children}
          </CartContent.Provider>
        );
    
}
export default CartProvider;