import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Activity, Menu, X } from "lucide-react";

const NavBar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path: string) =>
    `group flex items-center gap-2 transition-all duration-300 py-2 md:py-0 border-b-2 border-transparent hover:border-indigo-500 ${
      pathname === path
        ? "text-indigo-500 font-semibold border-indigo-500"
        : "text-gray-300"
    }`;

  return (
    <nav className="w-full bg-gray-950 border-b border-gray-800 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold tracking-tight">JURO</h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-sm md:text-base">
        <Link to="/" className={linkClass("/")}>
          {" "}
          <Home className="w-4 h-4" /> Home{" "}
        </Link>
        <Link to="/story" className={linkClass("/story")}>
          {" "}
          <BookOpen className="w-4 h-4" /> Story World{" "}
        </Link>
        <Link to="/progress" className={linkClass("/progress")}>
          {" "}
          <Activity className="w-4 h-4" /> Progress{" "}
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden focus:outline-none"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-gray-950 border-t border-gray-800 flex flex-col space-y-4 px-6 py-4 md:hidden">
          <Link
            to="/"
            className={linkClass("/")}
            onClick={() => setOpen(false)}
          >
            <Home className="w-4 h-4" /> Home
          </Link>
          <Link
            to="/story"
            className={linkClass("/story")}
            onClick={() => setOpen(false)}
          >
            <BookOpen className="w-4 h-4" /> Story World
          </Link>
          <Link
            to="/progress"
            className={linkClass("/progress")}
            onClick={() => setOpen(false)}
          >
            <Activity className="w-4 h-4" /> Progress
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
