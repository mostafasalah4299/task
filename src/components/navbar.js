import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      {/* TOP NAVBAR */}
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
          <a href="#">login</a>
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
          <a href="#">home</a>
          <a href="#">pages</a>
          <a href="#">products</a>
          <a href="#">blog</a>
          <a href="#">contact us</a>
        </div>

        <div className="navbar-right">
          <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
          <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
