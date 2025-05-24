import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import JuroPoster from "../assets/Juro.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Web Animation */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full animate-spin-slow opacity-5 fill-none stroke-[0.3] stroke-indigo-500"
        >
          <g transform="translate(50,50)">
            {[...Array(6)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 60})`}>
                <path d="M0,0 L0,-50" />
              </g>
            ))}
            {[10, 20, 30, 40].map((r, i) => (
              <circle key={i} r={r} stroke="currentColor" strokeOpacity={0.4} />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Discover <span className="text-indigo-500">Juro Play</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            Africa’s boldest stories — remixed, reimagined, and powered by fans.
            Step into a world where you don’t just watch stories… you shape
            them.
          </p>

          <div className="flex flex-col items-center sm:flex-row justify-center md:justify-start gap-4 pt-4">
            {/* Sparkled Gradient Button */}
            <div className="sparkle-container inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/story")}
                className="text-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-xl font-medium transition bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-[length:200%_200%] animate-gradient-move hover:scale-[1.02]"
              >
                Enter Story World
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/how-it-works")}
              className="border border-gray-600 text-gray-300 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-xl hover:bg-gray-800 transition"
            >
              How it Works
            </motion.button>
          </div>
        </motion.div>

        {/* Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative w-full max-w-xs sm:max-w-sm mx-auto mt-10 md:mt-0"
        >
          <img
            src={JuroPoster}
            alt="Juro Play Cinematic Preview"
            className="rounded-2xl w-full object-cover"
          />
          <div className="absolute bottom-2 left-2 text-xs text-gray-400 italic">
            Scene preview — fully remixable 🎬
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
