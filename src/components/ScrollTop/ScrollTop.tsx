import { useEffect, useState } from "react";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showScrollTop) {
    return null;
  }

  return (
    <div className="scroll-top-container fixed bottom-6 right-6">
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default ScrollTop;
