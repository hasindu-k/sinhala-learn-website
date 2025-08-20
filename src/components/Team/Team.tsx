import React from "react";
import { teamMembers } from "../../data";
import "./Team.css";

const Team: React.FC = () => {
  return (
    <section id="team" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Research Team
        </h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-white border border-slate-200/70"
            >
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
