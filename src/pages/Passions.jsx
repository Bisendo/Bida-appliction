import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaThumbsUp, FaHeart, FaMusic, FaBook, FaCode, FaCamera, FaPaintBrush, FaArrowUp } from "react-icons/fa";
import Navbar from "../Components/Navibar";

// Array of passions with icons and extra details
const passions = [
  { 
    icon: <FaHeart className="text-red-500" size={50} />, 
    title: "Love & Relationships", 
    desc: "Building meaningful connections, spreading love, and fostering compassion." 
  },
  { 
    icon: <FaMusic className="text-blue-500" size={50} />, 
    title: "Music", 
    desc: "Exploring rhythms, melodies, and beats that move the soul, from classical to contemporary." 
  },
  { 
    icon: <FaBook className="text-green-500" size={50} />, 
    title: "Reading", 
    desc: "Diving into stories, knowledge, self-improvement, and new perspectives." 
  },
  { 
    icon: <FaCode className="text-purple-500" size={50} />, 
    title: "Coding", 
    desc: "Creating amazing digital experiences through code, tackling challenges with logic." 
  },
  { 
    icon: <FaCamera className="text-yellow-500" size={50} />, 
    title: "Photography", 
    desc: "Capturing moments and turning them into timeless memories through the lens." 
  },
  { 
    icon: <FaPaintBrush className="text-orange-500" size={50} />, 
    title: "Art & Creativity", 
    desc: "Expressing ideas, emotions, and stories through visual arts and creative mediums." 
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
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
        <Navbar />
      </nav>
      <div className="pt-20 pb-12 px-6 flex flex-col items-center">
        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 p-8 rounded-lg shadow-xl mb-8 max-w-lg mx-auto text-center">
          <h1 className="text-5xl font-bold text-white">Passions & Interests</h1>
          <p className="text-lg text-white mt-4">Exploring the things that fuel my soul and creativity.</p>
        </div>
        
        {/* Passion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
              <h2 className="text-2xl font-semibold text-gray-700">{passion.title}</h2>
              <p className="text-gray-600">{passion.desc}</p>
              <div className="flex justify-center space-x-4 mt-4">
                {/* Like Button */}
                <button 
                  onClick={() => handleLike(index)} 
                  className={`text-red-500 ${liked[index] ? 'text-red-600' : 'text-gray-500'}`}
                >
                  {liked[index] ? <FaHeart size={20} /> : <FaThumbsUp size={20} />}
                </button>
                {/* Learn More Button */}
                <button 
                  onClick={() => handleLearnMore(index)} 
                  className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
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
          className="fixed bottom-5 right-5 bg-yellow-400 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition duration-500 ease-in-out"
        >
          <FaArrowUp size={30} />
        </button>
      )}

      {/* Modal for Learn More */}
      {showModal && selectedPassion && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-3xl font-bold text-gray-700">{selectedPassion.title}</h2>
            <p className="text-lg text-gray-600 mt-4">{selectedPassion.desc}</p>
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
