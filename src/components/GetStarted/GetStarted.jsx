import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Le-Chalo</span>
          <span className="secondaryText">
          Unlock exclusive benefits by joining us today.
            <br />
            Find your residence soon
          </span>
          <button className="button" href>
            <a href="mailto:niteshsingh1512ask@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
