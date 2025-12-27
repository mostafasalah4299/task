import React from "react";
import { useState } from "react"; 
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <div className="top-navbar">
        <div className="navbar-left">
          <select>
            <option>English</option>
            <option>Arabic</option>
          </select>

          <select>
            <option>USD</option>
            <option>EURO</option>
          </select>

          <a href="tel:1234567890">1234567890</a>
        </div>

        <div className="navbar-right">
          <a href="#">compare</a>
          <a href="#">wishlist</a>
          <a href="/signin">sign in</a>
        </div>
      </div>

      
      <div className="main-navbar">
        <div className="navbar-left">
          <img
            src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png"
            alt="logo"
          />
        </div>

        <div className="navbar-center">
          <Link to="/">home</Link>
          <a href="#">pages</a>
          <Link to="/products">products</Link>
          <a href="#">blog</a>
          <a href="/contact-us">contact us</a>
        </div>

          <div className="navbar-right">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <a href="/cart-details"><i className="fa-solid fa-bag-shopping"></i></a>
          <a href="/signin"><i className="fa-solid fa-user"></i></a>
        </div>
      </div>
    </>
  );
}

export default Navbar;