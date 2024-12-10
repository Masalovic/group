import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register GSAP plugins
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const WormScroll = () => {
  const ballRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    const section = sectionRef.current;

    if (!ball || !section) return;

    // GSAP animation to move the ball along the path
    gsap.to(ball, {
      motionPath: {
        path: "#worm-path", // Reference the ID of the path in the SVG
        align: "#worm-path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true, // Rotate the ball along the path
      },
      scrollTrigger: {
        trigger: section,
        start: "top top", // Start animation when the section hits the top of the viewport
        end: "bottom bottom", // End animation when the section scrolls out of view
        scrub: 1, // Smooth animation
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup ScrollTriggers
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="worm-scroll-section"
      style={{
        height: "200vh", // Extend the section height to allow scrolling
        position: "relative",
        background: "#0e100f", // Set a dark background color
        overflow: "hidden", // Ensure content stays within bounds
      }}
    >
      <div className="grid">
        <div className="col">
          <p
            className="body-xl"
            style={{
              fontSize: "1.5rem",
              color: "#fffce1",
              textAlign: "center",
              paddingTop: "50px",
            }}
          >
            Effortlessly guiding your users from one section to another.
          </p>
        </div>
      </div>
      <div className="scroll-smooth-effortless__worm">
        {/* Inline SVG Path */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 768 768"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <path
            id="worm-path"
            d="M20 300 C 120 100, 320 100, 420 300 S 720 500, 520 700"
            stroke="rgba(255, 255, 255, 0.3)" // Make the path visible for debugging
            strokeWidth="4"
            fill="none"
          />
        </svg>

        {/* Gradient Ball */}
        <div
          id="worm-ball"
          ref={ballRef}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #62e7ff, #049ab4, #035564)",
            position: "absolute",
            transformOrigin: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default WormScroll;
