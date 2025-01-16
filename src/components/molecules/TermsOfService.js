import React from "react";
import LegalLayout from "./LegalLayout";

const TermsOfService = ({ data, onLanguageChange }) => {
  if (!data || !data.footer?.termsOfService) {
    return <div>Loading...</div>; // Fallback for missing data
  }

  const { title, effectiveDateLabel, effectiveDate, intro, sections } =
    data.footer.termsOfService;

  return (
    <LegalLayout data={data} onLanguageChange={onLanguageChange}>
      <h1>{title}</h1>
      <p>
        <strong>{effectiveDateLabel}:</strong> {effectiveDate}
      </p>
      <p>{intro}</p>
      <ol>
        {sections.map((section, index) => (
          <li key={index}>
            <strong>{section.title}</strong>
            <p>{section.text}</p>
            {section.list && (
              <ul>
                {section.list.map((item, listIndex) => (
                  <li key={listIndex}>
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <>
                        {item.title && <strong>{item.title}: </strong>}
                        {item.text}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </LegalLayout>
  );
};

export default TermsOfService;
