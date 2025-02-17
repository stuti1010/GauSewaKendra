"use client";

import { useEffect, useRef } from "react";

const Banner = () => {
  const textRef = useRef<HTMLDivElement>(null); // Explicitly define the type

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    const parentElement = textElement.parentElement;
    if (!parentElement) return;

    // Function to animate the text
    const animateText = () => {
      const textWidth = textElement.offsetWidth;
      const bannerWidth = parentElement.offsetWidth;

      // Reset position to the right
      textElement.style.transform = `translateX(${bannerWidth}px)`;

      // Animate to the left
      const animation = textElement.animate(
        [
          { transform: `translateX(${bannerWidth}px)` }, // Start from the right
          { transform: `translateX(-${textWidth}px)` }, // Move to the left
        ],
        {
          duration: 20000, // 20 seconds
          iterations: Infinity, // Loop infinitely
        }
      );

      // Ensure the animation starts
      animation.play();
    };

    animateText();
  }, []);

  return (
    <div
      className="w-full h-20 overflow-hidden relative shadow-lg "
      style={{ backgroundColor: "#FF671F" }}
    >
      <div
        ref={textRef}
        className="absolute whitespace-nowrap text-4xl font-bold text-white"
        style={{ top: "30%", transform: "translateY(-50%)",bottom:"70%" }}
      >
      ||&nbsp;   गौ &nbsp;  को &nbsp;  कचरा &nbsp; नहीं &nbsp; , &nbsp; रोटी &nbsp;  दालो &nbsp;  ||
      </div>
    </div>
  );
};

export default Banner;