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
          duration: 0.5,
          ease: "power2.in",
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
        x: () => `${totalLineWidth - logoElement.clientWidth}px`,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${numSubsections * subsectionWidth}`,
          scrub: true,
        },
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

// import React, { useEffect, useRef } from "react";
// import logo from "../../assets/images/BackgroundLogo.png";
// import "../../styles/section/workflow.scss";

// const Workflow = ({ data }) => {
//   const containerRef = useRef(null);
//   const logoRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const logo = logoRef.current;

//     const handleScroll = () => {
//       const scrollLeft = container.scrollLeft;
//       const maxScrollLeft = container.scrollWidth - container.clientWidth;
//       const progress = scrollLeft / maxScrollLeft;

//       if (logo) {
//         logo.style.transform = `translate(${progress * 100}%, -50%)`;
//       }
//     };

//     container.addEventListener("scroll", handleScroll);

//     return () => {
//       container.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="workflow-section">
//       <div className="horizontal-worm-container">
//         <div id="worm-logo" ref={logoRef}>
//           <img src={logo} alt="Logo" />
//         </div>
//       </div>

//       <div className="subsections-container" ref={containerRef}>
//         {data.workflow.map((subsection, index) => (
//           <div className="subsection" key={index}>
//             <h3>{subsection.title}</h3>
//             <p>{subsection.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Workflow;
