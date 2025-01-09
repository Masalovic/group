import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const HomeSection = ({ data }) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling for touch devices
      touchMultiplier: 1.5, // Adjust scrolling speed for touch
    });


    // Update scroll position on animation frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Clean up on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-section">
      <div className="depth-layer"></div>
      <div className="home-container">
        <h3 className="home-subtitle">{data.home.subtitle}</h3>
        <p className="home-text">{data.home.text}</p>
        <a href="/#contact" onClick={handleScrollToContact}>
          <button className="home-button">{data.home.button}</button>
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
