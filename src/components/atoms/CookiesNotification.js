import React, { useState } from "react";
import "../../styles/components/_cookiesNotification.scss";

const CookiesNotification = ({ onLanguageChange }) => {
  const [isVisible, setIsVisible] = useState(
    !localStorage.getItem("cookiesAccepted") // Show if not already accepted
  );

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem("cookiesAccepted", "true");
    console.log("Cookies Accepted");
  };

  const handleReject = () => {
    setIsVisible(false);
    console.log("Cookies Rejected");
  };

  if (!isVisible) return null; // Do not render if already accepted or rejected

  return (
    <div className="cookies-notification">
      <p>
        We use cookies to enhance your browsing experience. By continuing to use
        this site, you agree to our{" "}
        <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">
          Cookies Policy
        </a>
        .
      </p>
      <div className="buttons">
        <button className="accept" onClick={handleAccept}>
          Accept
        </button>
        <button className="reject" onClick={handleReject}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookiesNotification;
