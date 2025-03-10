
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 100) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 100) {
      prevSlide();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="relative h-[80vh] md:h-[90vh]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center p-4 md:p-8 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h2>
              <p className="text-lg md:text-xl text-creeper-gray-600 mb-6">
                {project.description}
              </p>
              <Link
                to={project.url}
                className="inline-block bg-creeper-black text-white px-6 py-3 rounded-full hover:bg-creeper-gray-600 transition-colors interactive"
              >
                View Project
              </Link>
            </div>
            <div className="md:w-1/2 floating-image animate-float">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg z-20 interactive"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg z-20 interactive"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center z-20">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentIndex ? "active" : ""} interactive`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
