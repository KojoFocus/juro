import { motion } from "framer-motion";
import inter1 from "../assets/inter1.png";
import inter2 from "../assets/inter2.png";
import inter3 from "../assets/inter3.png";

const mockupData = [
  {
    src: inter1,
    alt: "Story World UI",
    caption:
      "🌍 Step into the chaos. This is the live heartbeat of JURO's story universe.",
  },
  {
    src: inter3,
    alt: "Remix Engine",
    caption:
      "🧪 Remix Lab: where fans mutate narratives, mash scenes, and break canon on purpose.",
  },
  {
    src: inter2,
    alt: "Landscape Gallery",
    caption:
      "🎬 JURO in full frame. Built for vibe, powered by clout. This is the widescreen storyverse.",
  },
];

const VisualMockups = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-8 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
      >
        🎨 Visual Mockups
      </motion.h1>

      {/* Top Portraits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {mockupData.slice(0, 2).map((mockup, idx) => (
          <motion.div
            key={mockup.alt}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={mockup.src}
              alt={mockup.alt}
              className="w-full object-cover"
            />
            <div className="px-4 py-3 text-sm text-gray-300 border-t border-gray-800 bg-gray-950/60">
              {mockup.caption}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Landscape */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="max-w-6xl mx-auto bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg"
      >
        <img
          src={mockupData[2].src}
          alt={mockupData[2].alt}
          className="w-full object-cover"
        />
        <div className="px-6 py-4 text-center text-sm text-gray-300 border-t border-gray-800 bg-gray-950/60">
          {mockupData[2].caption}
        </div>
      </motion.div>
    </div>
  );
};

export default VisualMockups;
