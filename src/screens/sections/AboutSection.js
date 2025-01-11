import React, { useEffect, useRef } from "react";
import "../../styles/section/aboutSection.scss";

const AboutSection = ({ data }) => {
  const reasonsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const observedElements = [...reasonsRef.current]; // Create a stable copy of the current elements

    observedElements.forEach((reason) => {
      if (reason) observer.observe(reason);
    });

    return () => {
      observedElements.forEach((reason) => {
        if (reason) observer.unobserve(reason);
      });
    };
  }, []); // Dependencies remain as an empty array

  return (
    <div className="about-section">
      {/* Sticky Subtitle */}
      <div className="subtitle-container">
        <h2>{data.about.subtitle}</h2>
        <p>{data.about.text}</p>
      </div>

      {/* Reasons */}
      <div className="reasons-container">
        {data.about.reasons.map((reason, index) => (
          <div
            className="reason"
            key={index}
            ref={(el) => (reasonsRef.current[index] = el)}
          >
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
