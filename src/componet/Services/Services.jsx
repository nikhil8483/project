import React from "react";
import "./services.css";
import main from "../../assets/Rectangle 17.png";
import cardimage from "../../assets/Rectangle 18.png";
import cardimage2 from "../../assets/Rectangle 19.png";
import cardimage3 from "../../assets/Rectangle 20.png";
const Services = () => {
  return (
    <div className="services-main" style={{ background: " #4b5d6b" }}>


      <section className="services">

        <div className="services-container">

          {/* Top small text */}
          <p className="services-subtitle">
            Innovative architectural designs
          </p>

          {/* Right aligned heading */}
          <div className="services-header">
            <h2>
              The place where you spend your <br /> time is a direct reflection of your <br /> culture
            </h2>
          </div>

          {/* Image */}
          <div className="services-image">
            <img src={main} alt="" />

            <div className="bottom-line"></div>
            <div className="left-box"></div>
          </div>

        </div>


      </section>
      <p className="services-description" style={{ color: "#ECEEEF" ,marginLeft: "230px",marginTop:"70px"}}>Our works goes through three stages</p>
      {/* card */}
      <div>
        <div className="services">
          <div className="section-divider"></div>

          <div className="services-cards" style={{ gap: "200px" }}>
            <div className="left-card">


              <div>
                <div>
                  <span className="number" >01</span>
                  <div className="number-line"></div>
                </div>

                <p1 className="design-text" style={{ color: "#ECEEEF" }}>Design</p1>
              </div>
              <button className="contact-btn" style={{ color: "white", backgroundColor: "transparent", border: "1px solid red" }}>
                View Project →</button>
            </div>
            <div className="right-card">
              <img src={cardimage} alt="" />
              <d style={{ color: "#ECEEEF" }}>
                The design stage begins by <br /> developing an understanding of <br /> our client’s needs and <br /> predispositions in an initial <br /> consultation with one of our <br />designers
                After this dialogue,<br /> we present the<br /> first draft of <br />the design with a full explanation of<br /> our suggestions and their<br /> rationale.<br /><br />
                After client feedback, we rework<br /> our design to include any<br /> required modifications.<br /><br />
                After their approval, we finalize <br />the design and take full<br /> measurements.
              </d>
            </div>
          </div>
          <div className="section-divider"></div>
        </div>
        <div className="services">


          <div className="services-cards" style={{ gap: "0px" }}>
            <div className="left-card">


              <div>
                <div>
                  <span className="number" >02</span>
                  <div className="number-line"></div>
                </div>

                <p1 className="design-text" style={{ color: "#ECEEEF" }}>Pricing and Material Approbal</p1>
              </div>
              <button className="contact-btn" style={{ color: "white", backgroundColor: "transparent", border: "1px solid red" }}>
                View Project →</button>
            </div>
            <div className="right-card">
              <img src={cardimage2} alt="" />
              <d style={{ color: "#ECEEEF" }}>
                Once full measurements have <br /> calculated and quantities <br />estimated,
                <br /><br />

                We present a comprehensive <br />cost analysis, giving clients a range of <br />
                material <br />options commensurate <br /> with their project and budget.
              </d>
            </div>
          </div>
          <div className="section-divider"></div>
        </div>
        <div className="services">

          <div className="services-cards" style={{ gap: "200px" }}>
            <div className="left-card">


              <div>
                <div>
                  <span className="number" >03</span>
                  <div className="number-line"></div>
                </div>

                <p1 className="design-text" style={{ color: "#ECEEEF" }}>Implementation</p1>
              </div>
              <button className="contact-btn" style={{ color: "white", backgroundColor: "transparent", border: "1px solid red" }}>
                View Project →</button>
            </div>
            <div className="right-card">
              <img src={cardimage3} alt="" />
              <d style={{ color: "#ECEEEF" }}>
                After approving the plans and<br />
                with the clients approval of<br />
                carefully chosen materials,
                <br /><br />

                We carry out the finishing and<br />
                decoration work, monitoring the<br />
                fit-out throughout its progress.
                <br /><br />

                After this, we provide our<br />
                clients with peace of mind<br />
                thanks to our aftersales service.
              </d>
            </div>
          </div>
          <div className="section-divider"></div>
        </div>
      </div>

    </div>
  );
};

export default Services;