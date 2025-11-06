import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CartPage from './pages/CartPage.jsx';
import Wishlist from './pages/Wishlist.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import AddProductPage from './pages/AddProductPage.jsx';
import ViewProductPage from './pages/ViewProductPage.jsx';
import { ProductProvider } from "./context/ProductContext";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const normalizeProduct = (p) => ({
    title: p.title,
    price: typeof p.price === 'string' ? Number(p.price.replace(/[^0-9.-]+/g, '')) : p.price,
    img: p.img || p.image || p.imgUrl || '',
    desc: p.desc || p.description || '',
  });

  const addToCart = (product) => {
    const p = normalizeProduct(product);
    setCartItems((prev) => {
      const existing = prev.find((it) => it.title === p.title);
      if (existing) {
        return prev.map((it) => (it.title === p.title ? { ...it, quantity: it.quantity + 1 } : it));
      }
      alert(`${p.title} added to cart`);
      return [...(prev || []), { ...p, quantity: 1 }];
    });
  };

  const addToWishlist = (product) => {
    const p = normalizeProduct(product);
    setWishlistItems((prev) => {
      if ((prev || []).some((it) => it.title === p.title)) {
        alert(`${p.title} already in wishlist`);
        return prev;
      }
      alert(`${p.title} added to wishlist`);
      return [...(prev || []), p];
    });
  };

  const removeFromCart = (title) => {
    setCartItems((prev) => (prev || []).filter((it) => it.title !== title));
  };

  const removeFromWishlist = (title) => {
    setWishlistItems((prev) => (prev || []).filter((it) => it.title !== title));
  };

  const changeQuantity = (title, delta) => {
    setCartItems((prev) =>
      (prev || []).map((it) =>
        it.title === title ? { ...it, quantity: Math.max(1, (it.quantity || 1) + delta) } : it
      )
    );
  };

  return (
    <ProductProvider>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
             addToCart={addToCart} 
             addToWishlist={addToWishlist} />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems || []}
              removeFromCart={removeFromCart}
              changeQuantity={changeQuantity}
            />
          }
        />
         <Route path="/checkout" element={<CheckoutPage />} />
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/dashboard" element={<DashboardPage/>}/>
         <Route path="/add-product" element={<AddProductPage/>}/>
         <Route path="/view-product" element={<ViewProductPage/>}/>

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistItems={wishlistItems || []}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
    </Router>
    </ProductProvider>
  );
}

export default App;
