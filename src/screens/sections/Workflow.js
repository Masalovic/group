import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/BackgroundLogo.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/section/workflow.scss";

gsap.registerPlugin(ScrollTrigger);

const Workflow = ({ data }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const wormPathRef = useRef(null);

  const totalLineWidth = window.innerWidth; // Define this outside useEffect so it's accessible in JSX
  // const totalLineWidth = 1520;
  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const logoElement = logoRef.current;
    const wormPath = wormPathRef.current;

    if (!section || !container || !logoElement || !wormPath) return;

    const subsections = gsap.utils.toArray(".subsection");
    const subsectionWidth = window.innerWidth; // Each subsection's width
    const numSubsections = subsections.length;

    // Update the line's width to match the total scrollable width
    wormPath.setAttribute("d", `M0 50 L${totalLineWidth} 50`);

    // Pin the Workflow section and allow horizontal scrolling
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${numSubsections * subsectionWidth}`,
      pin: true,
      scrub: true,
      snap: {
        snapTo: 1 / (numSubsections - 1), // Snap to each subsection
        duration: 0.5, // Smooth snapping
        ease: "power2.in", // Easing for the snapping animation
      },
    });

    // Horizontal scroll for subsections
    gsap.to(container, {
      x: () => `-${(subsections.length - 1) * subsectionWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${numSubsections * subsectionWidth}`,
        scrub: true,
      },
    });

    // Proportional movement for the logo
    gsap.to(logoElement, {
      x: () => {
        const stepSize = totalLineWidth / (numSubsections - 1);
        return `${stepSize * (numSubsections - 1)}px`;
      },
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${numSubsections * subsectionWidth}`,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // Progress from 0 to 1
          const logoX = progress * totalLineWidth; // Map progress to line width
          logoElement.style.transform = `translate(${logoX}px, -50%)`; // Update logo position
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalLineWidth]);

  const workflowData = data.workflow || [];

  return (
    <div ref={sectionRef} className="workflow-section">
      {/* Horizontal Worm Scroll */}
      <div className="horizontal-worm-container">
        <svg
          id="horizontal-worm"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${totalLineWidth} 100`}
          style={{ overflow: "visible" }}
        >
          <path
            id="horizontal-worm-path"
            ref={wormPathRef}
            d={`M0 50 L${totalLineWidth} 50`}
            stroke="rgba(0, 178, 223, 0.22)"
            strokeWidth="4"
          />
        </svg>
        <div
          id="worm-logo"
          ref={logoRef}
          style={{
            position: "absolute",
            top: "53px",
            left: "0",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Subsections */}
      <div ref={containerRef} className="subsections-container">
        {workflowData.map((subsection, index) => (
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
