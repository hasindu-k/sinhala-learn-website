import React from "react";
import { teamMembers, supervisors } from "../../data";
import "./Team.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Team: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 team-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">
          Research Team
        </h2>
        {/* Supervisors */}
        <h3 className="text-xl font-bold mt-12 text-slate-900 dark:text-slate-100 transition-colors">
          Supervisors
        </h3>

        <div
          id="supervisors"
          className="mt-4 flex flex-wrap justify-center gap-6"
        >
          {supervisors.map((sup, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 w-64 flex flex-col items-center text-center transition duration-500 hover:rotate-1 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              <img
                src={sup.image ? sup.image : "images/member.png"}
                alt={sup.name}
                loading="lazy"
                className="h-48 w-48 rounded-full object-cover shadow-md mb-4"
              />

              <h3 className="font-bold text-slate-900 dark:text-slate-100 transition-colors">
                {sup.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors">
                {sup.role}
              </p>

              <div className="flex gap-4 mt-4">
                {sup.email && (
                  <a
                    href={`mailto:${sup.email}`}
                    className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                  >
                    <FaEnvelope size={20} />
                  </a>
                )}
                {sup.linkedin && (
                  <a
                    href={sup.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Team Members */}
        <h3 className="text-xl font-bold mt-8 text-slate-900 dark:text-slate-100 transition-colors">
          Team Members
        </h3>
        <div
          id="team"
          className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 flex flex-col items-center text-center overflow-hidden transition duration-500 hover:rotate-1 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
            >
              {/* Corner Ribbon */}
              {member.isLeader && (
                <div className="absolute top-3 right-[-40px] rotate-45 bg-emerald-600 text-white text-xs font-semibold px-12 py-1 shadow-md">
                  Leader
                </div>
              )}

              <img
                src={member.image ? member.image : "images/member.png"}
                alt={member.name}
                loading="lazy"
                className="h-48 w-48 rounded-full object-cover shadow-md"
              />

              <h3 className="font-bold mt-6 text-slate-900 dark:text-slate-100 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors">
                {member.role}
              </p>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                  >
                    <FaEnvelope size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
