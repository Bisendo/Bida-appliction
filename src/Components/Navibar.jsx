import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome,FaTasks, FaInfoCircle, FaPhone,FaStar, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-blue-700 text-white shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex justify-center items-center text-white">
            <span className="text-blue-800 font-bold">B.K.B</span>
          </div>
          <h1 className="text-2xl font-bold">Bidaus</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/projects" className="hover:text-gray-300 transition">Project</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
          <Link to="/bidapassions" className="hover:text-gray-300 transition">Passion</Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Overlay Background */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm transform transition-transform duration-300 z-50 md:hidden 
          ${isMobileMenuOpen ? "translate-x-0 bg-blue-900 bg-opacity-95" : "translate-x-full bg-blue-800"}
        `}
      >
        <button
          className="absolute top-5 right-5 text-white text-2xl"
          onClick={toggleMobileMenu}
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-start mt-20 space-y-6 px-6">
          <Link to="/" className="flex items-center text-lg" onClick={closeMenu}>
            <FaHome className="mr-3" />
            Home
          </Link>
          <Link to="/about" className="flex items-center text-lg" onClick={closeMenu}>
            <FaInfoCircle className="mr-3" />
            About
          </Link>
          <Link to="/projects" className="flex items-center text-lg" onClick={closeMenu}>
            <FaTasks className="mr-3" />
            Project
          </Link>
          <Link to="/contact" className="flex items-center text-lg" onClick={closeMenu}>
            <FaPhone className="mr-3" />
            Contact
          </Link> <Link to="/bidapassions" className="flex items-center text-lg" onClick={closeMenu}>
            <FaStar className="mr-3" />
            Passion
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
