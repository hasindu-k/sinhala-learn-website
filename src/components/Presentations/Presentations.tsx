import React from "react";
import { HiExternalLink } from "react-icons/hi";

const presentationSlots = [
  {
    title: "Proposal Presentation",
    description: "Initial project proposal and feasibility study slides.",
    link: "https://canva.link/xmu8xzdx0zgks1o",
    status: "completed",
  },
  {
    title: "Progress Presentation 1",
    description:
      "Update on system architecture and initial implementation phases.",
    link: "https://canva.link/ewl7dwmlf65bieq",
    status: "completed",
  },
  {
    title: "Progress Presentation 2",
    description: "Demonstration of core modules and progress evaluation.",
    link: "https://canva.link/a5a6o6zs1i9l4tm",
    status: "completed",
  },
  {
    title: "Final Presentation",
    description: "Complete system showcase and final project defense.",
    link: "#",
    status: "planned",
  },
];

const Presentations: React.FC = () => {
  return (
    <section
      id="presentations"
      className="py-12 md:py-16 bg-white dark:bg-slate-900 border-t border-b border-slate-200/70 dark:border-slate-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">
          Presentations
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          Access presentation slides and demonstration materials for all project
          milestones.
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentationSlots.map((item) => (
            <article
              key={item.title}
              className={`flex flex-col h-full rounded-2xl p-6 border transition-all duration-300 ${
                item.link !== "#"
                  ? "border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 hover:shadow-md hover:border-sky-500/50"
                  : "border-dashed border-slate-300 dark:border-slate-700 bg-transparent opacity-75"
              }`}
            >
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">📊</span>
                  {item.link === "#" && (
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 transition-colors">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                {item.link !== "#" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300 transition-colors"
                  >
                    View Slides <HiExternalLink className="ml-1.5 w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-xs italic text-slate-400">
                    Links will be available after the session
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;
