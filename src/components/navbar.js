import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
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
          <Link to="/product/1">products</Link>
          <a href="#">blog</a>
          <a href="#">contact us</a>
        </div>

          <div className="navbar-right">
          <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
          <Link to="/cart-details"><i className="fa-solid fa-bag-shopping"></i></Link>
          <a href="#"><i className="fa-solid fa-user"></i></a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
