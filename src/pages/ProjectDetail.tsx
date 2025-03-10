
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import DotBackground from "@/components/DotBackground";
import FloatingImage from "@/components/FloatingImage";
import CustomCursor from "@/components/CustomCursor";

// Placeholder project data - in a real app, you would fetch this from an API
const projectsData = {
  alpha: {
    id: 1,
    title: "Alpha Project",
    description: "An innovative solution for modern web applications with cutting-edge technology and seamless user experience.",
    longDescription: "Alpha Project represents the pinnacle of our technological innovation, combining state-of-the-art frameworks with intuitive user experiences. This project tackles complex challenges in data visualization and user interaction, providing a robust platform for enterprise solutions.",
    mainImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Three.js"],
    subProjects: [
      { id: 101, name: "Alpha Core", description: "The foundational framework" },
      { id: 102, name: "Alpha UI", description: "Component library and design system" },
      { id: 103, name: "Alpha Analytics", description: "Data processing and visualization" },
    ],
  },
  beta: {
    id: 2,
    title: "Beta Project",
    description: "Reimagining digital interactions through minimalist design principles and responsive architectures.",
    longDescription: "Beta Project takes a fresh approach to digital design, focusing on minimal aesthetics while maximizing functionality. The project explores new paradigms in responsive design, ensuring seamless experiences across all device types and screen sizes.",
    mainImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ],
    technologies: ["Vue.js", "SCSS", "GraphQL", "Figma"],
    subProjects: [
      { id: 201, name: "Beta Mobile", description: "Native mobile application" },
      { id: 202, name: "Beta Desktop", description: "Electron-based desktop client" },
      { id: 203, name: "Beta API", description: "RESTful service architecture" },
    ],
  },
  gamma: {
    id: 3,
    title: "Gamma Project",
    description: "Exploring the boundaries of what's possible in interactive digital experiences and immersive content delivery.",
    longDescription: "Gamma Project pushes the boundaries of interactive web experiences, leveraging the latest in WebGL and 3D rendering technologies. This project creates immersive digital environments that respond to user input in real-time, blurring the line between traditional websites and interactive applications.",
    mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ],
    technologies: ["WebGL", "Three.js", "GSAP", "Canvas API"],
    subProjects: [
      { id: 301, name: "Gamma Experience", description: "Interactive 3D showcase" },
      { id: 302, name: "Gamma Studio", description: "Creation and editing tools" },
      { id: 303, name: "Gamma Gallery", description: "Curated collection of works" },
    ],
  },
  delta: {
    id: 4,
    title: "Delta Project",
    description: "Bridging the gap between form and function with elegant solutions for complex digital challenges.",
    longDescription: "Delta Project represents our commitment to accessibility and inclusivity in digital design. The project focuses on creating interfaces that are both beautiful and functional for all users, regardless of ability or device. Delta incorporates advanced animation techniques to enhance user guidance and feedback.",
    mainImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Accessibility"],
    subProjects: [
      { id: 401, name: "Delta Widgets", description: "Reusable UI components" },
      { id: 402, name: "Delta Motion", description: "Animation library" },
      { id: 403, name: "Delta A11y", description: "Accessibility testing tools" },
    ],
  },
};

type ProjectParams = {
  id: string;
};

const ProjectDetail = () => {
  const { id } = useParams<ProjectParams>();
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setIsLoading(true);
    setTimeout(() => {
      if (id && projectsData[id as keyof typeof projectsData]) {
        setProject(projectsData[id as keyof typeof projectsData]);
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-creeper-gray-200 border-t-creeper-black rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-creeper-gray-600 mb-6">The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="bg-creeper-black text-white px-6 py-3 rounded-full hover:bg-creeper-gray-600 transition-colors interactive">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <DotBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-creeper-gray-600 hover:text-creeper-black mb-8 transition-colors interactive">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">{project.title}</h1>
            <p className="text-xl text-creeper-gray-600 max-w-3xl animate-fade-in">{project.description}</p>
          </div>
          
          <div className="mb-16 animate-fade-in">
            <FloatingImage src={project.mainImage} alt={project.title} className="w-full max-h-[70vh] object-cover" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-creeper-gray-600 mb-6">{project.longDescription}</p>
              
              <h2 className="text-2xl font-bold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index} 
                    className="bg-creeper-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Sub-Projects</h2>
              <div className="space-y-4">
                {project.subProjects.map((subProject: any) => (
                  <div 
                    key={subProject.id} 
                    className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold">{subProject.name}</h3>
                    <p className="text-creeper-gray-600 text-sm">{subProject.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.gallery.map((image: string, index: number) => (
                <FloatingImage 
                  key={index}
                  src={image}
                  alt={`${project.title} gallery image ${index + 1}`}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-8 text-center text-creeper-gray-500">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} CreeperHUB. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
