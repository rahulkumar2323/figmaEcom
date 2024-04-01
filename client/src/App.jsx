import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import React from "react";
import { TagSortProvider } from "./context/TagSort";
import { SearchTextProvider } from "./context/SearchData";
import SuccessPayment from "./pages/SuccessPayment";
import DeclinePayment from "./pages/DeclinePayment";

export default function App() {
  return (
    <React.StrictMode>
      <SearchTextProvider>
        <TagSortProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/success" element={<SuccessPayment />} />
              <Route path="/cancel" element={<DeclinePayment />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TagSortProvider>
      </SearchTextProvider>
    </React.StrictMode>
  );
}
