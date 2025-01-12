import React from "react";

const ServiceCard = ({ title, text }) => {
  return (
    <div className="service-card">
      <p className="card-title">{title}</p>

      <p className="card-details">{text}</p>
    </div>
  );
};

export default ServiceCard;
