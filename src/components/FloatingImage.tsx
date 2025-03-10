
import { useState, useEffect } from "react";

interface FloatingImageProps {
  src: string;
  alt: string;
  delay?: number;
  className?: string;
}

const FloatingImage: React.FC<FloatingImageProps> = ({ 
  src, 
  alt, 
  delay = 0,
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-20"
      } ${className}`}
    >
      <div className="floating-image animate-float overflow-hidden">
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
    </div>
  );
};

export default FloatingImage;
