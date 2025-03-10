
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOverDarkBackground, setIsOverDarkBackground] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a dark background
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const styles = window.getComputedStyle(element);
        const backgroundColor = styles.backgroundColor;
        const rgbMatch = backgroundColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)/);
        
        if (rgbMatch) {
          const [, r, g, b] = rgbMatch.map(Number);
          // If the background is dark (low RGB values)
          const isDark = (r + g + b) / 3 < 100;
          setIsOverDarkBackground(isDark);
        } else {
          setIsOverDarkBackground(false);
        }
      }
    };

    const handleLinkHoverStart = () => setIsHovering(true);
    const handleLinkHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", updateCursorPosition);

    // Add event listeners to all links and buttons
    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverStart);
      el.addEventListener("mouseleave", handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart);
        el.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${isHovering ? "link-hover" : ""} ${isOverDarkBackground ? "over-dark" : ""}`}
        style={{ left: position.x, top: position.y }}
      ></div>
      <div
        className={`cursor-outline ${isHovering ? "link-hover" : ""} ${isOverDarkBackground ? "over-dark" : ""}`}
        style={{ left: position.x, top: position.y }}
      ></div>
    </>
  );
};

export default CustomCursor;
