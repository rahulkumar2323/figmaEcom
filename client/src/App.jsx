import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import SearchPage from "./pages/SearchPage";
import React from "react";
import { Toaster } from "react-hot-toast";
import { TagSortProvider } from "./context/TagSort";
import { SearchTextProvider } from "./context/SearchData";
import SuccessPayment from "./pages/SuccessPayment";
import DeclinePayment from "./pages/DeclinePayment";
import { useSelector } from "react-redux";

export default function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <React.StrictMode>
      <SearchTextProvider>
        <TagSortProvider>
          <BrowserRouter>
            <ScrollToTop>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route
                  path="/cart"
                  element={
                    !currentUser ? (
                      <Navigate to="/login" replace />
                    ) : (
                      <CartPage />
                    )
                  }
                />
                {/* Conditionally render Footer based on route */}
                <Route path="/" element={<Home />} />{" "}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route
                  path="/cart"
                  element={
                    !currentUser ? (
                      <Navigate to="/login" replace />
                    ) : (
                      <CartPage />
                    )
                  }
                />
                <Route path="/success" element={<SuccessPayment />} />
                <Route path="/cancel" element={<DeclinePayment />} />
              </Routes>
              {/* Only render Footer if route doesn't match success or cancel */}
              {!(
                window.location.pathname === "/success" ||
                window.location.pathname === "/cancel"
              ) && <Footer />}
              <Toaster position="top-center" />
            </ScrollToTop>
          </BrowserRouter>
        </TagSortProvider>
      </SearchTextProvider>
    </React.StrictMode>
  );
}
