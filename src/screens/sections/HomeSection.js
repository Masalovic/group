import React from "react";
import Background from "../../assets/videos/HomeBckg.mp4";

const HomeSection = ({ data }) => {
  const handleScrollToContact = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); // Use native smooth scrolling
    }
  };

  return (
    <div className="home-section">
      {/* Video Background */}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={Background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
