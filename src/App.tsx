import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryWorld from "./pages/StoryWorld";
import Progress from "./pages/Progress";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import VisualMockups from "./pages/VisualMockups";
import HowItWorks from "./pages/HowItWorks";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<StoryWorld />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/mockups" element={<VisualMockups />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
