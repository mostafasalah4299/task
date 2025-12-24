import React from 'react';
import bootstrap from 'bootstrap';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Productdetails from './pages/Productdetails';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Signin from './pages/Signin';
import CartDetails from './pages/CartDetails';


function App() {
  return (
    <div>
        <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart-details" element={<CartDetails />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;