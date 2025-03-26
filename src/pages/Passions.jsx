import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaThumbsUp,
  FaHeart,
  FaMusic,
  FaBook,
  FaCode,
  FaCamera,
  FaPaintBrush,
  FaArrowUp,
} from "react-icons/fa";
import Navbar from "../Components/Navibar";

// Array of passions with icons and extra details
const passions = [
  {
    icon: <FaHeart className="text-red-500" size={50} />,
    title: "Happy Birthday",
    desc: "HI! BIDAUS HONGERA KWA KUONGEZA MWAKA MWINGINE.",
    detail:
      "Hongera kwa kutimiza mwaka mwingine! Hakika wewe ni mtu MUHIMU kwenye Maisha yako",
  },
  {
    icon: <FaMusic className="text-blue-500" size={50} />,
    title: "Music",
    desc: "Exploring rhythms, melodies, and beats that move the soul, from classical to contemporary.",
    detail:
      "Music is a universal language that transcends boundaries. It has the power to evoke emotions and bring people together.",
  },
  {
    icon: <FaBook className="text-green-500" size={50} />,
    title: "Reading",
    desc: "Diving into stories, knowledge, self-improvement, and new perspectives.",
    detail:
      "Books are a gateway to new worlds. They expand our horizons and help us grow intellectually and emotionally.",
  },
  {
    icon: <FaCode className="text-purple-500" size={50} />,
    title: "Coding",
    desc: "Creating amazing digital experiences through code, tackling challenges with logic.",
    detail:
      "Coding is the art of solving problems and building solutions that make life easier and more enjoyable.",
  },
  {
    icon: <FaCamera className="text-yellow-500" size={50} />,
    title: "Photography",
    desc: "Capturing moments and turning them into timeless memories through the lens.",
    detail:
      "Photography is about preserving memories and telling stories through images that speak louder than words.",
  },
  {
    icon: <FaPaintBrush className="text-orange-500" size={50} />,
    title: "Art & Creativity",
    desc: "Expressing ideas, emotions, and stories through visual arts and creative mediums.",
    detail:
      "Art is a form of self-expression that allows us to communicate our deepest thoughts and feelings.",
  },
];

const PassionList = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [liked, setLiked] = useState(new Array(passions.length).fill(false)); // Track likes for each passion
  const [showModal, setShowModal] = useState(false);
  const [selectedPassion, setSelectedPassion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLike = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index]; // Toggle like state
    setLiked(updatedLikes);
  };

  const handleLearnMore = (index) => {
    setSelectedPassion(passions[index]);
    setShowModal(true); // Show the modal with detailed info
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-teal-600 to-purple-600 shadow-lg">
        <Navbar />
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12 px-6 flex flex-col items-center">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-8 rounded-lg shadow-xl mb-8 max-w-lg mx-auto text-center transform hover:scale-105 transition duration-500 ease-in-out">
  <p className="text-lg text-white mt-4">Exploring the things that fuel my soul and creativity.</p>
</div>

        {/* Passion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {passions.map((passion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="bg-white shadow-xl rounded-xl p-8 flex flex-col items-center text-center space-y-4 cursor-pointer transform hover:shadow-2xl transition duration-500 ease-in-out"
            >
              {passion.icon}
              <h2 className="text-2xl font-semibold text-purple-800">
                {passion.title}
              </h2>
              <p className="text-gray-600">{passion.desc}</p>
              <div className="flex justify-center space-x-4 mt-4">
                {/* Like Button */}
                <button
                  onClick={() => handleLike(index)}
                  className={`${
                    liked[index] ? "text-red-600" : "text-gray-500"
                  } hover:text-red-600 transition-colors`}
                >
                  {liked[index] ? (
                    <FaHeart size={24} />
                  ) : (
                    <FaThumbsUp size={24} />
                  )}
                </button>
                {/* Learn More Button */}
                <button
                  onClick={() => handleLearnMore(index)}
                  className="py-2 px-4 bg-yellow-400 hover:bg-yellow-500 text-purple-800 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
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

      {/* Modal for Learn More */}
      {showModal && selectedPassion && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-3xl font-bold text-purple-800">
              {selectedPassion.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {selectedPassion.detail}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassionList;
