
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isOverDarkBackground, setIsOverDarkBackground] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
      
      // Check if cursor is over a dark background
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const isFooter = element.closest('footer') !== null;
        if (isFooter) {
          setIsOverDarkBackground(true);
        } else {
          let parent = element;
          while (parent) {
            const style = window.getComputedStyle(parent);
            const bg = style.backgroundColor;
            if (bg.includes('rgb(0, 0, 0)') || parent.classList.contains('bg-black')) {
              setIsOverDarkBackground(true);
              return;
            }
            parent = parent.parentElement as HTMLElement;
          }
          setIsOverDarkBackground(false);
        }
      }
    };

    const handleLinkHoverStart = () => {
      setIsHovering(true);
    };

    const handleLinkHoverEnd = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateCursorPosition);

    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, .interactive, [role="button"]'
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
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <div
        className={`cursor-outline ${isHovering ? "link-hover" : ""} ${isOverDarkBackground ? "over-dark" : ""}`}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
    </>
  );
};

export default CustomCursor;
