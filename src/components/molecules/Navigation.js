import React, { useState } from "react";
import logo from "../../assets/logos/logo.png";
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

  const handleLanguageChange = (lang) => {
    if (typeof onLanguageChange === "function") {
      onLanguageChange(lang);
    } else {
      console.error("onLanguageChange is not a function.");
    }
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
            <a
              href={item.path}
              key={item.name}
              onClick={handleCloseMenu}
              className={item.name === "GottaGo" ? "gottago-link" : ""}
            >
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
            Create With Us
          </a>
        </div>

        {/* Language Selector */}
        <div className="nav-box-languages">
          <button onClick={() => handleLanguageChange("sr")}>
            <img src={sr} alt="Serbian" />
          </button>
          <button onClick={() => handleLanguageChange("en")}>
            <img src={uk} alt="English" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
