import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import moon from "../assets/icons/moon.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const [showCartDetails, setShowCartDetails] = useState(false);
  const { state } = useContext(CartContext);

  const handleCartShow = () => {
    setShowCartDetails(true);
  };

  return (
    <>
      {showCartDetails && <CartDetails onClose={() => setShowCartDetails(false)} />}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block" href="#">
                <img src={moon} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                onClick={handleCartShow}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={shoppingCart} width="24" height="24" alt="" />
                {state.cartData.length > 0 && (
                  <span className="absolute top-[-12px] left-[28px] bg-[#12cf6f] text-white text-xs flex justify-center items-center rounded-full w-[24px] h-[24px] px-[2px]">
                    {state.cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
