import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-transparent dark:from-slate-900/70 dark:to-transparent transition-colors"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <span className="tag">IT4010 Research Project | SLIIT</span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              AI‑Powered Educational Assistant for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--grad)" }}
              >
                Sinhala Resources
              </span>
            </h1>

            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
              This page follows the planned project website structure and keeps
              reserved areas for milestones, documents, presentations, team
              details, and future updates.
            </p>

            <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-slate-100">
              Home Page Checklist
            </h3>

            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                <span>Short introduction of the project</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>Relevant graphics area (optimized images only)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                <span>Consistent navigation across sections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>Performance-friendly content layout</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900">
                RAG
              </span>

              <span className="chip bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                Sinhala OCR
              </span>

              <span className="chip bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                Embeddings
              </span>

              <span className="chip bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                Explainable AI
              </span>

              <span className="chip bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                Automated Grading
              </span>

              <span className="chip bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
                Voice AI
              </span>

              <span className="chip bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                Accent Adaptation
              </span>

              <span className="chip bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                Low-Resource AI
              </span>

              <span className="chip bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                Hallucination Detection
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#milestones"
                className="btn btn-primary dark:btn-primary-dark"
              >
                View Milestones
              </a>
              <a href="#domain" className="btn btn-ghost dark:btn-ghost-dark">
                View Domain
              </a>
            </div>
          </div>

          {/* Right Section Container */}
          <div className="relative flex flex-col gap-8">
            {/* Phone Mockup Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto w-[280px] h-[560px]">
                {/* Main Phone */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-700 overflow-hidden">
                  {/* Screen Content - Learning Mode UI */}
                  <div className="bg-white h-full overflow-hidden">
                    <img
                      src="/sinhala-learn-website/learning-mode-ui.jpg"
                      alt="SinhalaLearn Learning Mode Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Feature Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -left-12 top-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur text-slate-800 dark:text-white rounded-2xl shadow-xl p-4 w-48 border border-white/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      ✓
                    </div>
                    <span className="font-semibold text-sm">95% Accuracy</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Voice recognition
                  </p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -right-12 bottom-32 bg-white/90 dark:bg-slate-800/90 backdrop-blur text-slate-800 dark:text-white rounded-2xl shadow-xl p-4 w-48 border border-white/20"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-600 dark:text-sky-400">
                      📚
                    </div>
                    <span className="font-semibold text-sm">Offline Mode</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Learn anywhere
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
