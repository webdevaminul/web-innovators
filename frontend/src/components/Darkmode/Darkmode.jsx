import { useEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

export default function Darkmode() {
  // State to manage the theme and animation
  const [darkMode, setDarkMode] = useState(false);
  const [rotating, setRotating] = useState(false);

  const triggerRotationAnimation = () => {
    setRotating(true);
    // Remove animation class after animation ends
    setTimeout(() => setRotating(false), 400);
  };

  // Effect to load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    triggerRotationAnimation();
  };

  return (
    <button
      onClick={toggleTheme}
      className={`text-xl ${
        rotating ? "animate-rotate" : ""
      } p-2 text-text bg-accentOne hover:bg-accentOne/50 border border-border/25 rounded-full`}
    >
      {darkMode ? <IoMdSunny /> : <IoMdMoon />}
    </button>
  );
}
