import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaArrowUp, FaUser, FaCog, FaBriefcase } from "react-icons/fa";
import Navbar from "../Components/Navibar";
import heroImage from "../assets/images/04.jpg";

const ProjectPage = () => {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  // Handle visibility of scroll to top button
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsTopVisible(true);
    } else {
      setIsTopVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggle the visibility of completed projects
  const toggleProjectVisibility = () => {
    setIsProjectsVisible(!isProjectsVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // List of completed projects
  const completedProjects = [
    { title: "Uzanow webApp", description: "A social networking app for professionals. You can view it here:", url: "https://test-application-psi.vercel.app/", icon: <FaUser size={28} /> },
    { title: "Murimi WebApp", description: "A web app for farmers to manage their agricultural activities. You can view it here:", url: "https://mrimi-ukoo-frontend.vercel.app/", icon: <FaCog size={28} /> },
    { title: "Bida webApp", description: "A product management application to streamline business operations. You can view it here:", url: "https://bida-appliction.vercel.app/", icon: <FaBriefcase size={28} /> },
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-teal-50">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-700 to-teal-700 shadow-md">
        <Navbar />
      </div>

      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg mt-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-70 rounded-lg"></div>
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
            Hello! I am Bidaus
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fadeIn animate-delay-1000">
            Seamlessly manage your projects with our innovative platform.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 gap-4">
            <a
              href="/about"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-yellow-400 text-purple-800 rounded-full shadow-lg transform hover:scale-110 transition duration-300 animate-zoomIn"
            >
              Learn More About BidaApp
            </a>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-800 mb-6">
          Welcome to BidaApp
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          BidaApp helps individuals and teams stay organized and on track with their tasks. It offers an intuitive user interface, project management tools, and real-time collaboration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project Features */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              Task Management
            </h3>
            <p className="text-gray-600 mb-4">
              Stay on top of your tasks with real-time updates, reminders, and deadlines.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              Collaboration
            </h3>
            <p className="text-gray-600 mb-4">
              Collaborate with teammates, assign tasks, and track progress in real-time.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-purple-800 mb-4">
              Reporting
            </h3>
            <p className="text-gray-600 mb-4">
              Get insights into your work through automated reports and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-teal-50">
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-800 mb-6 text-center">
          Completed Projects
        </h2>
        {/* Toggle Button */}
        <div className="text-center mb-8">
          <button
            onClick={toggleProjectVisibility}
            className="bg-yellow-400 text-purple-800 py-2 px-6 rounded-full text-lg font-semibold transform hover:scale-110 transition duration-300"
          >
            {isProjectsVisible ? "Hide Projects" : "Show Projects"}
          </button>
        </div>

        {/* Conditionally render the project list */}
        {isProjectsVisible && (
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              {completedProjects.map((project, index) => (
                <li key={index} className="bg-white shadow-lg rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    {project.icon}
                    <h3 className="text-2xl font-semibold text-purple-800">{project.title}</h3>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-yellow-400 text-purple-800 py-2 px-6 rounded-full text-lg font-semibold transform hover:scale-110 transition duration-300"
                  >
                    Visit Site
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-teal-700 text-white py-6 mt-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Social Media Links */}
            <div className="flex space-x-4 justify-center sm:justify-start mb-6 sm:mb-0">
              <a
                href="https://wa.me/255747617575"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://wa.me/255747617575"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/255747617575"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>

            {/* About Us Section */}
            <div>
              <h4 className="text-xl font-semibold ">About Us</h4>
              <p className="text-white text-sm">
                BidaApp is your go-to platform for seamless project management and team collaboration.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold ">Contact Us</h4>
              <p className="text-white text-sm">
                Email: kimotobisendo@gmail.com <br />
                Phone: +255 747 617 575
              </p>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-white my-4"></div>

          {/* Copyright Section */}
          <div className="text-center text-white mt-4">
            <p>&copy; 2025 BidaApp. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 bg-yellow-400 text-purple-800 p-4 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ProjectPage;