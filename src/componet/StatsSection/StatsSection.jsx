import React from "react";
import "./StatsSection.css";

import img1 from "../../assets/Rectangle 12.png"; 
import img2 from "../../assets/Rectangle 16.png"; 
import img3 from "../../assets/Rectangle 15.png"; 

const StatsSection = () => {
  return (
    <section className="stats-section">

    
      <div className="divider"></div>

     
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

      <div className="divider"></div>

    
      <div className="center-text">
        <h2>One step towards your <br/>dream home</h2>
        <p>Challenging ourselves in every project</p>
      </div>

      <div className="image-section">



  <div className="image-layout">

  
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

   
    <div className="imagefix">
  <div className="img-right">
      <img src={img2} alt="horses" />
    </div>

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