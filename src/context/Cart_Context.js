import { useContext, useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext();
const initialState = {
      cart:[],
      total_amount:"",
      total_item: ""
};
const CartProvider = ({ children }) => {
 const [state, dispatch] = useReducer( initialState);
  const addToCart = (ShopDetails) => {
      dispatch({type: "ADD_TO_CART", payload : {ShopDetails}})
  };
  return <CartContext.Provider value={{...state, addToCart}}>{children}</CartContext.Provider>;
};

const useCartContext = () =>{
      return useContext(CartContext)
}

export { CartProvider, useCartContext };
