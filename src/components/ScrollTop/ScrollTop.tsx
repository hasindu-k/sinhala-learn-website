import { useEffect, useState } from "react";
import { HiChevronUp } from "react-icons/hi";
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
        <HiChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ScrollTop;
