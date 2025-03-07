import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://wa.me/255747617575" className="text-3xl hover:text-blue-500 transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="https://wa.me/255747617575" className="text-3xl hover:text-green-500 transition-colors duration-300">
            <FaWhatsapp />
          </a>
          <a href="https://wa.me/255747617575" className="text-3xl hover:text-pink-500 transition-colors duration-300">
            <FaInstagram />
          </a>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-400 w-3/4 mx-auto my-8"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-xl font-semibold mb-2">About Bida App</h3>
            <p className="text-gray-300">Your go-to platform for connections and opportunities.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Features</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
            <p className="text-gray-300">Subscribe for updates and latest news.</p>
            <form className="mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-64 rounded-l-lg bg-gray-100 text-black focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-800 transition-colors duration-300 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm text-gray-300">
          <p>© 2025 Bida App | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
