import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-transparent dark:from-slate-900/70 dark:to-transparent transition-colors"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Section */}
          <div>
            <span className="tag">IT4010 Research Project | SLIIT</span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              SinhalaLearn: AI‑Powered Assistant for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--grad)" }}
              >
                Sinhala Resources
              </span>
            </h1>

            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
              Bridging the digital gap in Sri Lankan education through a robust
              AI ecosystem. Our research introduces a framework for processing
              low-resource Sinhala resources, featuring accent-adaptive voice
              interaction, hybrid OCR for handwriting, and explainable automated
              grading.
            </p>

            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                <span>
                  <strong>Hybrid OCR:</strong> Tesseract, YOLOv8 & TrOCR for
                  sinhala resources
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>
                  <strong>Adaptive RAG:</strong> Grade-level specific syllabus
                  Q&A
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                <span>
                  <strong>Voice AI:</strong> Southern dialect normalization
                  layer
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                <span>
                  <strong>Answer Evaluation:</strong> Deterministic answer
                  evaluation
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip bg-slate-900 text-white dark:bg-slate-200 dark:text-slate-900">
                RAG
              </span>
              <span className="chip bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                pgvector
              </span>
              <span className="chip bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                Sinhala OCR
              </span>
              <span className="chip bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                Tesseract, TrOCR & YOLOv8
              </span>
              <span className="chip bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                Explainable AI
              </span>
              <span className="chip bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                Automated Grading
              </span>
              <span className="chip bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
                Whisper Fine-tuning
              </span>
              <span className="chip bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                Accent Adaptation
              </span>
              <span className="chip bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                Low-Resource AI
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://sinhalalearn.online"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary dark:btn-primary-dark"
              >
                Try SinhalaLearn Platform
              </a>
              <a href="#domain" className="btn btn-ghost dark:btn-ghost-dark">
                View Domain
              </a>
            </div>
          </div>

          {/* Right Section Container */}
          <div className="relative flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto w-[300px] h-[600px]">
                {/* Main Phone Mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-700 overflow-hidden">
                  <div className="bg-white h-full overflow-hidden">
                    <img
                      src="learning-mode-ui.jpg"
                      alt="SinhalaLearn Learning Mode Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Card 1: Hybrid Recognition (Top Left) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-16 top-12 bg-white/95 dark:bg-slate-800/95 backdrop-blur shadow-xl p-3 w-48 rounded-2xl border border-white/20 z-10"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414L14.586 4H9z" />
                        <path d="M5 8a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V14H5V8z" />
                      </svg>
                    </div>
                    <span className="font-bold text-xs text-slate-900 dark:text-slate-100 transition-colors">
                      Hybrid Recognition
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Printed & handwritten document analysis
                  </p>
                </motion.div>

                {/* Card 2: Dialect Aware (Top Right) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  className="absolute -right-16 top-32 bg-white/95 dark:bg-slate-800/95 backdrop-blur shadow-xl p-3 w-48 rounded-2xl border border-white/20 z-10"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="font-bold text-xs text-slate-900 dark:text-slate-100 transition-colors">
                      Dialect Aware
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Southern accent normalization layer
                  </p>
                </motion.div>

                {/* Card 3: Grounded Responses (Middle Left) */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className="absolute -left-20 bottom-44 bg-white/95 dark:bg-slate-800/95 backdrop-blur shadow-xl p-3 w-48 rounded-2xl border border-white/20 z-10"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-sky-100 dark:bg-sky-900/30 rounded-lg flex items-center justify-center text-sky-600 dark:text-sky-400 text-sm">
                      🛡️
                    </div>
                    <span className="font-bold text-xs text-slate-900 dark:text-slate-100 transition-colors">
                      Grounded Responses
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Hallucination-free RAG architecture
                  </p>
                </motion.div>

                {/* Card 4: Adaptive Summary (Bottom Right) */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                  className="absolute -right-12 bottom-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur shadow-xl p-3 w-48 rounded-2xl border border-white/20 z-10"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 text-sm">
                      📝
                    </div>
                    <span className="font-bold text-xs text-slate-900 dark:text-slate-100 transition-colors">
                      Explainable Evaluation
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                    Deterministic scoring & concept coverage
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
