import React from "react";
import Background from "../../assets/videos/HomeBckg.mp4";
import NtpLogo from "../../assets/images/ntpbgLogo.jpg";
import HubspotLogo from "../../assets/images/hubspot_solutions_logo.png";

const HomeSection = ({ data }) => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trendingTexts = Object.entries(data?.home || {})
    .filter(([key]) => key.startsWith("text") && key !== "text1")
    .sort(([a], [b]) => a.localeCompare(b));

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
      <div className="home-container-wrapper">

        <div className="home-container">
          <h1 className="home-title">{data?.home?.title}</h1>
          <div className="home-divider"></div>
          <h3 className="home-subtitle">{data?.home?.subtitle}</h3>

          {/* Trending Section */}
          <div className="home-texts">
            <p className="home-text home-trending-title">{data?.home?.text1}</p>
            <ul className="home-text-list">
              {trendingTexts.map(([key, value]) => (
                <li key={key} className="home-text-item">
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <p className="home-subtext">{data?.home?.subtext}</p>

          <a href="/#contact" onClick={handleScrollToContact}>
            <button className="home-button">{data?.home?.button}</button>
          </a>
        </div>
        <div className="partners-container">
          <p className="partners-title">{data?.home?.logoText}</p>

          <div className="row">

            <a href="https://ecosystem.hubspot.com/marketplace/solutions/universe-force-group" className="partners-logo">
              <img src={HubspotLogo} alt="Hubspot Logo" />
            </a>
            <a href="https://ntpark.rs/" className="partners-logo">
              <img src={NtpLogo} alt="Ntp Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
