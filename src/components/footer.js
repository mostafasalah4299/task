import React from "react";
import "./footer.css";
import { FaFacebookF  } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";



function Footer() {
    return (
        <footer className="footer">
        <div className="footer-top">
            <div className="footer-col">
                <h4>Contact Info</h4>

                <p><FaMapMarkerAlt size={24} color="red" /> 123 Street, Old Trafford, NewYork, USA</p>
                <p><FaEnvelope size={24} color="red" /> info@sitename.com</p>
                <p><FaPhone size={24} color="red" /> +457 789 789 65</p>

                <div className="social-icons">
                    <a href="https://www.facebook.com/" target="_blank"><FaFacebookF size={24} color="#1877f2" /></a>
                    <a href="https://twitter.com/" target="_blank"><FaTwitter size={24} color="#1da1f2" /></a>
                    <a href="https://plus.google.com/" target="_blank"><FaGooglePlusG size={24} color="#db4437" /></a>
                    <a href="https://www.youtube.com/" target="_blank"><FaYoutube size={24} color="#ff0000" /></a>
                    <a href="https://www.instagram.com/" target="_blank"><FaInstagram size={24} color="#e1306c" /></a>
                </div>
            </div>

            <div className="footer-col">
                <h4>Useful Links</h4>
                <ul>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Location</li>
                    <li>Affiliates</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>My Account</h4>
                <ul>
                    <li>My Account</li>
                    <li>Discount</li>
                    <li>Returns</li>
                    <li>Orders History</li>
                    <li>Order Tracking</li>
                </ul>
            </div>

            <div className="footer-col newsletter">
                <h4>Subscribe Our Newsletter</h4>
                <p>
                    If you want to get an email from us every time we have a new
                    special offer, then sign up here!
                </p>

                <div className="newsletter-box">
                    <input type="email" placeholder="Enter Email Address" />
                    <button><FaEnvelope size={24} color="white" /></button>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© 2020 All Rights Reserved by Bestwebcreator</p>

            <div className="payments">
            <a href="#"><img src="https://img.icons8.com/color/48/000000/visa.png" alt="VISA" /></a>
            <a href="#"><img src="https://bestwebcreator.com/shopwise/demo/assets/images/discover.png" alt="DISC" /></a>
            <a href="#"><img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MC" /></a>
            <a href="#"><img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" /></a>
            <a href="#"><img src="https://img.icons8.com/color/48/000000/amex.png" alt="AMEX" /></a>
            </div>
        </div>
        </footer>
    );
    }

    export default Footer;
