import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ data }) => {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const reasonsRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP ScrollTrigger Setup
    const reasons = reasonsRef.current;

    if (!reasons) return;

    // Add individual triggers for each reason
    Array.from(reasons.children).forEach((reason, index) => {
      gsap.fromTo(
        reason,
        { opacity: 0, y: 50 }, // Start hidden and offset downward
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: reason,
            start: `top+=${index * 0} center`, // Offset each reason’s trigger
            end: `+=50`, // Spread the animation across a long scroll
            scrub: 1.5, // Smooth, slow scrub
          },
        }
      );
    });
    // const section = sectionRef.current;
    // const subtitle = subtitleRef.current;
    // const reasons = reasonsRef.current;

    // if (!section || !subtitle || !reasons) return;

    // gsap.set(reasons.children, { y: 50, opacity: 0 }); // Initial state for reasons

    // // Animate reasons appearing when subtitle reaches the top
    // gsap.to(reasons.children, {
    //   y: 0,
    //   opacity: 1,
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: subtitle,
    //     start: "top 10%", // Trigger animation when subtitle reaches 20% of the viewport
    //     end: "bottom bottom", // Animation ends when reasons scroll out of view
    //     scrub: true,
    //   },
    // });

    return () => {
      lenis.destroy(); // Cleanup Lenis
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup GSAP triggers
    };
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      {/* Sticky Subtitle */}
      <div className="subtitle-container" ref={subtitleRef}>
        <h2>{data.about.subtitle}</h2>
      </div>

      {/* Reasons */}
      <div className="reasons-container" ref={reasonsRef}>
        {data.about.reasons.map((reason, index) => (
          <div className="reason" key={index}>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
