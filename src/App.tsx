import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/header";
import ProductList from "./components/Products/productList";
import Footer from "./components/Footer/footer";
import { ProductsContext } from "./context/productsContext";
import Cart from "./components/Cart/cart";

function App() {
  const { modalOnAndOff } = useContext(ProductsContext);
  return (
    <>
      {modalOnAndOff ? (
        <div className="App">
          <Header />
          <Cart />
          <ProductList />
          <Footer />
        </div>
      ) : (
        <div className="App">
          <Header />
          <ProductList />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
