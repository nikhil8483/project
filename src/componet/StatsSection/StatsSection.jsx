import React, { useEffect, useRef, useState } from "react";
import "./StatsSection.css";
import Counter from "./Counter";

import img1 from "../../assets/Rectangle 12.png";
import img2 from "../../assets/Rectangle 16.png";
import img3 from "../../assets/Rectangle 15.png";

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  // 👇 Scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      
      <div className="divider"></div>

      {/* 🔢 Stats */}
      <div className="stats">
        <div className="stat-item">
          {start && <Counter end={12} suffix="+" />}
          <p>Years Experience</p>
        </div>

        <div className="stat-item">
          {start && <Counter end={10000} suffix="+" />}
          <p>Successful Projects</p>
        </div>

        <div className="stat-item">
          {start && <Counter end={2000000} />}
          <p>Satisfied Clients</p>
        </div>
      </div>

      <div className="divider"></div>

      {/* 📝 Center Text */}
      <div className="center-text">
        <h2>One step towards your <br /> dream home</h2>
        <p>Challenging ourselves in every project</p>
      </div>

      {/* 🖼 Image Section */}
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