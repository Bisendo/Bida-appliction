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
    <div className="bg-gray-50 relative">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="mt-24">
        <section
          id="home"
          className="relative bg-cover bg-center h-96 rounded-lg"
          style={{ backgroundImage: `url(${mapImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
            <h1 className="text-5xl font-extrabold mb-4">Contact Bida Support</h1>
            <p className="text-lg mb-8">We're here to help you!</p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-6 text-center bg-white shadow-lg rounded-lg mx-4 mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions or need help? Reach out to Bida Support using the form below or the provided details.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-100 shadow-md rounded-lg p-6 max-w-xs">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Headquarters</h3>
              <p className="text-gray-600">014 Makumbusho Kenya Street, Dar es Salaam, Tanzania</p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-lg p-6 max-w-xs">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support Phone</h3>
              <p className="text-gray-600">+255 747 617 575</p>
            </div>
            <div className="bg-gray-100 shadow-md rounded-lg p-6 max-w-xs">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support Email</h3>
              <p className="text-gray-600">kimotobisendo@gmail.com</p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700">Full Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-4 border rounded-lg shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border rounded-lg shadow-sm"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border rounded-lg shadow-sm"
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
              className="w-full p-4 border rounded-lg shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-yellow-400 text-blue-800 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <FaArrowUp size={24} />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 mt-16 text-center">
        <div className="flex justify-center space-x-6">
          <a href="https://wa.me/255747617575" className="text-white hover:text-gray-200">
            <FaFacebook size={24} />
          </a>
          <a href="https://wa.me/255747617575" className="text-white hover:text-gray-200">
            <FaInstagram size={24} />
          </a>
          <a href="https://wa.me/255747617575" className="text-white hover:text-gray-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://wa.me/255747617575" className="text-white hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="mt-4">&copy; 2025 Bida App. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
