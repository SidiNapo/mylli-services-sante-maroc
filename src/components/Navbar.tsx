
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-mylli-darkblue font-bold">
            <svg className="h-8 w-8 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="ml-2 text-xl">Mylli Services</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-mylli-blue transition-colors">
            Accueil
          </Link>
          <Link to="/a-propos" className="font-medium text-gray-700 hover:text-mylli-blue transition-colors">
            À Propos
          </Link>
          <Link to="/services" className="font-medium text-gray-700 hover:text-mylli-blue transition-colors">
            Services
          </Link>
          <Link to="/blog" className="font-medium text-gray-700 hover:text-mylli-blue transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-mylli-blue transition-colors">
            Contact
          </Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button className="bg-mylli-darkblue hover:bg-mylli-blue text-white">
            Demande d'information
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-700 hover:text-mylli-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/a-propos" 
              className="font-medium text-gray-700 hover:text-mylli-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              to="/services" 
              className="font-medium text-gray-700 hover:text-mylli-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className="font-medium text-gray-700 hover:text-mylli-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-700 hover:text-mylli-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-mylli-darkblue hover:bg-mylli-blue text-white w-full">
              Demande d'information
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
