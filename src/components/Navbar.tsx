
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { id: 1, name: "Alpha Project", url: "/projects/alpha" },
  { id: 2, name: "Beta Project", url: "/projects/beta" },
  { id: 3, name: "Gamma Project", url: "/projects/gamma" },
  { id: 4, name: "Delta Project", url: "/projects/delta" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2 backdrop-blur-md bg-white/80 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight interactive"
          >
            <span className="bg-creeper-black text-white px-2 py-1 rounded-md mr-1">
              Creeper
            </span>
            HUB
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className="nav-link interactive">
              Home
            </Link>
            <div className="relative group">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="nav-link interactive flex items-center"
              >
                Projects <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-10 animate-scale-up">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      to={project.url}
                      className="block px-4 py-2 hover:bg-creeper-gray-100 transition-colors interactive"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="nav-link interactive">
              About
            </Link>
            <Link to="/contact" className="nav-link interactive">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden interactive"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg py-4 animate-scale-up">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-creeper-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="px-4 py-2">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center w-full text-left"
              >
                Projects <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      to={project.url}
                      className="block py-1 hover:text-creeper-black transition-colors"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/about"
              className="block px-4 py-2 hover:bg-creeper-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2 hover:bg-creeper-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
