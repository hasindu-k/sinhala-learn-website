import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="domain"
      className="py-12 md:py-16 border-t border-slate-200/70 dark:border-slate-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Research Domain
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          Our research addresses the critical scarcity of AI-driven educational
          tools for the Sinhala language, focusing on creating a localized
          ecosystem that supports diverse learning materials and regional
          accents.
        </p>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              Literature Survey
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Current studies in Sinhala NLP have largely focused on basic OCR
              and broad speech recognition. While models like Whisper and TrOCR
              show promise, they often struggle with the complexities of Sinhala
              ligatures and regional dialect variations. Existing educational
              frameworks remain predominantly English-centric, leaving a
              significant technological gap for Sinhala-medium students.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Gap
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Most Sinhala OCR systems fail to process handwritten classroom
              notes effectively, and voice-based tutors lack the nuance to
              handle Southern Sri Lankan accents. Furthermore, standard RAG
              pipelines often suffer from hallucinations when retrieving from
              specialized localized syllabi, and there is a lack of explainable
              automated grading for descriptive answers.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Problem and Objectives
            </h3>
            <ul className="mt-3 grid sm:grid-cols-1 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                <span>
                  <strong>Problem Statement:</strong> Providing a reliable,
                  localized AI assistant that can accurately digitize
                  handwriting, handle diverse dialects, and provide
                  hallucination-free educational support.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>
                  <strong>Main Objective:</strong> To develop a comprehensive
                  ecosystem for Sinhala education using Hybrid OCR,
                  Accent-Adaptive ASR, and Explainable AI.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                <span>
                  <strong>Sub-Objective:</strong> Achieve high-precision
                  recognition for Southern accents and establish a deterministic
                  grading engine for descriptive content.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-6 shadow-soft border border-slate-200/60 bg-white dark:bg-slate-800 transition-colors">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Methodology and Technologies
              </h3>

              <dl className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Workflow
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Hybrid OCR → RAG Pipeline → Adaptive Summarization →
                    Deterministic Scoring.
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Tech Stack
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Tesseract, YOLOv8, TrOCR, Gemini 1.5, Whisper, FastAPI,
                    pgvector.
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Data Sources
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Local Grade 10-11 Textbooks, Custom Handwritten Datasets,
                    Southern Accent Samples.
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Validation
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    WER/CER Metrics, Semantic Similarity (Cosine), and
                    Teacher-Model Correlation.
                  </dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="tag bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
                  Layout Analysis
                </span>
                <span className="tag bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                  Dialect Normalization
                </span>
                <span className="tag bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Hybrid RAG
                </span>
                <span className="tag bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
                  Deterministic Scoring
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
