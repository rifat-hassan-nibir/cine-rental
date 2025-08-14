import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/CartReducer";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export { CartContext };
