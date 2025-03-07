import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaTasks, FaInfoCircle, FaPhone, FaStar, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside or navigating
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-purple-600 text-white shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Animation */}
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-yellow-400 rounded-full flex justify-center items-center text-white shadow-md hover:shadow-lg transition-shadow animate-bounce">
            <span className="text-teal-800 font-bold text-xl">B.K.B</span>
          </div>
          <h1 className="text-2xl font-bold hover:text-yellow-400 transition-colors">
            Bidaus
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors text-lg font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-400 transition-colors text-lg font-medium"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-yellow-400 transition-colors text-lg font-medium"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-400 transition-colors text-lg font-medium"
          >
            Contact
          </Link>
          <Link
            to="/bidapassions"
            className="hover:text-yellow-400 transition-colors text-lg font-medium"
          >
            Passion
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none hover:text-yellow-400 transition-colors"
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
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gradient-to-b from-teal-700 to-purple-700 transform transition-transform duration-300 z-50 md:hidden 
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          className="absolute top-5 right-5 text-white text-2xl hover:text-yellow-400 transition-colors"
          onClick={toggleMobileMenu}
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-start mt-20 space-y-8 px-8">
          <Link
            to="/"
            className="flex items-center text-xl hover:text-yellow-400 transition-colors"
            onClick={closeMenu}
          >
            <FaHome className="mr-3" />
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center text-xl hover:text-yellow-400 transition-colors"
            onClick={closeMenu}
          >
            <FaInfoCircle className="mr-3" />
            About
          </Link>
          <Link
            to="/projects"
            className="flex items-center text-xl hover:text-yellow-400 transition-colors"
            onClick={closeMenu}
          >
            <FaTasks className="mr-3" />
            Projects
          </Link>
          <Link
            to="/contact"
            className="flex items-center text-xl hover:text-yellow-400 transition-colors"
            onClick={closeMenu}
          >
            <FaPhone className="mr-3" />
            Contact
          </Link>
          <Link
            to="/bidapassions"
            className="flex items-center text-xl hover:text-yellow-400 transition-colors"
            onClick={closeMenu}
          >
            <FaStar className="mr-3" />
            Passion
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;