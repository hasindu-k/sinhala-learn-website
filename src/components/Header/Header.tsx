import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 shadow-soft"></span>
            <span className="text-lg font-extrabold tracking-tight">
              SinhalaLearn
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-sky-600">
              About
            </a>
            <a href="#components" className="hover:text-sky-600">
              Components
            </a>
            <a href="#timeline" className="hover:text-sky-600">
              Timeline
            </a>
            <a href="#documents" className="hover:text-sky-600">
              Documents
            </a>
            <a href="#team" className="hover:text-sky-600">
              Team
            </a>
          </nav>
          <a href="#documents" className="btn btn-primary text-sm">
            View TAF
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
