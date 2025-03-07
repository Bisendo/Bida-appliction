import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navibar";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaArrowUp } from "react-icons/fa";
import teamMember1 from "../assets/images/08.jpg";
import teamMember2 from "../assets/images/pro.png";
import image1 from "../assets/images/01.jpg";
import image2 from "../assets/images/02.jpg";
import image3 from "../assets/images/03.jpg";
import image4 from "../assets/images/04.jpg";
import image5 from "../assets/images/05.jpg";
import image6 from "../assets/images/06.jpg";
import universityImage from "../assets/images/university.png"; // University image for the carousel

const About = () => {
  const backgrounds = [image1, image2, image3, image4, image5, image6];
  const [currentBackground, setCurrentBackground] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Background Image Cycle
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  useEffect(() => {
    // Scroll Indicator
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-purple-50 relative">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-teal-600 to-purple-600 shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url(${backgrounds[currentBackground]})`,
          backgroundPositionY: `${scrollY * 0.5}px`,
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-md animate-fadeIn">
            About <span className="text-yellow-400">Bida App</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-100 drop-shadow-sm animate-fadeInDelay">
            Bida App is revolutionizing product management, making it easier
            for businesses to organize, showcase, and sell their products.
          </p>
          <a
            href="/projects"
            className="mt-6 sm:mt-8 inline-block bg-yellow-400 hover:bg-yellow-500 text-purple-800 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Explore Project
          </a>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8">
          Our Mission & Vision
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
          Bida App is committed to empowering businesses with seamless product
          management tools that enhance efficiency and drive growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide businesses with an intuitive platform for managing
              and promoting their products effortlessly.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading product management solution that transforms
              how businesses operate in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {[
            {
              name: "Bidaus Kimoto Bisendo",
              role: "CEO & Founder",
              image: teamMember1,
              description:
                "Bidaus is a visionary entrepreneur leading Bida App towards success with innovation and strategy.",
            },
            {
              name: "Bidaus Kimoto Bisendo",
              role: "CTO & Lead Developer",
              image: teamMember2,
              description:
                "Bidaus is the technical brain behind Bida App, ensuring seamless functionality and scalability.",
            },
          ].map((team, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105"
            >
              <img
                src={team.image}
                alt={team.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">{team.name}</h3>
              <p className="text-gray-600">{team.role}</p>
              <p className="text-gray-500 mt-4">{team.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-8">
          My Education
        </h2>
        <div className="flex flex-col items-center">
          {/* University Image */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105 mb-8">
            <img
              src={universityImage}
              alt="University of Dar es Salaam"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              University of Dar es Salaam
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              I hold a certificate in Computer Science from the University of Dar es Salaam, where I gained a strong foundation in programming and software development. Currently, I am pursuing a Diploma in Computer Science at the same institution to further deepen my knowledge and skills in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-teal-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-xl font-semibold mb-4">Follow Bida App</h4>
          <div className="flex justify-center space-x-4">
            {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
              <a
                key={index}
                href="https://wa.me/255747617575"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-purple-800 p-3 rounded-full shadow-lg transition duration-300"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default About;