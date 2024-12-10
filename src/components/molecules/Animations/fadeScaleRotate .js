import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeScaleRotate = ({
  children,
  fade = true,
  scale = true,
  rotate = false,
  start = "top center",
  end = "bottom center",
  scrub = true,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const animation = {
      opacity: fade ? 0 : 1,
      scale: scale ? 0.8 : 1,
      rotation: rotate ? 45 : 0,
    };

    gsap.fromTo(element, animation, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        scrub: scrub,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [fade, scale, rotate, start, end, scrub]);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeScaleRotate;

// ***USE IN COMPONENT***

// import React from "react";
// import FadeScaleRotate from "./FadeScaleRotate";

// const ExamplePage = () => {
//   return (
//     <div>
//       <div style={{ height: "30vh", background: "#f4f4f4" }}>
//         <h2>Scroll Down to See Fade, Scale, and Rotate</h2>
//       </div>

//       {/* Fade Effect */}
//       <FadeScaleRotate fade={true} scale={false} rotate={false}>
//         <div
//           style={{
//             height: "300px",
//             background: "#049ab4",
//             color: "#fff",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "2rem",
//           }}
//         >
//           Fade In Section
//         </div>
//       </FadeScaleRotate>

//       {/* Scale Effect */}
//       <FadeScaleRotate fade={false} scale={true} rotate={false}>
//         <div
//           style={{
//             height: "300px",
//             background: "#62e8ff",
//             color: "#fff",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "2rem",
//           }}
//         >
//           Scale In Section
//         </div>
//       </FadeScaleRotate>

//       {/* Rotate Effect */}
//       <FadeScaleRotate fade={false} scale={false} rotate={true}>
//         <div
//           style={{
//             height: "300px",
//             background: "#1e1e1e",
//             color: "#fff",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             fontSize: "2rem",
//           }}
//         >
//           Rotate In Section
//         </div>
//       </FadeScaleRotate>

//       <div style={{ height: "30vh", background: "#dcdcdc" }}>
//         <h2>Content Below</h2>
//       </div>
//     </div>
//   );
// };

// export default ExamplePage;
