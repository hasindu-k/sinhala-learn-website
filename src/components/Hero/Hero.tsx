import React, { useEffect, useState } from "react";
import { milestones } from "../../data/index";
import "./Hero.css";

const Hero: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress calculation with a slight delay for animation
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

    // Animate progress bar
    const targetProgress = calculateProgress();
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          clearInterval(interval);
          return targetProgress;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="tag">IT4010 Research Project – SLIIT 2025</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
              AI‑Powered Educational Assistant for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--grad)" }}
              >
                Sinhala Resources
              </span>
            </h1>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Building <strong>offline‑capable</strong>,{" "}
              <strong>source‑grounded</strong> Sinhala Q&A, document processing,
              and <strong>semantic</strong> answer evaluation - tailored for Sri
              Lankan classrooms.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="chip bg-slate-900 text-white">RAG</span>
              <span className="chip bg-sky-100 text-sky-700">Sinhala OCR</span>
              <span className="chip bg-indigo-100 text-indigo-700">
                Embeddings
              </span>
              <span className="chip bg-fuchsia-100 text-fuchsia-700">
                Offline‑first
              </span>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <a href="#timeline" className="btn btn-primary">
                Project Timeline
              </a>
              <a href="#components" className="btn btn-ghost">
                View Components
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200/60 bg-white shadow-soft p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="rounded-xl p-5 bg-sky-50">
                  <div className="text-3xl font-extrabold text-sky-600">01</div>
                  <div className="text-xs uppercase tracking-wide mt-1 text-slate-600">
                    TAF
                  </div>
                  <div className="mt-2 text-xs font-semibold text-emerald-600">
                    Completed
                  </div>
                </div>
                <div className="rounded-xl p-5 bg-indigo-50">
                  <div className="text-3xl font-extrabold text-indigo-600">
                    02
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-1 text-slate-600">
                    Proposal
                  </div>
                  <div className="mt-2 text-xs font-semibold text-amber-600">
                    In Progress
                  </div>
                </div>
                <div className="rounded-xl p-5 bg-fuchsia-50">
                  <div className="text-3xl font-extrabold text-fuchsia-600">
                    03
                  </div>
                  <div className="text-xs uppercase tracking-wide mt-1 text-slate-600">
                    Prototype
                  </div>
                  <div className="mt-2 text-xs font-semibold text-slate-500">
                    Upcoming
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-xl ring-soft p-4">
                <p className="text-sm text-slate-600">
                  Latest update:{" "}
                  <span className="font-semibold text-slate-800">
                    TAF (Topic Assessment Form) completed
                  </span>
                  . Draft proposal under review.
                </p>
                <div className="mt-3 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500"
                    style={{ width: "28%" }}
                  ></div>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Estimated overall progress: ~{progress}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
