import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img className="logo2" src=".\LE-CHALO 02.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to create the ideal living environment <br />
            for everyone while keeping it simple.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">203A AIT Pune, Dighi, INDIA</span>
          <a href="mailto:niteshsingh1512ask@gmail.com" className="secondaryText">niteshsingh1512ask@gmail.com</a>

          <div className="flexCenter f-menu">
            <div className="flexCenter f-menu">
              <a href="/" className="menu-link">
                <span>Property</span>
              </a>
              <a href="/" className="menu-link">
                <span>Services</span>
              </a>
              <a href="/" className="menu-link">
                <span>Product</span>
              </a>
              <a href="/" className="menu-link">
                <span>About Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
