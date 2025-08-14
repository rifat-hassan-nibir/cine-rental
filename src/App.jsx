import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";
import CartContextProvider from "./context/CartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="container mx-auto px-4 lg:px-0 dark:bg-body bg-white font-sora dark:text-white text-dark">
      <CartContextProvider>
        <Header />
        <Page />
        <Footer />
        <ToastContainer />
      </CartContextProvider>
    </div>
  );
}

export default App;
