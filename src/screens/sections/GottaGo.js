import React, { useRef, useState } from "react";
import data from "../../assets/en.json";
import "../../styles/section/gottago.scss";
import Navigation from "../../components/molecules/Navigation";

// Importing all 12 images
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";
import slide4 from "../../assets/images/slide4.png";
import slide5 from "../../assets/images/slide5.png";
import slide6 from "../../assets/images/slide6.png";
import slide7 from "../../assets/images/slide7.png";
import slide8 from "../../assets/images/slide8.png";
import slide9 from "../../assets/images/slide9.png";
import slide10 from "../../assets/images/slide10.png";
import slide11 from "../../assets/images/slide11.png";
import slide12 from "../../assets/images/slide12.png";

const imageList = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
];

const GottaGo = () => {
  const scrollRef = useRef(null);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  const scroll = (offset) => {
    scrollRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    scrollRef.current?.scrollBy({ left: e.deltaY, behavior: "smooth" });
  };

  const openFullscreen = (src) => setFullscreenImg(src);
  const closeFullscreen = () => setFullscreenImg(null);

  return (
    <div className="gottago-section">
      <Navigation data={data} />

      <div className="scroll-buttons">
        <button onClick={() => scroll(-300)}>&larr;</button>
        <button onClick={() => scroll(300)}>&rarr;</button>
      </div>

      <div className="scroll-wrapper" onWheel={handleWheel} ref={scrollRef}>
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

export default GottaGo;
