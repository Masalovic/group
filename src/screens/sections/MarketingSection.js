import React from "react";
import "../../styles/section/marketingSection.scss";

const MarketingSection = ({ data }) => {
  return (
    <div className="marketing-section" id="marketing-services">
      <div className="marketing-content">
        <h2 className="marketing-title">{data.services[1].title}</h2>
        <h3 className="marketing-subtitle">{data.services[1].subtitle}</h3>
        <p className="marketing-text">{data.services[1].text}</p>
        <a href="https://UniverseForceMarketing.com" className="marketing-cta">
          {data.services[1].cta}
        </a>
      </div>
    </div>
  );
};

export default MarketingSection;
