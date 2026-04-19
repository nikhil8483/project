import React from "react";
import "./services.css";
import main from "../../assets/Rectangle 17.png";
import cardimage from "../../assets/Rectangle 18.png";
import cardimage2 from "../../assets/Rectangle 19.png";
import cardimage3 from "../../assets/Rectangle 20.png";

const cardData = [
  {
    number: "01",
    title: "Design",
    image: cardimage,
    text: `The design stage begins by developing an understanding of our client's needs and predispositions in an initial consultation with one of our designers.

After this dialogue, we present the first draft of the design with a full explanation of our suggestions and their rationale.

After client feedback, we rework our design to include any required modifications.

After their approval, we finalize the design and take full measurements.`,
  },
  {
    number: "02",
    title: "Pricing and Material Approval",
    image: cardimage2,
    text: `Once full measurements have been calculated and quantities estimated,

We present a comprehensive cost analysis, giving clients a range of material options commensurate with their project and budget.`,
  },
  {
    number: "03",
    title: "Implementation",
    image: cardimage3,
    text: `After approving the plans and with the clients approval of carefully chosen materials,

We carry out the finishing and decoration work, monitoring the fit-out throughout its progress.

After this, we provide our clients with peace of mind thanks to our aftersales service.`,
  },
];

const Services = () => {
  return (
    <div className="services-main">

    
      <section className="services">
        <div className="services-container">

          <p className="services-subtitle">Innovative architectural designs</p>

          <div className="services-header">
            <h2>
              The place where you spend your time is a direct reflection of your culture
            </h2>
          </div>

          <div className="services-image">
            <img src={main} alt="Architecture showcase" />
            <div className="corner-box"></div>
            <div className="vertical-line2"></div>
          </div>

        </div>
      </section>

      
      <p className="services-description">Our works goes through three stages</p>

  
      {cardData.map((card, index) => (
        <div key={index} className="services">
          <div className="section-divider" />

          <div className="services-cards">

       
            <div className="left-card">
              <div>
                <span className="number">{card.number}</span>
                <div className="number-line" />
              </div>
              <span className="design-text">{card.title}</span>
              <button className="contact-btn">View Project →</button>
            </div>

            <div className="right-card">
              <img src={card.image} alt={card.title} />
              <p className="card-text">{card.text}</p>
            </div>

          </div>

          <div className="section-divider" />
        </div>
      ))}

    </div>
  );
};

export default Services;