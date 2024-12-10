import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import sr from "../../assets/icons/sr.png";
import uk from "../../assets/icons/uk.png";
import AOS from "aos";
import "aos/dist/aos.css";
import burger from "../../assets/icons/burger.png";

const Navigation = ({ data, onLanguageChange }) => {
  AOS.init({ duration: 2000 });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = scrolled ? "navigation scrolled" : "navigation";

  return (
    <div className={navClasses} data-aos="fade-down">
      <div className="navigation-container">
        <div className={`mobile`}>
          <div className="nav-box-logo">
            <img src={logo} alt="Logo" />
          </div>
          <button
            className="nav-box-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img src={burger} alt="Menu" className="burger-icon" />
          </button>
        </div>
        <div className="nav-box-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav-box-sections ${isMobileMenuOpen ? "open" : ""}`}>
          {data.navbar.map((item) => (
            <a href={item.path} className="nav-link" key={item.name}>
              {item.name}
            </a>
          ))}
          <div className="nav-box-languages">
            <button onClick={() => onLanguageChange("sr")}>
              <img src={sr} alt="Serbian" />
            </button>
            <button onClick={() => onLanguageChange("en")}>
              <img src={uk} alt="English" />
            </button>
          </div>
        </div>
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
