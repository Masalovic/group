import React from "react";
import "../../styles/section/portfolio.scss";
import MarqueeText from "../../components/atoms/MarqueeText";

const Portfolio = ({ data }) => {
  return (
    <div className="portfolio-section">
      <div className="portfolio-container">
        <MarqueeText text={data.portfolio.marquee} />
      </div>
    </div>
  );
};
export default Portfolio;
