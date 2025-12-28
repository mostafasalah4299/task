import React from 'react';
import bootstrap from 'bootstrap';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Productdetails from './pages/Productdetails';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Signin from './pages/Signin';
import CartDetails from './pages/CartDetails';
import Products from './pages/products';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/signin';

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart-details" element={<CartDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/category/:category" element={<Products />} />
        <Route path="/contact-us" element={<h1>Contact Us Page</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;