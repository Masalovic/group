import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "../../styles/section/workflow.scss";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const Workflow = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const ball = ballRef.current;

    if (!section || !container || !ball) return;

    const subsections = gsap.utils.toArray(".subsection");

    // Pin the Workflow section and lock it for scrolling
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${subsections.length * window.innerHeight}`,
      pin: true,
    });

    // Fade-in/out subsections in sequence
    subsections.forEach((subsection, index) => {
      gsap.fromTo(
        subsection,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: () => `top+=${index * window.innerHeight} center`,
            end: () => `top+=${(index + 1) * window.innerHeight} center`,
            scrub: true,
            onEnter: () => {
              if (index > 0) {
                gsap.to(subsections[index - 1], {
                  autoAlpha: 0,
                  duration: 1,
                });
              }
            },
            onLeave: () => {
              if (index < subsections.length - 1) {
                gsap.to(subsection, {
                  autoAlpha: 0,
                  duration: 1,
                });
              }
            },
          },
        }
      );
    });

    // WormScroll: Synchronize ball with subsections
    gsap.to(ball, {
      motionPath: {
        path: "#horizontal-worm-path",
        align: "#horizontal-worm-path",
        alignOrigin: [0.5, 0.5],
      },
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${subsections.length * window.innerHeight}`,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="workflow-section">
      {/* Horizontal Worm Scroll */}
      <div className="horizontal-worm-container">
        <svg
          id="horizontal-worm"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 768 100"
        >
          <path
            id="horizontal-worm-path"
            d="M20 50 C 150 50, 600 50, 750 50"
            stroke="rgb(4, 154, 180)"
            strokeWidth="4"
            fill="none"
          />
        </svg>
        <div
          id="worm-ball"
          ref={ballRef}
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "radial-gradient(circle,#ffff,#00b2df,#22304b)",
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Subsections */}
      <div ref={containerRef} className="subsections-container">
        {[
          { title: "Consultation", text: "Discussing your goals and needs." },
          {
            title: "Proposal with Offer",
            text: "Presenting a custom solution.",
          },
          { title: "Onboarding", text: "Getting you ready to start." },
          { title: "Design", text: "Crafting your tailored design." },
          { title: "Development", text: "Bringing your vision to life." },
          { title: "Outboarding", text: "Delivering and supporting." },
        ].map((subsection, index) => (
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
