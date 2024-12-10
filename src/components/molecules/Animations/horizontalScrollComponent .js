import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollComponent = ({ children, contentWidth = 2000 }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const horizontalScrollLength = content.scrollWidth - container.clientWidth;

    gsap.to(content, {
      x: -horizontalScrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${horizontalScrollLength}`,
        scrub: true,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [contentWidth]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#1e1e1e",
        border: "1px solid #62e8ffce",
      }}
    >
      <div
        ref={contentRef}
        style={{
          display: "flex",
          gap: "2rem",
          width: `${contentWidth}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;

// ***USE IN COMPONENT***

// import React from "react";
// import HorizontalScrollComponent from "./HorizontalScrollComponent";

// const ExamplePage = () => {
//   return (
//     <div>
//       <div style={{ height: "100vh", background: "#f4f4f4" }}>
//         <h2>Scroll Down to Start Horizontal Scroll</h2>
//       </div>
//       <HorizontalScrollComponent>
//         {[...Array(10)].map((_, index) => (
//           <div
//             key={index}
//             style={{
//               width: "300px",
//               height: "200px",
//               background: index % 2 === 0 ? "#049ab4" : "#62e8ffce",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "1.5rem",
//               color: "#fff",
//               borderRadius: "8px",
//             }}
//           >
//             Item {index + 1}
//           </div>
//         ))}
//       </HorizontalScrollComponent>
//       <div style={{ height: "100vh", background: "#dcdcdc" }}>
//         <h2>Content Below Horizontal Scroll</h2>
//       </div>
//     </div>
//   );
// };

// export default ExamplePage;
