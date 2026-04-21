import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const stages = [
        { name: "Proposal", status: "completed", weight: 0.3 },
        { name: "Progress", status: "completed", weight: 0.4 },
        { name: "Final", status: "upcoming", weight: 0.3 },
      ];

      const total = stages.reduce((sum, s) => sum + s.weight, 0);

      const achieved = stages.reduce((sum, s) => {
        if (s.status === "completed") return sum + s.weight;
        if (s.status === "in-progress") return sum + s.weight * 0.5;
        return sum;
      }, 0);

      return Math.round((achieved / total) * 100);
    };

    const target = calculateProgress();

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

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

          {/* Right card */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200/60 dark:border-slate-700 bg-white dark:bg-slate-900/60 shadow-soft p-6 backdrop-blur transition-colors">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="rounded-xl p-5 bg-sky-50 dark:bg-sky-900/30 transition-colors status-card">
                  <div className="text-3xl font-extrabold text-sky-600 dark:text-sky-300">
                    01
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-1 text-slate-600 dark:text-slate-300">
                    Proposal
                  </div>
                  <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                    Completed
                  </div>
                </div>

                <div className="rounded-xl p-5 bg-indigo-50 dark:bg-indigo-900/30 transition-colors status-card">
                  <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-300">
                    02
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-1 text-slate-600 dark:text-slate-300">
                    Progress Evaluation
                  </div>
                  <div className="mt-2 text-xs font-semibold text-amber-600 dark:text-amber-300">
                    Completed
                  </div>
                </div>

                <div className="rounded-xl p-5 bg-fuchsia-50 dark:bg-fuchsia-900/30 transition-colors status-card">
                  <div className="text-3xl font-extrabold text-fuchsia-600 dark:text-fuchsia-300">
                    03
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-1 text-slate-600 dark:text-slate-300">
                    Final Evaluation
                  </div>
                  <div className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Upcoming
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl ring-soft p-4 dark:ring-soft-dark transition-colors">
                <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors">
                  Placeholder (required):{" "}
                  <span className="font-semibold text-slate-800 dark:text-slate-100 transition-colors">
                    Add project banner image or short intro video here and keep
                    total deployment asset size under 20 MB.
                  </span>
                </p>

                <div className="mt-3 h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden transition-colors">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 transition-all duration-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-105 relative group">
                  Estimated overall progress: ~{progress}%
                  <span className="absolute left-1/2 -translate-x-1/2 mt-6 w-max px-2 py-1 text-xs rounded-md bg-slate-800 text-white dark:bg-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Calculated from completed and in-progress milestones
                  </span>
                </p>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  Milestones reflect the structured evaluation process of the
                  IT4010 Research Project.
                </p>
              </div>
            </div>
          </div>
          {/* end right */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
