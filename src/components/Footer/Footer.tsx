import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center transition-colors">
            © 2025 SinhalaLearn Research Team — SLIIT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
