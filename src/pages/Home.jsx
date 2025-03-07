import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing scroll icon
import Footer from "../Components/Footer";
import Navbar from "../Components/Navibar";

// Importing multiple images
import img1 from "../assets/images/01.jpg";
import img2 from "../assets/images/02.jpg";
import img3 from "../assets/images/03.jpg";
import img4 from "../assets/images/04.jpg";
import img5 from "../assets/images/05.jpg";
import img6 from "../assets/images/06.jpg";

const images = [img1, img2, img3, img4, img5, img6];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [showScroll, setShowScroll] = useState(false); // State for scroll button visibility

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const textAnimationTimeout = setTimeout(() => {
      setAnimateText(true);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(textAnimationTimeout);
    };
  }, []);

  // Handle scroll event to show/hide the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Hero Section with increased margin */}
      <div className="mt-24 relative h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                i === index ? "opacity-100 scale-105" : "opacity-0 scale-95"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Welcome to Bida App
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl mb-6 transition-all duration-1000 delay-200 ${
              animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Discover new opportunities and connect with amazing people.
          </p>
          <a
            href="/explore"
            className="px-6 py-3 sm:px-8 sm:py-4 text-lg font-semibold bg-blue-800 text-white rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
          >
            Explore Bida App
          </a>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">Why Choose Bida App?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect</h3>
            <p className="text-gray-600">Meet and network with like-minded individuals.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Opportunities</h3>
            <p className="text-gray-600">Explore career and business opportunities.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-blue-50 transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Grow</h3>
            <p className="text-gray-600">Develop skills and knowledge through various resources.</p>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-400 text-blue-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110"
        >
          <FaArrowUp size={24} />
        </button>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
