import React from "react";
import PropTypes from "prop-types";

const LogoList = ({ logos }) => {
  return (
    <div className="logo-list">
      {logos.map((logo, index) => (
        <div className="logo-wrapper" key={index}>
          <img src={logo} alt={`Logo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

LogoList.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LogoList;
