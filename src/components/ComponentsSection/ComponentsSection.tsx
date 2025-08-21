import React from "react";
import { projectComponents } from "../../data";
import "./ComponentsSection.css";

const ComponentsSection: React.FC = () => {
  return (
    <section
      id="components"
      className="py-12 md:py-16 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Project Components
          </h2>
          <span className="text-xs text-slate-500">
            Mapped to team responsibilities
          </span>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectComponents.map((component, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 border border-slate-200/70 bg-slate-50 hover:bg-slate-100 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <h3 className="font-bold">{component.title}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {component.description}
              </p>
              <div className="mt-4 text-xs text-slate-500">
                Lead: <span className="font-semibold">{component.lead}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
