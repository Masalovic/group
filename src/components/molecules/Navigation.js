import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import sr from "../../assets/icons/sr.png";
import uk from "../../assets/icons/uk.png";

const Navigation = ({ data, onLanguageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="navigation">
      <div className="navigation-container">
        {/* Logo */}
        <div className="nav-box-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Burger Menu */}
        <button
          className={`nav-box-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={handleToggleMenu}
          aria-label="Toggle menu"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-box-sections ${isMobileMenuOpen ? "open" : ""}`}>
          {data.navbar.map((item) => (
            <a href={item.path} key={item.name} onClick={handleCloseMenu}>
              {item.name}
            </a>
          ))}
        </div>

        {/* "Work With Us" Button */}
        <div className="nav-box-work-with-us">
          <a
            href="https://forms.office.com/e/wnvxwcWsBr"
            target="_blank"
            rel="noopener noreferrer"
            className="work-with-us-button"
          >
            Work With Us
          </a>
        </div>

        {/* Language Box */}
        <div className="nav-box-languages">
          <button onClick={() => onLanguageChange("sr")}>
            <img src={sr} alt="Serbian" />
          </button>
          <button onClick={() => onLanguageChange("en")}>
            <img src={uk} alt="English" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
