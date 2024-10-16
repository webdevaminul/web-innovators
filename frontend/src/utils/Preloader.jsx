import { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setFadeOut(true); // Start fade out animation
      const removePreloaderTimeout = setTimeout(() => {
        setLoading(false);
      }, 1000); // Duration for fade-out

      return () => clearTimeout(removePreloaderTimeout); // Clear timeout on component unmount
    }, 300); // Preloader duration

    return () => clearTimeout(fadeTimeout); // Clear the timeout on component unmount
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-bg transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

export default Preloader;
