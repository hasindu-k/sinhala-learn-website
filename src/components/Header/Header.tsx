import React, { useState, useEffect } from "react";
import { ThemeToggle } from "../ThemeToggle";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const sections = ["about", "components", "timeline", "documents", "team"];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200/60 dark:border-slate-700/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <button className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 shadow-soft"></span>
            <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
              SinhalaLearn
            </span>
          </button>

          <div className="flex items-center gap-4">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`relative pb-1 transition text-slate-700 dark:text-slate-300 ${
                    activeSection === id
                      ? "active-link"
                      : "hover:text-sky-600 dark:hover:text-sky-400"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </nav>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-2 pb-4 text-sm border-t border-slate-200 dark:border-slate-700 pt-4">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative pb-1 text-slate-700 dark:text-slate-300 ${
                  activeSection === id
                    ? "active-link"
                    : "hover:text-sky-600 dark:hover:text-sky-400"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a href="#documents" className="btn btn-primary text-sm">
              View Documents
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
