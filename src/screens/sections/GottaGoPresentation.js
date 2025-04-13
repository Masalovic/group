import React, { useRef, useState, useEffect } from "react";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide4 from "../../assets/images/slide4.png";
import slide6 from "../../assets/images/slide6.png";
import slide7 from "../../assets/images/slide7.png";
import slide10 from "../../assets/images/slide10.png";
import slide11 from "../../assets/images/slide11.png";
import slide12 from "../../assets/images/slide12.png";

const imageList = [
  slide1,
  slide2,
  slide4,
  slide6,
  slide7,
  slide10,
  slide11,
  slide12,
];

const GottaGoPresentation = () => {
  const scrollRef = useRef(null);
  const [fullscreenImg, setFullscreenImg] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scroll = (offset) => {
    if (isMobile) {
      scrollRef.current?.scrollBy({ top: offset, behavior: "smooth" });
    } else {
      scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleWheel = (e) => {
    if (!isMobile) {
      e.preventDefault();
      scrollRef.current?.scrollBy({ left: e.deltaY, behavior: "smooth" });
    }
  };

  const openFullscreen = (src) => setFullscreenImg(src);
  const closeFullscreen = () => setFullscreenImg(null);

  return (
    <div className="gottago-section">
      {/* <Navigation data={data} /> */}

      {!isMobile && (
        <div className="scroll-buttons">
          <button onClick={() => scroll(-300)}>&larr;</button>
          <button onClick={() => scroll(300)}>&rarr;</button>
        </div>
      )}

      <div
        className="scroll-wrapper"
        onWheel={handleWheel}
        ref={scrollRef}
      >
        {imageList.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="scroll-image"
            onClick={() => openFullscreen(src)}
          />
        ))}
      </div>

      {fullscreenImg && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <img
            src={fullscreenImg}
            alt="Fullscreen View"
            className="fullscreen-img"
          />
        </div>
      )}
    </div>
  );
};

export default GottaGoPresentation;
