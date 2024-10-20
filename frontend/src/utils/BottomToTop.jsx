import { useState, useEffect } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

const BottomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Track scroll position and calculate scroll progress
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable area
    const scrolled = (scrollTop / docHeight) * 100; // Percentage scrolled

    setScrollProgress(scrolled);

    // Show the button when the user scrolls down 300px
    if (scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Button will be visible when isVisible is true */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-7 md:bottom-9 right-2 md:right-4 lg:right-5 z-50 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-500 flex items-center justify-center border border-blue-500 bg-secondary"
          style={{
            background: `conic-gradient(rgba(var(--background-blue)) ${scrollProgress}%, rgba(var(--background-primary)) ${scrollProgress}%)`, // Progress bar as button border
          }}
        >
          <MdOutlineArrowUpward className="w-4 h-4 animate-bounce text-textPrimary" />
        </button>
      )}
    </div>
  );
};

export default BottomToTop;
