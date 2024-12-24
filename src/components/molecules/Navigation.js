import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import sr from "../../assets/icons/sr.png";
import uk from "../../assets/icons/uk.png";
import burger from "../../assets/icons/burger.png";

const Navigation = ({ data, onLanguageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navigation">
      <div className="navigation-container">
        {/* Logo */}
        <div className="nav-box-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Burger Menu */}
        <button
          className="nav-box-toggle"
          onClick={() => {
            if (isMobileMenuOpen) {
              setIsMobileMenuOpen(false); // Close the menu and reset position
            } else {
              setIsMobileMenuOpen(true);
            }
          }}
        >
          <img
            src={burger}
            alt="Menu"
            className={`burger-icon ${isMobileMenuOpen ? "rotated" : ""}`}
          />
        </button>

        {/* Navigation Links */}
        <div className={`nav-box-sections ${isMobileMenuOpen ? "open" : ""}`}>
          {data.navbar.map((item) => (
            <a href={item.path} key={item.name}>
              {item.name}
            </a>
          ))}
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
