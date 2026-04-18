import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">

      {/* LEFT SIDE */}
      <div className="contact-left">
        <p className="small-title">Also get in touch</p>

        <p>e: info@novo.sa</p>
        <p>t: +966 11 2111 090</p>
        <p>m: +966 575 77 8888</p>
        <p>novo-sa.com</p>

        <p className="address">
          4658 King Abdulaziz Road, Al Rabeeh, 7542, Riyadh 13315 Saudi Arabia
        </p>

        <div className="logo-box">no</div>
      </div>

      {/* CENTER DIVIDER */}
      <div className="vertical-line"></div>

      {/* RIGHT SIDE */}
      <div className="contact-right">

        <h2>Register your interest</h2>
        <p className="sub-text">
          Construction commencing during 2023 earthworks. season.
        </p>

        <form className="form">

          <div className="input-group">
            <input type="text" placeholder="e.g. Mohammed" />
            <span>YOUR NAME</span>
          </div>

          <div className="input-group">
            <input type="email" placeholder="e.g. mohammed@gmail.com" />
            <span>YOUR E-MAIL</span>
          </div>

          <div className="input-group">
            <textarea placeholder="e.g. Hello!" rows="3"></textarea>
            <span>YOUR MESSAGES</span>
          </div>

          <button type="submit" className="send-btn">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
};

export default ContactSection;