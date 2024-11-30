import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ title, text, backgroundImage }) => {
  return (
    <div className="service-card">
      <div className="top-container">
        <p className="card-title">{title}</p>
      </div>
      <div className="bottom-container">
        <p className="card-details">{text}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default ServiceCard;
