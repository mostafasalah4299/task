import React from "react";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
        <div className="footer-top">
            <div className="footer-col">
                <h4>Contact Info</h4>

                <p>📍 123 Street, Old Trafford, NewYork, USA</p>
                <p>✉️ info@sitename.com</p>
                <p>📞 +457 789 789 65</p>

                <div className="social-icons">
                    <a href="#">f</a>
                    <a href="#">t</a>
                    <a href="#">g+</a>
                    <a href="#">▶</a>
                    <a href="#">📷</a>
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
                    <button>📩</button>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <p>© 2020 All Rights Reserved by Bestwebcreator</p>

            <div className="payments">
            <span>VISA</span>
            <span>DISC</span>
            <span>MC</span>
            <span>PayPal</span>
            <span>AMEX</span>
            </div>
        </div>
        </footer>
    );
    }

    export default Footer;
