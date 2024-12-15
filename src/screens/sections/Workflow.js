import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/section/workflow.scss";

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const ballRef = useRef(null);
  const wormPathRef = useRef(null);

  const totalLineWidth = 1520; // Define this outside useEffect so it's accessible in JSX

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const ball = ballRef.current;
    const wormPath = wormPathRef.current;

    if (!section || !container || !ball || !wormPath) return;

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
        ease: "power2.inOut", // Easing for the snapping animation
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

    // Proportional movement for the ball
    gsap.to(ball, {
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
          const ballX = progress * totalLineWidth; // Map progress to line width
          ball.style.transform = `translateX(${ballX}px)`; // Update ball position
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalLineWidth]);

  return (
    <div ref={sectionRef} className="workflow-section">
      {/* Horizontal Worm Scroll */}
      <div className="horizontal-worm-container">
        <svg
          id="horizontal-worm"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${totalLineWidth} 100`}
        >
          <path
            id="horizontal-worm-path"
            ref={wormPathRef}
            d={`M0 50 L${totalLineWidth} 50`} // Line spans the full width
            stroke="rgb(35, 137, 181, 0.7)"
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
            background: "radial-gradient(circle, #ffff, #00b2df, #22304b)",
            position: "absolute",
            top: "35%",
            left: "0",
          }}
        ></div>
      </div>

      {/* Subsections */}
      <div ref={containerRef} className="subsections-container">
        {[
          {
            title: "Consultation",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet orci quam. Nam ornare, orci a consequat ornare, nunc tellus faucibus elit, non lobortis nisi nulla quis nunc. Nam at interdum felis, eu hendrerit justo. Suspendisse iaculis mi et sapien suscipit, eget ornare mauris aliquet. Quisque elementum elementum commodo.",
          },
          {
            title: "Proposal with Offer",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet orci quam. Nam ornare, orci a consequat ornare, nunc tellus faucibus elit, non lobortis nisi nulla quis nunc. Nam at interdum felis, eu hendrerit justo. Suspendisse iaculis mi et sapien suscipit, eget ornare mauris aliquet. Quisque elementum elementum commodo.",
          },
          {
            title: "Onboarding",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet orci quam. Nam ornare, orci a consequat ornare, nunc tellus faucibus elit, non lobortis nisi nulla quis nunc. Nam at interdum felis, eu hendrerit justo. Suspendisse iaculis mi et sapien suscipit, eget ornare mauris aliquet. Quisque elementum elementum commodo.",
          },
          {
            title: "Design",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet orci quam. Nam ornare, orci a consequat ornare, nunc tellus faucibus elit, non lobortis nisi nulla quis nunc. Nam at interdum felis, eu hendrerit justo. Suspendisse iaculis mi et sapien suscipit, eget ornare mauris aliquet. Quisque elementum elementum commodo.",
          },
          {
            title: "Development",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet orci quam. Nam ornare, orci a consequat ornare, nunc tellus faucibus elit, non lobortis nisi nulla quis nunc. Nam at interdum felis, eu hendrerit justo. Suspendisse iaculis mi et sapien suscipit, eget ornare mauris aliquet. Quisque elementum elementum commodo.",
          },
          {
            title: "Outboarding",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet orci quam. Nam ornare, orci a consequat ornare, nunc tellus faucibus elit, non lobortis nisi nulla quis nunc. Nam at interdum felis, eu hendrerit justo. Suspendisse iaculis mi et sapien suscipit, eget ornare mauris aliquet. Quisque elementum elementum commodo.",
          },
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
