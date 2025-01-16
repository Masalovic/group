import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxComponent = ({ children, speed = 0.5 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: () => `${window.innerHeight * speed}px`,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return (
    <div
      ref={elementRef}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxComponent;

// ***USE IN COMPONENT***

// import React from "react";
// import ParallaxComponent from "./ParallaxComponent";

// const ExamplePage = () => {
//   return (
//     <div>
//       <div style={{ height: "100vh", background: "#f4f4f4" }}>
//         <h2>Scroll Down to See Parallax Effect</h2>
//       </div>

//       {/* Parallax Image */}
//       <ParallaxComponent speed={0.3}>
//         <div
//           style={{
//             height: "300px",
//             Image: "url('https://via.placeholder.com/1200x300')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </ParallaxComponent>

//       {/* Parallax Text */}
//       <ParallaxComponent speed={0.7}>
//         <h2
//           style={{
//             textAlign: "center",
//             fontSize: "3rem",
//             margin: "50px 0",
//             color: "#049ab4",
//           }}
//         >
//           Smooth Parallax Text
//         </h2>
//       </ParallaxComponent>

//       <div style={{ height: "100vh", background: "#dcdcdc" }}>
//         <h2>Content Below Parallax</h2>
//       </div>
//     </div>
//   );
// };

// export default ExamplePage;
