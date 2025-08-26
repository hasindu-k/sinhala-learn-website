import React from "react";
import { projectComponents } from "../../data";
import "./ComponentsSection.css";

const ComponentsSection: React.FC = () => {
  return (
    <section
      id="components"
      className="py-12 md:py-16 bg-white dark:bg-slate-900 border-t border-b border-slate-200/70 dark:border-slate-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">
          Project Components
        </h2>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectComponents.map((component, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 border border-slate-200/70 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <h3 className="font-bold text-slate-900 dark:text-slate-100 transition-colors">
                {component.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 transition-colors">
                {component.description}
              </p>
              <div className="mt-4 text-xs text-slate-500 dark:text-slate-400 transition-colors">
                Lead:{" "}
                <span className="font-semibold text-slate-700 dark:text-slate-200 transition-colors">
                  {component.lead}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
