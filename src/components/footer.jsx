import React from "react";
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
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Contact Info</h5>
                        <p><FaMapMarkerAlt className="text-danger me-2" /> 123 Street, Old Trafford, NewYork, USA</p>
                        <p><FaEnvelope className="text-danger me-2" /> info@sitename.com</p>
                        <p><FaPhone className="text-danger me-2" /> +457 789 789 65</p>
                        <div className="d-flex gap-2 mt-3">
                            <a href="https://www.facebook.com/" target="_blank" className="text-primary"><FaFacebookF size={24} /></a>
                            <a href="https://twitter.com/" target="_blank" className="text-info"><FaTwitter size={24} /></a>
                            <a href="https://plus.google.com/" target="_blank" className="text-danger"><FaGooglePlusG size={24} /></a>
                            <a href="https://www.youtube.com/" target="_blank" className="text-danger"><FaYoutube size={24} /></a>
                            <a href="https://www.instagram.com/" target="_blank" className="text-danger"><FaInstagram size={24} /></a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Useful Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">FAQ</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Location</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Affiliates</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">My Account</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">My Account</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Discount</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Returns</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Orders History</a></li>
                            <li className="mb-2"><a href="#" className="text-light text-decoration-none">Order Tracking</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="mb-3">Subscribe Our Newsletter</h5>
                        <p>If you want to get an email from us every time we have a new special offer, then sign up here!</p>
                        <div className="input-group">
                            <input type="email" className="form-control rounded-pill" placeholder="Enter Email Address" />
                            <button className="btn btn-danger rounded-pill ms-2"><FaEnvelope /></button>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="mb-0">© 2020 All Rights Reserved by Bestwebcreator</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <div className="d-flex justify-content-end gap-2">
                            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="VISA" height="24" />
                            <img src="https://bestwebcreator.com/shopwise/demo/assets/images/discover.png" alt="DISC" height="24" />
                            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MC" height="24" />
                            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" height="24" />
                            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="AMEX" height="24" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
