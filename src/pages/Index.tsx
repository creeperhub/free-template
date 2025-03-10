import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import DotBackground from "@/components/DotBackground";
import ProjectCarousel, { Project } from "@/components/ProjectCarousel";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

// Placeholder project data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Alpha Project",
    description: "An innovative solution for modern web applications with cutting-edge technology and seamless user experience.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    url: "/projects/alpha",
  },
  {
    id: 2,
    title: "Beta Project",
    description: "Reimagining digital interactions through minimalist design principles and responsive architectures.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    url: "/projects/beta",
  },
  {
    id: 3,
    title: "Gamma Project",
    description: "Exploring the boundaries of what's possible in interactive digital experiences and immersive content delivery.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    url: "/projects/gamma",
  },
  {
    id: 4,
    title: "Delta Project",
    description: "Bridging the gap between form and function with elegant solutions for complex digital challenges.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    url: "/projects/delta",
  },
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <CustomCursor />
      <DotBackground />
      <Navbar />
      
      <main className="pt-16 flex-grow">
        <section className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 pt-12">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Welcome to <span className="bg-creeper-black text-white px-2 py-1 rounded-md">Creeper</span>HUB
              </h1>
              <p className="text-xl md:text-2xl text-creeper-gray-600 max-w-3xl mx-auto">
                Discover our collection of innovative projects, each crafted with precision and designed for impact.
              </p>
            </div>
            
            <ProjectCarousel projects={projectsData} />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
