import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaArrowUp } from "react-icons/fa";
import Navbar from "../Components/Navibar"; // Import Navbar component
import mapImage from "../assets/images/map.png"; // Import map image

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-purple-50 relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-teal-600 to-purple-600 shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="mt-">
        <section
          id="home"
          className="relative bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] "
          style={{ backgroundImage: `url(${mapImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
              Contact Bida Support
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 animate-fadeIn animate-delay-1000">
              We're here to help you!
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-6 text-center bg-white shadow-lg rounded-lg mx-4 mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions or need help? Reach out to Bida Support using the form below or the provided details.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Headquarters</h3>
              <p className="text-gray-600">014 Makumbusho Kenya Street, Dar es Salaam, Tanzania</p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Support Phone</h3>
              <p className="text-gray-600">+255 747 617 575</p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Support Email</h3>
              <p className="text-gray-600">kimotobisendo@gmail.com</p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6">Send Us a Message</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-800 py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-purple-800 p-4 rounded-full shadow-lg transition-transform duration-300"
        >
          <FaArrowUp size={24} />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-600 to-purple-600 text-white py-12 mt-16 text-center">
        <div className="flex justify-center space-x-6">
          <a href="https://wa.me/255747617575" className="text-white hover:text-yellow-400 transition-colors">
            <FaFacebook size={24} />
          </a>
          <a href="https://wa.me/255747617575" className="text-white hover:text-yellow-400 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/255747617575" className="text-white hover:text-yellow-400 transition-colors">
            <FaTwitter size={24} />
          </a>
          <a href="https://wa.me/255747617575" className="text-white hover:text-yellow-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="mt-4">&copy; 2025 Bida App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;