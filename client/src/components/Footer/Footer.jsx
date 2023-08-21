import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Welcome to Rendi-Store! We are passionate about fashion and dedicated 
            to bringing you the latest trends and styles in clothing. Our mission is to 
            provide high-quality and affordable clothing options for men, women, and children. 
            With a keen eye for fashion, we curate a collection that combines comfort, style, and versatility.
            Whether you're looking for casual everyday wear or something more formal for special occasions, 
            we have you covered. 
          </span>
          <span>Join us on this fashion journey and let us help you express your unique style.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            We value your feedback and are here to assist you. If you have any questions, comments, or concerns,
            please don't hesitate to get in touch with us. Our friendly customer support team is available to 
            help you with sizing, product information, order tracking, or any other inquiries you may have. 
            You can reach us through the following channels:  
          </span>
          <span>
            Phone: (+27) 848 456 169 
          </span>
          <span>
            Email: RendiStore@gmail.com
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">RendiStore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
