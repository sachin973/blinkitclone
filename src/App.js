
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingPage from "./view/ListingPage";
import Detail from "./view/detailPage/DetailPage";
import Header from "./component/header/Header";
import Cart from "./view/cart/Cart";
import CartContext from "./contexts/cart";
import "./App.css";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ListingPage />} />
            <Route path="details" element={<Detail />} />
            <Route path="Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
  );
}


