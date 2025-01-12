import React, { useEffect, useRef } from "react";

const HorizontalSection = ({ children, sectionClass }) => {
  const sectionRef = useRef();

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleScroll = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        section.scrollLeft += e.deltaY; // Horizontal scroll on vertical wheel
      }
    };

    section.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className={sectionClass} ref={sectionRef}>
      {children}
    </div>
  );
};

export default HorizontalSection;
