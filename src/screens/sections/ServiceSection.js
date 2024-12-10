import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "../../components/molecules/ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = ({ data }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Use GSAP ScrollTrigger for horizontal scrolling
    gsap.to(container, {
      x: () => `-${container.scrollWidth - section.clientWidth * 0.7}px`, // Horizontal scroll
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${container.scrollWidth * 0.3}`, // Match the horizontal scroll length
        scrub: true, // Smooth scrolling
        pin: true, // Pin the section
        anticipatePin: 1, // Avoid content shifting
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up triggers
    };
  }, []);

  return (
    <div
      className="service-section"
      ref={sectionRef}
      style={{
        display: "flex",
        overflow: "hidden",
        position: "relative", // Ensure proper positioning for pinning
      }}
    >
      <div
        className="service-container"
        ref={containerRef}
        style={{
          display: "flex",
          width: "max-content", // Allow horizontal scrolling
        }}
      >
        {/* Subtitle */}
        <div className="service-text">
          <div className="subtitle-container">
            <h3 className="service-subtitle">{data.services.subtitle1}</h3>
            <p className="service-description">
              Izgradite brend koji se ističe, angažujte nove klijente i
              unapredite svoj posao uz marketing rešenja prilagođena vašim
              potrebama.
            </p>
            <div className="subtitle-line"></div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="service-cards">
          {data.services.cardList.map((card, index) => {
            return (
              <ServiceCard key={index} title={card.title} text={card.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
