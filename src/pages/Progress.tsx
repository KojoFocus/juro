import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Put mockup first
const progressItems = [
  "🎨 Visual mockups developed",
  "✅ Pilot script completed",
  "📄 Business plan finalized",
  "🌀 Provisional logo + brand identity in place",
];

const Progress = () => {
  const navigate = useNavigate();
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleMockupClick = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => navigate("/mockups"), 200); // slight delay for glow effect
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
      >
        This is our <span className="text-indigo-500">Progress</span>
      </motion.h1>

      <ul className="space-y-6 max-w-2xl w-full mb-12">
        {progressItems.map((item, index) => {
          const isMockup = item.includes("🎨 Visual mockups");
          const showGlow = clickedIndex === index;

          return (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-gray-900 border border-gray-800 px-6 py-4 rounded-xl shadow-md transition ${
                showGlow ? "ring-2 ring-indigo-400 ring-opacity-40" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <span
                  onClick={
                    isMockup ? () => handleMockupClick(index) : undefined
                  }
                  className={`text-lg md:text-xl font-medium tracking-wide ${
                    isMockup
                      ? "cursor-pointer hover:underline text-indigo-400"
                      : ""
                  }`}
                >
                  {item}
                </span>

                {isMockup && (
                  <button
                    onClick={() => navigate("/mockups")}
                    className="text-sm text-white px-4 py-2 rounded-md font-medium transition bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-[length:200%_200%] animate-gradient-move hover:scale-[1.02]"
                  >
                    View
                  </button>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>

      {/* Back to Home */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="text-white px-6 py-3 rounded-xl font-medium transition bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-[length:200%_200%] animate-gradient-move hover:scale-[1.02]"
      >
        Back to Home
      </motion.button>
    </div>
  );
};

export default Progress;
