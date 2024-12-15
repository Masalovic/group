import React from "react";
import MarqueeText from "../../components/atoms/MarqueeText";

const PortfolioSection = ({ data }) => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-container">
        <MarqueeText text={data.portfolio.marquee} />
      </div>
    </div>
  );
};
export default PortfolioSection;
