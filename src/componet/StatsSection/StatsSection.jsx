import React from "react";
import "./StatsSection.css";

import img1 from "../../assets/Rectangle 12.png"; // bust
import img2 from "../../assets/Rectangle 16.png"; // center house
import img3 from "../../assets/Rectangle 15.png"; // horses

const StatsSection = () => {
  return (
    <section className="stats-section">

      {/* top divider */}
      <div className="divider"></div>

      {/* stats */}
      <div className="stats">
        <div className="stat-item">
          <h1>12+</h1>
          <p>Years Experience</p>
        </div>

        <div className="stat-item">
          <h1>10K+</h1>
          <p>Successful Projects</p>
        </div>

        <div className="stat-item">
          <h1>2M</h1>
          <p>Satisfied Clients</p>
        </div>
      </div>

      {/* bottom divider */}
      <div className="divider"></div>

      {/* center text */}
      <div className="center-text">
        <h2>One step towards your <br/>dream home</h2>
        <p>Challenging ourselves in every project</p>
      </div>

      <div className="image-section">

  {/* TOP SMALL TEXT */}

  <div className="image-layout">

    {/* LEFT SIDE (image + text) */}
    <div className="left-block">
      <div className="img-left">
        <div className="top-bar"></div>
        <img src={img1} alt="statue" />
        <p className="left-text">
  We are also committed to bioengineering in<br />
  order to produce a healthier and more<br />
  sustainable environment in all our solutions,<br />
  utilizing nature to create humane spaces<br />
  that stand out from the visual monotony of<br />
  the urban landscape.
</p>
      </div>

     
    </div>

    {/* RIGHT IMAGE (behind) */}
    <div className="imagefix">
  <div className="img-right">
      <img src={img2} alt="horses" />
    </div>

    {/* CENTER IMAGE (front) */}
    <div className="img-center">
      <img src={img3} alt="house" />
    </div>

    </div>
  
  </div>

</div>

    </section>
  );
};

export default StatsSection;