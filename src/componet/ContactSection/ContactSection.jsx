import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">

      {/* ── LEFT ── */}
      <div className="contact-left">
        <p className="small-title">Also get in touch</p>

        <p>e: info@novo.sa</p>
        <p>t: +966 11 2111 090</p>
        <p>m: +966 575 77 8888</p>
        <p>novo-sa.com</p>

        <p className="address">
          4658 King Abdulaziz Road, Al Rabeeh,<br />
          7542, Riyadh 13315 Saudi Arabia
        </p>

        <div className="logo-box" >
          <img src="/logo.svg" alt=""  height={70}/>
        </div>
      </div>

      {/* ── DIVIDER (vertical on desktop, horizontal on mobile) ── */}
      <div className="vertical-line" />

      {/* ── RIGHT ── */}
      <div className="contact-right">
        <h2>Register your interest</h2>
        <p className="sub-text">
          Construction commencing during 2023 earthworks season.
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
            <textarea placeholder="e.g. Hello!" rows="4" />
            <span>YOUR MESSAGE</span>
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