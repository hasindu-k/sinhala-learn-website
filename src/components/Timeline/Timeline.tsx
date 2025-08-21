import React from "react";
import { milestones } from "../../data";
import "./Timeline.css";

const Timeline: React.FC = () => {
  const statusColors = {
    completed: { bg: "bg-emerald-50", text: "text-emerald-700" },
    "in-progress": { bg: "bg-amber-50", text: "text-amber-700" },
    upcoming: { bg: "bg-slate-100", text: "text-slate-700" },
  };

  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    upcoming: "Upcoming",
  };

  return (
    <section
      id="timeline"
      className="py-12 md:py-16 bg-slate-50 timeline-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Timeline & Milestones
        </h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-white border border-slate-200/70"
            >
              <div
                className={`text-xs font-semibold ${
                  statusColors[milestone.status].text
                } ${
                  statusColors[milestone.status].bg
                } inline-block px-2 py-1 rounded-full`}
              >
                {statusLabels[milestone.status]}
              </div>
              <h3 className="mt-3 font-bold">{milestone.title}</h3>
              <p className="mt-1 text-sm text-slate-600">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
