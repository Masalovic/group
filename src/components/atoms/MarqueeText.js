import React from "react";

function MarqueeText({ text }) {
  const textParts = text.split("-").reduce((acc, part, index, array) => {
    acc.push(<span key={index}>{part.trim()}</span>);
    if (index < array.length - 1) {
      acc.push(
        <span key={`hyphen-${index}`} className="blue-hyphen">
          {" "}
          -{" "}
        </span>
      );
    }
    return acc;
  }, []);

  textParts.push(
    <span key="final-hyphen" className="blue-hyphen">
      {" "}
      -{" "}
    </span>
  );

  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-content">
          {textParts}
          {textParts}
        </div>
      </div>
    </div>
  );
}

export default MarqueeText;
