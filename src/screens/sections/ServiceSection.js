import React, { useEffect, useRef } from "react";
import ServiceCard from "../../components/molecules/ServiceCard";
import "../../styles/section/serviceSection.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = ({ data }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Horizontal scrolling logic on mouse wheel
    const handleWheel = (e) => {
      e.preventDefault(); // Prevent vertical scrolling
      container.scrollLeft += e.deltaY; // Scroll horizontally instead
    };

    container.addEventListener("wheel", handleWheel);

    // Cleanup on unmount
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div ref={sectionRef} className="service-section">
      <div className="service-container">
        {/* Subtitle */}
        <div className="service-text">
          <div className="subtitle-container">
            <h3 className="service-subtitle">{data.services.subtitle}</h3>
            <p className="service-description">{data.services.description}</p>
          </div>
        </div>

        {/* Service Cards */}
        <div ref={containerRef} className="service-cards">
          {data.services.cardList.map((card, index) => (
            <ServiceCard key={index} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
