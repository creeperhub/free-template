
import { useState, useEffect } from "react";

interface FloatingImageProps {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "custom";
  objectFit?: "cover" | "contain" | "fill";
}

const FloatingImage: React.FC<FloatingImageProps> = ({ 
  src, 
  alt, 
  delay = 0,
  className = "",
  aspectRatio = "custom",
  objectFit = "cover"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square": return "aspect-square";
      case "video": return "aspect-video";
      case "portrait": return "aspect-[3/4]";
      default: return "";
    }
  };

  return (
    <div 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-20"
      } ${className}`}
    >
      <div className={`floating-image animate-float overflow-hidden ${getAspectRatioClass()}`}>
        <img 
          src={src} 
          alt={alt} 
          className={`w-full h-full ${objectFit === "cover" ? "object-cover" : objectFit === "contain" ? "object-contain" : "object-fill"} transition-transform duration-500 hover:scale-105`} 
        />
      </div>
    </div>
  );
};

export default FloatingImage;
