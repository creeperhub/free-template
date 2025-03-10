import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import DotBackground from "@/components/DotBackground";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <DotBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold mb-8 animate-fade-in">404</h1>
          <p className="text-2xl text-creeper-gray-600 mb-8 animate-fade-in">
            Oops! We couldn't find the page you're looking for.
          </p>
          <Link to="/" className="bg-creeper-black text-white px-6 py-3 rounded-full hover:bg-creeper-gray-600 transition-colors interactive inline-block animate-fade-in">
            Return to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
