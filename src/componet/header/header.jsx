import React from "react";
import "./header.css";
import house from "../../assets/Rectangle 7.png";
import small from "../../assets/Rectangle 10.png";

const Hero = () => {
  return (
    <div className="hero">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <ul>
          <li>About</li>
          <li>Service</li>
          <li>Project</li>
          <li>Team</li>
        </ul>
        <button className="contact-btn1">Contact Us →</button>
      </nav>

   
      <div className="container">

  
        <div className="left">
          <h1>
            <span className="orange underline">Our</span> Implicit Belief{" "}
            <span className="orange underline">in</span> <br />
            <span className="orange underline">Architecture's Dynamism</span>
          </h1>

  
          <div className="image-box">
             <span className="vertical-line1"  ></span>
              <span className="corner-box"></span>
            <img src={house} alt="house" />

          </div>
        </div>

      
        <div className="right">
          <p>
            Decorations and finishes of ideas in all interior and exterior
            implementation.
          </p>
          <h4>
            To achieve uniqueness in all that we do, adding elements of nature
          </h4>
          <div className="small-img">
            <img src={small} alt="small house" />
          </div>
        </div>
      </div>

     
      <div className="third-section">
        <div className="play">
          <img src="/button1.svg" alt="play" />
        </div>
        <p className="right-text">
          Our architectural team excels at creating visually appealing and
          function-driven spaces. We specialize in residential, commercial, and
          industrial architectural design.
        </p>
      </div>

      {/* Divider */}
      <div className="line"></div>
    </div>
  );
};

export default Hero;