import React from "react";
import DropdownBanner from "../../components/molecules/DropdownBanner";
import Navigation from "../../components/molecules/Navigation";
import Footer from "../../components/molecules/Footer";
import Overlay from "../../screens/sections/Overlay";
import "../../styles/section/legalSection.scss";

const LegalLayout = ({ children, data, onLanguageChange }) => {
  if (!data) {
    return <div>Loading...</div>; // Fallback to prevent errors
  }

  return (
    <div className="legal-section">
      <Overlay />
      <DropdownBanner data={data} />
      <Navigation data={data} onLanguageChange={onLanguageChange} />
      <div className="legal-content">{children}</div>
      <Footer data={data} />
    </div>
  );
};

export default LegalLayout;
