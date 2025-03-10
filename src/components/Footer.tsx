
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-creeper-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Icons */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold tracking-tight interactive flex items-center">
              <span className="bg-white text-creeper-black px-2 py-1 rounded-md mr-1">
                Creeper
              </span>
              <span className="text-white">HUB</span>
            </Link>
            <p className="text-creeper-gray-300 mt-4">
              Discover our collection of innovative projects, each crafted with precision and designed for impact.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-creeper-gray-300 transition-colors interactive">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-creeper-gray-300 transition-colors interactive">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-creeper-gray-300 transition-colors interactive">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-creeper-gray-300 transition-colors interactive">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-creeper-gray-300 transition-colors interactive">
                <Youtube size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-creeper-gray-300 transition-colors interactive">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects/alpha" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Alpha Project
                </Link>
              </li>
              <li>
                <Link to="/projects/beta" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Beta Project
                </Link>
              </li>
              <li>
                <Link to="/projects/gamma" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Gamma Project
                </Link>
              </li>
              <li>
                <Link to="/projects/delta" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Delta Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-creeper-gray-300 hover:text-white transition-colors interactive">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-creeper-gray-800 mt-12 pt-8 text-center text-creeper-gray-400">
          <p>&copy; {new Date().getFullYear()} CreeperHUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
