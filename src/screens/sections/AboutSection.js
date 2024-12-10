import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ data }) => {
  const sectionRef = useRef(null);
  const subtitleRef = useRef(null);
  const reasonsRef = useRef(null);
  const ballRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reasons = reasonsRef.current;
    const ball = ballRef.current;
    const line = lineRef.current;

    if (!section || !reasons || !ball || !line) return;

    const reasonsCount = reasons.children.length;

    // Animate the reasons individually
    Array.from(reasons.children).forEach((reason, index) => {
      gsap.fromTo(
        reason,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: reason,
            start: `top+=${index * 50} center`,
            end: `+=100`,
            scrub: 1.5,
          },
        }
      );
    });

    // Animate the ball and line
    gsap.to(ball, {
      y: () => `${line.offsetHeight - ball.offsetHeight}px`, // Move ball down to bottom of the line
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `bottom+=${window.innerHeight}`,
        scrub: 1,
        onUpdate: (self) => {
          // Calculate the progress of the ball
          const progress = self.progress;
          const remaining = Math.max(1 - progress, 0);
          line.style.height = `${remaining * 100}%`; // Shrink line height
          line.style.transform = `translateY(${(1 - remaining) * 100}%)`; // Adjust the bottom alignment
          if (progress >= 1) {
            ball.style.opacity = 0; // Hide ball at the end
          } else {
            ball.style.opacity = 1; // Keep ball visible
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      {/* Sticky Subtitle */}
      <div className="subtitle-container">
        <h2>{data.about.subtitle}</h2>
        <p>{data.about.text}</p>
        {/* Vertical Line */}
        <div className="vertical-line" ref={lineRef}></div>
        {/* Moving Ball */}
        <div className="ball" ref={ballRef}></div>
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
