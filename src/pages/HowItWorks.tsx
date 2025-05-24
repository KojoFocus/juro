import { motion } from "framer-motion";
import { Lightbulb, Scissors, Mic2 } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
    title: "Discover",
    description:
      "Explore a world of African stories—crafted by creators, sparked by culture, and driven by emotion.",
  },
  {
    icon: <Scissors className="w-6 h-6 text-purple-400" />,
    title: "Remix",
    description:
      "Cut, clip, and rebuild scenes. JURO gives you the tools to remix with your own twist and vision.",
  },
  {
    icon: <Mic2 className="w-6 h-6 text-pink-400" />,
    title: "Influence",
    description:
      "Shape what comes next. Vote, theorize, and let your reaction guide the story’s evolution.",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        How <span className="text-indigo-500">JURO Play</span> Works
      </motion.h1>

      <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-md text-center space-y-4"
          >
            <div className="flex justify-center">{step.icon}</div>
            <h2 className="text-xl font-semibold">{step.title}</h2>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional storytelling footer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="mt-16 text-sm text-gray-500 max-w-xl text-center italic"
      >
        At JURO, you’re not just watching stories. <br />
        You’re remixing, reshaping, and writing what the future of African
        storytelling feels like. ✨
      </motion.div>
    </div>
  );
};

export default HowItWorks;
