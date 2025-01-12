import React from "react";
import "../../styles/section/overlay.scss";

const Overlay = () => {
  // Generate 150 stars
  const stars = Array.from({ length: 150 }, (_, index) => (
    <div key={index} className="star"></div>
  ));

  return <div className="overlay">{stars}</div>;
};

export default Overlay;
