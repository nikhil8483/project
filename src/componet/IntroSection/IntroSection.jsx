import React, { useState } from "react";
import "./IntroSection.css";
import introImg from "../../assets/Rectangle 20 (1).png";

const accordionItems = [
  {
    id: 1,
    title: "Our Vision",
    text: "To be the first choice for quality in implementation and innovation of ideas in all interior and exterior decorations and finishes.",
  },
  {
    id: 2,
    title: "Our Mission",
    text: "To achieve uniqueness in all that we do, adding elements of nature in order to humanize the spaces we create, balancing form, function and aesthetics..",
  },
  {
    id: 3,
    title: "Our Work",
    text: "All Novo work is undertaken under one brand in order to ensure quality in materials and implementation. We pride ourselves in offering inimitable ideas and solutions which create harmony and coherence between each stage of the project. We employ familiar materials but use them innovatively..",
  },
];

const IntroSection = () => {
  const [open, setOpen] = useState(1);

  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <>
  
      <section className="intro-section">

    
        <div className="intro-left">
          <h2>Introduction</h2>

          <p className="intro-desc">
           We are living in a time of rapid urban growth with increasingly busy and fast lifestyles characterized by movement and commotion – so much so that the need to humanize architecture has never been more important. This means reconsidering the form and functions of our buildings and the materials we use, a prevalent trend in our industry which, more and more, seeks to provide an environment that understands people’s needs and shield them from the noise and bustle of the city streets. This encapsulates the Novo Design & Build approach. It begins with our name, one which promises authentic human feelings, 
           taking us back to a time of serenity and spaciousness and looking ahead to ‘smart’, modern solutions.
          </p>

          <div className="accordion">
            {accordionItems.map((item) => (
              <div
                className="item"
                key={item.id}
                onClick={() => toggle(item.id)}
              >
                <div className="title">
                  <div>
                    <span>{item.title}</span>
                    <div className="number-line" />
                  </div>
                  <span className="icon" style={{ transform: open === item.id ? "rotate(315deg)" : "none" }}>
                    →
                  </span>
                </div>

                {open === item.id && <p>{item.text}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="intro-right">
          <div className="top-bar" />
          <img src={introImg} alt="interior" />
        </div>

      </section>

      <section className="success-section">

        <div className="success-top">
          <span>Our Success</span>
          <span>01/06</span>
        </div>

        <div className="divider" />

        <div className="success-content">
          <p className="success-text">
            We are living in a time of rapid urban growth with increasingly busy
            and fast lifestyles characterized by movement and commotion — so much
            so that the need to humanize architecture has never been more important.
            This means reconsidering the form and functions of our buildings and
            the materials we use, a prevalent trend in our industry which, more and
            more, seeks to provide an environment that understands people's needs
            and shield them from the noise and bustle of the city streets.
            <br /><br />
            This encapsulates the Novo Design & Build approach. It begins with our
            name, one which promises authentic human feelings, taking us back to a
            time of serenity and spaciousness and looking ahead to 'smart', modern
            solutions.
          </p>

          <div className="next-btn">Next</div>
        </div>

        <div className="divider" />

      </section>
    </>
  );
};

export default IntroSection;