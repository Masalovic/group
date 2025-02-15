import React from "react";
import "../../styles/section/brochuresSection.scss";

const BrochuresSection = ({ data }) => {
  return (
    <div className="brochures-section">
      <h2 className="section-title">{data.brochuresSection.title}</h2>
      <p className="section-subtitle">{data.brochuresSection.subtitle}</p>

      <div className="brochures-container">
        {data.brochuresSection.items.map((item, index) => (
          <div key={index} className="brochure-card">
            <div className="card-cover">
              <h3 className="brochure-title">{item.name}</h3>
              <p className="brochure-text">{item.text}</p>
              <div className="card-background">
                <a href={item.download} className="download-btn" download>
                  {"Download"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrochuresSection;
