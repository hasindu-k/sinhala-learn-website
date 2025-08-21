import React, { useState, useEffect } from "react";
import "./Header.css";

const sections = ["about", "components", "timeline", "documents", "team"];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

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
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 shadow-soft"></span>
            <span className="text-lg font-extrabold tracking-tight">
              SinhalaLearn
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative pb-1 transition ${
                  activeSection === id ? "active-link" : "hover:text-sky-600"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-sky-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-2 pb-4 text-sm border-t border-slate-200 pt-4">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`relative pb-1 ${
                  activeSection === id ? "active-link" : "hover:text-sky-600"
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
