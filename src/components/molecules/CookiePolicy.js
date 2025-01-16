import React from "react";
import LegalLayout from "./LegalLayout";

const CookiePolicy = ({ data, onLanguageChange }) => {
  if (!data || !data.footer?.cookiePolicy) {
    return <div>Loading...</div>; // Fallback for missing data
  }

  const { title, intro, consent, additionalInfo, footer } =
    data.footer.cookiePolicy;

  return (
    <LegalLayout data={data} onLanguageChange={onLanguageChange}>
      <h1>{title}</h1>
      <p>{intro}</p>
      <p>{consent}</p>
      <p>
        {additionalInfo}{" "}
        <a href="/privacy-policy">{data.footer?.legalLinks?.privacyPolicy}</a>
      </p>
      <p>
        <strong>{footer}</strong>
      </p>
    </LegalLayout>
  );
};

export default CookiePolicy;
