import React from "react";

const presentationSlots = [
  { title: "Proposal Presentation", link: "#" },
  { title: "Progress Presentation 1", link: "#" },
  { title: "Progress Presentation 2", link: "#" },
  { title: "Final Presentation", link: "#" },
  { title: "Extra Demonstration Materials", link: "#" },
  { title: "Backup Space for New Uploads", link: "#" },
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
          Slides section with reserved blocks for future uploads.
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentationSlots.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl p-6 border border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/70 transition-colors"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 transition-colors">
                Placeholder (required): Add slide or file link.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;
