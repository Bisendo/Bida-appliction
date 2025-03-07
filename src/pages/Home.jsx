import React, { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "../Components/Navibar";
import image1 from "../assets/images/01.jpg";
import image2 from "../assets/images/02.jpg";
import image3 from "../assets/images/03.jpg";
import image4 from "../assets/images/04.jpg";
import image5 from "../assets/images/05.jpg";
import image6 from "../assets/images/06.jpg";

const Home = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);
  const backgroundImages = [image1, image2, image3, image4, image5, image6];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowTopButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md animate-fadeInDown">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgroundImages[currentBackground]})`,
          backgroundPositionY: `${scrollY * 0.5}px`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-md animate-fadeIn">
            Welcome to <span className="text-blue-300">Bida App</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-100 drop-shadow-sm animate-fadeInDelay">
            Explore new opportunities and connect with amazing people.
          </p>
          <a
            href="/projects"
            className="mt-6 sm:mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Scroll-to-Top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <p className="text-sm">&copy; 2023 Bida App. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-black transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-600 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;