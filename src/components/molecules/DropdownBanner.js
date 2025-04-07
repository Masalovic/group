import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "../../styles/components/_dropdownBanner.scss";

const DropdownBanner = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleBanner = () => {
    setIsExpanded(!isExpanded);
  };

  const closeBanner = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isExpanded]);

  return (
    <div className={`dropdown-banner ${isExpanded ? "expanded" : "stacked"}`}>
      {isExpanded && (
        <div className="banner-content">
          <button
            className="close-button"
            onClick={closeBanner}
            aria-label="Close banner"
          >
            &times;
          </button>

          <h2 className="headline">{data.dropdownBanner.headline}</h2>
          <p className="subheadline">{data.dropdownBanner.subheadline}</p>
          <HashLink to="/#contact">
            <button className="banner-button">
              {data.dropdownBanner.button}
            </button>
          </HashLink>
        </div>
      )}
      {!isExpanded && (
        <button
          className="toggle-button"
          onClick={toggleBanner}
          aria-label="Expand banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default DropdownBanner;
