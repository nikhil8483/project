import React, { useState } from "react";
import "./IntroSection.css";
import introImg from "../../assets/Rectangle 20 (1).png";

const IntroSection = () => {
    const [open, setOpen] = useState(1);

    const toggle = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <>
        <section className="intro-section">

            {/* LEFT */}
            <div className="intro-left">
                <h2>Introduction</h2>

                <p className="intro-desc">
                    We are living in a time of rapid urban growth with increasingly busy
                    and fast lifestyles characterized by movement and consumption — notions
                    that the need to conserve architecture has never been more important.
                </p>

                <div className="accordion">

                    {/* ITEM 1 */}
                    <div className="item" >
                        <div className="title">
                            <div>
                                <span>Our Vision</span>
                                <div className="number-line"></div>
                            </div>

                            <span className="icon">→</span>
                        </div>

                        <p>
                            To be the first choice for quality in implementation and
                            innovation of ideas in all interior and exterior decorations
                            and finishes.
                        </p>

                    </div>

                    {/* ITEM 2 */}
                    <div className="item" >
                        <div className="title">
                            <div>
                                <span>Our Mission</span>
                                <div className="number-line"></div>
                            </div>

                            <span className="icon">→</span>
                        </div>

                        <p>
                            To achieve uniqueness in all that we do, adding elements of
                            nature in order to humanize the spaces we create.
                        </p>

                    </div>

                    {/* ITEM 3 */}
                    <div className="item" >
                        <div className="title">
                            <div>
                                <span>Our Work</span>
                                <div className="number-line"></div>
                            </div>

                            <span className="icon">→</span>
                        </div>

                        <p>
                            All work is undertaken under one brand in order to ensure
                            quality in materials and implementation.
                        </p>

                    </div>

                </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="intro-right">
                <div className="top-bar"></div>
                <img src={introImg} alt="interior" />
            </div>

        </section>

        <section className="success-section">

  {/* TOP */}
  <div className="success-top">
    <span>Our Success</span>
    <span>01/06</span>
  </div>

  <div className="divider"></div>

  {/* CONTENT */}
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

  <div className="divider"></div>

</section>
        </>
    );
};

export default IntroSection;