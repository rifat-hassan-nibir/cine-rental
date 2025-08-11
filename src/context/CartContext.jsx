import { createContext, useState } from "react";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartData, setCartData] = useState([]);

  return <CartContext.Provider value={{ cartData, setCartData }}>{children}</CartContext.Provider>;
}

export { CartContext };
