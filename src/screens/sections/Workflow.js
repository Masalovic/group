import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/section/workflow.scss";

gsap.registerPlugin(ScrollTrigger);

const Workflow = ({ data }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;

      if (!section || !container) return;

      const subsections = gsap.utils.toArray(".subsection");
      const subsectionWidth = window.innerWidth;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${subsections.length * subsectionWidth}`,
        pin: true,
        scrub: true,
        snap: {
          snapTo: 1 / (subsections.length - 1),
          duration: 0.3,
          ease: "power1.inOut",
        },
      });

      gsap.to(container, {
        x: () => `-${(subsections.length - 1) * subsectionWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${subsections.length * subsectionWidth}`,
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={sectionRef} className="workflow-section">
      <div className="subsections-container" ref={containerRef}>
        {data.workflow.map((subsection, index) => (
          <div className="subsection" key={index}>
            <h3>{subsection.title}</h3>
            <p>{subsection.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
