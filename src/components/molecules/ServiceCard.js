import React from "react";

const ServiceCard = ({ title, text }) => {
  return (
    <div className="service-card" style={{ overflow: "hidden" }}>
      <div className="top-container">
        <p className="card-title">{title}</p>
      </div>
      <div className="bottom-container">
        <p className="card-details">{text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
