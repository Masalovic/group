import React from "react";
import Background from "../../assets/videos/HomeBckg.mp4";

const HomeSection = ({ data }) => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
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
        <h1 className="home-title">{data?.home?.title}</h1>
        <div className="home-divider"></div>
        <h3 className="home-subtitle">{data?.home?.subtitle}</h3>

        {/* Map through texts dynamically */}
        <div className="home-texts">
          {Object.keys(data?.home || {})
            .filter((key) => key.startsWith("text"))
            .map((key) => (
              <p key={key} className="home-text">
                {data.home[key]}
              </p>
            ))}
        </div>

        <p className="home-subtext">{data?.home?.subtext}</p>

        <a href="/#contact" onClick={handleScrollToContact}>
          <button className="home-button">{data?.home?.button}</button>
        </a>
      </div>
    </div>
  );
};

export default HomeSection;
