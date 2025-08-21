import React from "react";
import { teamMembers, supervisors } from "../../data";
import "./Team.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Team: React.FC = () => {
  return (
    <section id="team" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Research Team
        </h2>

        {/* Team Members */}
        <h3 className="text-xl font-bold mt-8">Team Members</h3>
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 bg-white border border-slate-200/70 flex flex-col items-center text-center overflow-hidden"
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
                className="h-48 w-48 rounded-full object-cover shadow-md"
              />

              <h3 className="font-bold mt-6">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.role}</p>

              {/* Links */}
              <div className="flex gap-4 mt-4">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-slate-500 hover:text-emerald-600"
                  >
                    <FaEnvelope size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-600"
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Supervisors */}
        <h3 className="text-xl font-bold mt-12">Supervisors</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-6">
          {supervisors.map((sup, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 bg-white border border-slate-200/70 w-64 flex flex-col items-center text-center"
            >
              <img
                src={sup.image ? sup.image : "images/member.png"}
                alt={sup.name}
                className="h-48 w-48 rounded-full object-cover shadow-md mb-4"
              />

              <h3 className="font-bold">{sup.name}</h3>
              <p className="text-sm text-slate-600">{sup.role}</p>

              <div className="flex gap-4 mt-4">
                {sup.email && (
                  <a
                    href={`mailto:${sup.email}`}
                    className="text-slate-500 hover:text-emerald-600"
                  >
                    <FaEnvelope size={20} />
                  </a>
                )}
                {sup.linkedin && (
                  <a
                    href={sup.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-emerald-600"
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
