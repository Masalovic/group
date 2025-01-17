import React, { useEffect, useRef } from "react";
import logo from "../../assets/logos/BackgroundLogo.png";
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

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const logoElement = logoRef.current;
    const wormPath = wormPathRef.current;

    if (!section || !container || !logoElement || !wormPath) return;

    const updateWorkflow = () => {
      const subsections = gsap.utils.toArray(".subsection");
      const subsectionWidth = window.innerWidth; // Each subsection's width
      const numSubsections = subsections.length;

      const totalLineWidth = window.innerWidth;
      wormPath.setAttribute("d", `M0 50 L${totalLineWidth} 50`);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Pin the Workflow section
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${numSubsections * subsectionWidth}`,
        pin: true,
        scrub: true,
        snap: {
          snapTo: 1 / (numSubsections - 1),
          duration: 0.3,
          ease: "power1.in",
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

      // Logo movement
      gsap.to(logoElement, {
        x: () => `${totalLineWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${numSubsections * subsectionWidth}`,
          scrub: true,
        },
      });

      // Subsection fade-in and fade-out effect
      subsections.forEach((subsection) => {
        gsap.fromTo(
          subsection,
          { autoAlpha: 1 }, // Start fully transparent
          {
            autoAlpha: 1, // Fully visible when in the center of the viewport
            scrollTrigger: {
              trigger: subsection,
              start: "center center", // Trigger when in the center
              end: "center+=100 center",
              toggleActions: "play reverse play reverse",
              scrub: true,
            },
          }
        );
      });
    };

    updateWorkflow();
    window.addEventListener("resize", updateWorkflow);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", updateWorkflow);
    };
  }, []);

  const workflowData = data.workflow || [];

  return (
    <div ref={sectionRef} className="workflow-section" style={{ zIndex: "1" }}>
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
            stroke="rgba(0, 178, 223, 0.6)"
            strokeWidth="4"
          />
        </svg>
        <div
          id="worm-logo"
          ref={logoRef}
          style={{
            position: "absolute",
            top: "57px",
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
            <div className="subsection-content">
              <h3>{subsection.title}</h3>
              <p>{subsection.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
