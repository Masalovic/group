import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PinningComponent = ({ children, start = "top top", end = "+=1000" }) => {
  const pinRef = useRef(null);

  useEffect(() => {
    const pinElement = pinRef.current;

    if (!pinElement) return;

    ScrollTrigger.create({
      trigger: pinElement,
      start: start,
      end: end,
      pin: true,
      scrub: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [start, end]);

  return (
    <div
      ref={pinRef}
      style={{
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1e1e1e",
        color: "#ffffff",
        fontSize: "2rem",
        border: "1px solid #049ab4",
      }}
    >
      {children || "I am pinned! Scroll past me!"}
    </div>
  );
};

export default PinningComponent;

// ***USE IN COMPONENT***

// import React from "react";
// import PinningComponent from "./PinningComponent";

// const ExamplePage = () => {
//   return (
//     <div>
//       <div style={{ height: "100vh", background: "#f4f4f4" }}>
//         <h2>Scroll Down to See the Pinned Section</h2>
//       </div>
//       <PinningComponent>
//         This element is pinned while scrolling past it!
//       </PinningComponent>
//       <div style={{ height: "100vh", background: "#dcdcdc" }}>
//         <h2>Content Below the Pinned Section</h2>
//       </div>
//     </div>
//   );
// };

// export default ExamplePage;
