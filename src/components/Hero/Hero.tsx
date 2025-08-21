import React, { useEffect, useState } from "react";
import { milestones } from "../../data/index";
import "./Hero.css";

const Hero: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const totalWeight = milestones.reduce((sum, m) => sum + m.weight, 0);
      const completedWeight = milestones
        .filter((m) => m.status === "completed")
        .reduce((sum, m) => sum + m.weight, 0);
      const inProgressWeight = milestones
        .filter((m) => m.status === "in-progress")
        .reduce((sum, m) => sum + m.weight * 0.5, 0);

      return Math.round(
        ((completedWeight + inProgressWeight) / totalWeight) * 100
      );
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
    <section className="relative overflow-hidden">
      {/* background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-transparent dark:from-slate-900/70 dark:to-transparent transition-colors"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <span className="tag">IT4010 Research Project – SLIIT 2025</span>

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
              Building <strong>offline‑capable</strong>,{" "}
              <strong>source‑grounded</strong> Sinhala Q&A, document processing,
              and <strong>semantic</strong> answer evaluation — tailored for Sri
              Lankan classrooms.
            </p>

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
              <span className="chip bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
                Offline‑first
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#timeline"
                className="btn btn-primary dark:btn-primary-dark"
              >
                Project Timeline
              </a>
              <a
                href="#components"
                className="btn btn-ghost dark:btn-ghost-dark"
              >
                View Components
              </a>
            </div>
          </div>

          {/* Right card */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200/60 dark:border-slate-700 bg-white dark:bg-slate-900/60 shadow-soft p-6 backdrop-blur transition-colors">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="rounded-xl p-5 bg-sky-50 dark:bg-sky-900/30 transition-colors">
                  <div className="text-3xl font-extrabold text-sky-600 dark:text-sky-300">
                    01
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-1 text-slate-600 dark:text-slate-300">
                    TAF
                  </div>
                  <div className="mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                    Completed
                  </div>
                </div>

                <div className="rounded-xl p-5 bg-indigo-50 dark:bg-indigo-900/30 transition-colors">
                  <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-300">
                    02
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-1 text-slate-600 dark:text-slate-300">
                    Proposal
                  </div>
                  <div className="mt-2 text-xs font-semibold text-amber-600 dark:text-amber-300">
                    In Progress
                  </div>
                </div>

                <div className="rounded-xl p-5 bg-fuchsia-50 dark:bg-fuchsia-900/30 transition-colors">
                  <div className="text-3xl font-extrabold text-fuchsia-600 dark:text-fuchsia-300">
                    03
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-1 text-slate-600 dark:text-slate-300">
                    Prototype
                  </div>
                  <div className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Upcoming
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl ring-soft p-4 dark:ring-soft-dark transition-colors">
                <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors">
                  Latest update:{" "}
                  <span className="font-semibold text-slate-800 dark:text-slate-100 transition-colors">
                    TAF (Topic Assessment Form) completed
                  </span>
                  . Draft proposal under review.
                </p>

                <div className="mt-3 h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden transition-colors">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 transition-colors">
                  Estimated overall progress: ~{progress}%
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
