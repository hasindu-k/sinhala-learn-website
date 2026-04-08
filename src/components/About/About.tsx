import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-16 border-t border-slate-200/70 dark:border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              About the Project
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              SinhalaLearn is an AI-driven educational system designed to
              address the limitations of existing technologies in Sinhala-medium
              education. The proposed system integrates multiple components,
              including{" "}
              <strong>document processing with semantic embedding</strong>,{" "}
              <strong>retrieval-augmented question answering (RAG)</strong>,{" "}
              <strong>voice-based interaction</strong>, and{" "}
              <strong>automated answer evaluation</strong>.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              The primary research objective is to enable{" "}
              <strong>accurate, context-aware learning support</strong> for a
              low-resource language, while ensuring{" "}
              <strong>
                explainability, reliability, and reduced hallucination in
                AI-generated outputs
              </strong>
              . The system further incorporates an{" "}
              <strong>offline-capable architecture</strong> to support
              deployment in resource-constrained educational environments.
            </p>

            {/* Contributions */}
            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Key Contributions
            </h3>

            <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                Source-grounded answer generation using a RAG pipeline
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                Hybrid Sinhala OCR supporting both printed and handwritten text
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500"></span>
                Hybrid retrieval combining BM25 keyword matching and vector
                embeddings
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></span>
                Explainable answer evaluation using semantic similarity and
                coverage scoring
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500"></span>
                Accent-adaptive Sinhala speech recognition with normalization
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-500"></span>
                Grade-level adaptive summarization for personalized learning
              </li>
            </ul>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-6 shadow-soft border border-slate-200/60 bg-white dark:bg-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Project Context
              </h3>

              <dl className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Institution
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Research Domain
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    AI for Education (EdTech)
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Core Technologies
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    NLP, OCR, Speech Recognition
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

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="tag">RAG</span>
                <span className="tag">Sinhala OCR</span>
                <span className="tag">Hybrid Retrieval</span>
                <span className="tag">Explainable AI</span>
                <span className="tag">Speech Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
