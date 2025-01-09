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

    const initializeScroll = () => {
      // Clear existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Horizontal scroll with GSAP
      gsap.to(container, {
        x: () => `-${container.scrollWidth - section.clientWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${container.scrollWidth - section.clientWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalculate on resize
        },
      });

      ScrollTrigger.refresh(); // Refresh ScrollTrigger
    };

    // Initialize on component mount
    initializeScroll();

    // Reinitialize on window resize
    window.addEventListener("resize", initializeScroll);

    return () => {
      // Clean up on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", initializeScroll);
    };
  }, []);

  return (
    <div
      className="service-section"
      ref={sectionRef}
      style={{
        display: "flex",
        overflow: "visible",
        position: "relative",
      }}
    >
      <div
        className="service-container"
        ref={containerRef}
        style={{
          display: "flex",
          width: "max-content",
        }}
      >
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
