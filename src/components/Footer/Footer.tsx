import React from "react";
import { HiExternalLink } from "react-icons/hi";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/70 dark:border-slate-700 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors">
              SinhalaLearn Research Team
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 transition-colors">
              Copyright 2026 - SLIIT
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <a
              href="#home"
              className="font-medium text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 transition-colors"
            >
              Research Site
            </a>
            <a
              href="https://sinhalalearn.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white bg-sky-600 px-3 py-1.5 rounded-md hover:bg-sky-700 transition"
            >
              Try SinhalaLearn Platform
              <HiExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
