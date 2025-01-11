import React from "react";
import ServiceCard from "../../components/molecules/ServiceCard";
import "../../styles/section/serviceSection.scss";

const ServiceSection = ({ data }) => {
  return (
    <div className="service-section">
      <div className="service-container">
        {/* Subtitle */}
        <div className="service-text">
          <div className="subtitle-container">
            <h3 className="service-subtitle">{data.services.subtitle}</h3>
            <p className="service-description">{data.services.description}</p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="service-cards">
          {data.services.cardList.map((card, index) => (
            <ServiceCard key={index} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ServiceCard from "../../components/molecules/ServiceCard";

// gsap.registerPlugin(ScrollTrigger);

// const ServiceSection = ({ data }) => {
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const container = containerRef.current;

//     if (!section || !container) return;

//     // Kill existing triggers for safety
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//     // Reinitialize ScrollTrigger
//     const trigger = ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       end: () => `+=${container.scrollWidth - section.clientWidth * 0.7}`, // Adjust length for smooth scroll
//       scrub: 1,
//       pin: true,
//       anticipatePin: 1,
//       invalidateOnRefresh: true, // Fix resize or refresh issues
//     });

//     gsap.to(container, {
//       x: () => `-${container.scrollWidth - section.clientWidth * 0.7}px`,
//       ease: "none",
//       scrollTrigger: trigger,
//     });

//     return () => {
//       trigger.kill(); // Clean up
//     };
//   }, []);

//   return (
//     <div className="service-section" ref={sectionRef}>
//       <div className="service-container" ref={containerRef}>
//         <div className="service-text">
//           <div className="subtitle-container">
//             <h3 className="service-subtitle">{data.services.subtitle}</h3>
//             <p className="service-description">{data.services.description}</p>
//           </div>
//         </div>
//         <div className="service-cards">
//           {data.services.cardList.map((card, index) => (
//             <ServiceCard key={index} title={card.title} text={card.text} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSection;
