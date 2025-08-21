import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-16 border-t border-slate-200/70 dark:border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              About the Project
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              SinhalaLearn is a research initiative to build a{" "}
              <strong>localized, trustworthy</strong> AI assistant for Sri
              Lanka's Sinhala‑medium education. The system focuses on{" "}
              <strong>document processing & embeddings</strong>,{" "}
              <strong>voice/text Q&A (RAG)</strong>, and{" "}
              <strong>semantic answer evaluation</strong>, with a core design
              principle of <strong>offline usability</strong> for rural schools.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                Source‑grounded answers (zero‑hallucination goal)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>{" "}
                Sinhala OCR (printed + handwritten)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>{" "}
                Offline embeddings & search
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                Explainable grading feedback
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-6 shadow-soft border border-slate-200/60 bg-white">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Quick Facts
              </h3>
              <dl className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">Cohort</dt>
                  <dd className="font-semibold dark:text-slate-100">
                    SLIIT 2025
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">Group</dt>
                  <dd className="font-semibold dark:text-slate-100">
                    CoEAI – Centre of Excellence for AI
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">Module</dt>
                  <dd className="font-semibold dark:text-slate-100">
                    IT4010 Research Project
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Specialization
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Software Engineering
                  </dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="tag">SinhalaLearn (mobile)</span>
                <span className="tag">Flutter</span>
                <span className="tag">PyTorch</span>
                <span className="tag">Tesseract</span>
                <span className="tag">mBERT/XLM‑R</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
