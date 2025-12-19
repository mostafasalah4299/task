import React from 'react';
import bootstrap from 'bootstrap';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Productdetails from './pages/Productdetails';
import Navbar from './components/navbar';
    

function App() {
  return (
    <div>
        <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/navbar" element={<Navbar />} />
    </Routes>
    </div>
  );
}

export default App;