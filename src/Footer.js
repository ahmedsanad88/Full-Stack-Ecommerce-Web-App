//jshint esversion:6
import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {

    const backToTop =() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="footer">
            <div className="footer__topImg">
                <img src="../images/tour.svg" alt="products" />
            </div>
            <button onClick={backToTop}>Back to top</button>
            <div className="footer__main">
                <div className="footer__submain">
                    <div className="footer__doc">
                        <h4>Get to Know Us</h4>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>About Us</p>
                        <p>Sustainability</p>
                        <p>Investor Relations</p>
                        <p>Devices</p>
                        <p>Tours</p>
                    </div>
                    <div className="footer__doc">
                        <h4>Make Money with Us</h4>
                        <p>Sell your products</p>
                        <p>Sell your apps</p>
                        <p>Become an Affiliate</p>
                        <p>Advertise Your Products</p>
                        <p>Self-Publish with Us</p>
                        <p>› See More Make Money with Us</p>
                    </div>
                    <div className="footer__doc">
                        <h4>Payment Products</h4>
                        <p>Business Card</p>
                        <p>Shop with Points</p>
                        <p>Reload Your Balance</p>
                        <p>Currency Converter</p>
                    </div>
                    <div className="footer__doc">
                        <h4>Let Us Help You</h4>
                        <p>COVID-19</p>
                        <p>Your Account</p>
                        <p>Your Orders</p>
                        <p>Shipping Rates & Policies</p>
                        <p>Returns & Replacements</p>
                        <p>Manage Your Content and Devices</p>
                        <p>Any Assistant !</p>
                    </div>
                </div>
            </div>
            <div className="footer__sub">
                <Link to="/">
                    <div className="footer__img">
                        <img 
                            src="../images/logo.png" alt="Logo"
                        />
                    </div>
                </Link>
                <div className="footer__buttons">
                    <button>🌐 English </button>
                    <button>🇱🇷 United States</button>
                    <button className="footer__middleButton">＄ USD- U.S.Dollar</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;
