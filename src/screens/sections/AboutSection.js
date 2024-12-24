import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/section/aboutSection.scss";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ data }) => {
  const sectionRef = useRef(null);
  const reasonsRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const reasons = reasonsRef.current;
    const subtitle = subtitleRef.current;

    if (!section || !reasons || !subtitle) return;

    const reasonsList = gsap.utils.toArray(".reason");

    // Pin the subtitle container
    ScrollTrigger.create({
      trigger: subtitle,
      start: "top 25%",
      end: "bottom 80%",
      pin: true,
      scrub: true,
    });

    // Animate the reasons on scroll
    reasonsList.forEach((reason, index) => {
      gsap.fromTo(
        reason,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: reason,
            start: "top bottom-=100",
            end: "top center",
            scrub: 1.5,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      {/* Sticky Subtitle */}
      <div className="subtitle-container" ref={subtitleRef}>
        <h2>{data.about.subtitle}</h2>
        <p>{data.about.text}</p>
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
