import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProgressAnimation = ({ children, onProgress }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const element = progressRef.current;

    if (!element) return;

    ScrollTrigger.create({
      trigger: element,
      start: "center center",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress; // Scroll progress (0 to 1)
        onProgress(progress); // Callback function for progress
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [onProgress]);

  return <div ref={progressRef}>{children}</div>;
};

export default ProgressAnimation;

// ***USE IN COMPONENT***
// Example 1: Progress Bar Animation

// import React, { useState, useEffect, useRef } from "react";
// import ProgressAnimation from "./ProgressAnimation";

// const ExamplePage = () => {
//   const [progress, setProgress] = useState(0);
//   const lastTriggeredStep = useRef(null);

//   useEffect(() => {
//     // Define the actions at each progress step
//     const steps = [0, 0.2, 0.4, 0.6, 0.8, 1];
//     const nearestStep = steps.find((step) => progress >= step && step !== lastTriggeredStep.current);

//     if (nearestStep !== undefined) {
//       lastTriggeredStep.current = nearestStep; // Update the last triggered step
//       triggerAction(nearestStep); // Trigger the action
//     }
//   }, [progress]);

//   const triggerAction = (step) => {
//     switch (step) {
//       case 0:
//         console.log("Action at 0% progress");
//         break;
//       case 0.2:
//         console.log("Action at 20% progress");
//         break;
//       case 0.4:
//         console.log("Action at 40% progress");
//         break;
//       case 0.6:
//         console.log("Action at 60% progress");
//         break;
//       case 0.8:
//         console.log("Action at 80% progress");
//         break;
//       case 1:
//         console.log("Action at 100% progress");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div>
//       <div style={{ height: "100vh", background: "#f4f4f4" }}>
//         <h2>Scroll Down to See Actions at Every 20% Progress</h2>
//       </div>

//       {/* Progress Animation */}
//       <ProgressAnimation onProgress={(value) => setProgress(value)}>
//         <div
//           style={{
//             height: "300px",
//             background: "#1e1e1e",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             color: "#fff",
//             position: "relative",
//           }}
//         >
//           <div
//             style={{
//               position: "absolute",
//               bottom: 0,
//               left: 0,
//               width: `${progress * 100}%`, // Dynamic width
//               height: "5px",
//               background: "#62e8ffce",
//               transition: "width 0.3s",
//             }}
//           ></div>
//           <h2>{Math.round(progress * 100)}%</h2>
//         </div>
//       </ProgressAnimation>

//       <div style={{ height: "100vh", background: "#dcdcdc" }}>
//         <h2>Content Below</h2>
//       </div>
//     </div>
//   );
// };

// export default ExamplePage;

// ***USE IN COMPONENT***
// Example 2: Progress-Based Reveal Effect

// import React, { useState } from "react";
// import ProgressAnimation from "./ProgressAnimation";

// const ExamplePage = () => {
//   const [progress, setProgress] = useState(0);

//   return (
//     <div>
//       <div style={{ height: "100vh", background: "#f4f4f4" }}>
//         <h2>Scroll Down for Reveal Effect</h2>
//       </div>

//       {/* Progress Animation for Reveal */}
//       <ProgressAnimation onProgress={(value) => setProgress(value)}>
//         <div
//           style={{
//             height: "300px",
//             background: `rgba(4, 154, 180, ${progress})`, // Dynamic background opacity
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             color: "#fff",
//             fontSize: "2rem",
//           }}
//         >
//           Reveal Me!
//         </div>
//       </ProgressAnimation>

//       <div style={{ height: "100vh", background: "#dcdcdc" }}>
//         <h2>Content Below</h2>
//       </div>
//     </div>
//   );
// };

// export default ExamplePage;
