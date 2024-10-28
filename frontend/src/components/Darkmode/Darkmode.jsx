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
      className={`${
        rotating ? "animate-rotate" : ""
      } h-8 w-8 sm:h-9 sm:w-9 bg-blue-500 hover:bg-blue-400 border border-borderLight rounded-full`}
    >
      {darkMode ? (
        <IoMdSunny className="m-auto text-2xl text-textWhite" />
      ) : (
        <IoMdMoon className="m-auto text-2xl text-textWhite" />
      )}
    </button>
  );
}
