import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./components/Page";

function App() {
  return (
    <div className="container mx-auto px-4 lg:px-0 dark:bg-body bg-white font-sora dark:text-white text-dark">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
