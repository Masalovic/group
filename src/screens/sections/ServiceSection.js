import React, { useEffect, useRef } from "react";
import ServiceCard from "../../components/molecules/ServiceCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/section/serviceSection.scss";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = ({ data }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;

      if (!section || !container) return;

      const cards = gsap.utils.toArray(".service-card");
      const containerWidth = container.scrollWidth - window.innerWidth + 50; // Ensure last card is fully visible

      // Pin the service section and create the horizontal scrolling
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${containerWidth}`,
        pin: true,
        scrub: true,
        snap: {
          snapTo: 1 / (cards.length - 1),
          duration: 0.5,
          ease: "power1.inOut",
        },
      });

      // Horizontal scrolling animation
      gsap.to(container, {
        x: () => `-${containerWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${containerWidth}`,
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={sectionRef} className="service-section">
      <div className="service-container">
        <div className="service-text">
          <div className="subtitle-container">
            <h3 className="service-subtitle">{data.services.subtitle}</h3>
            <p className="service-description">{data.services.description}</p>
          </div>
        </div>

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
