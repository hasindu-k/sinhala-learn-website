import React from "react";
import { documents } from "../../data";
import "./Documents.css";

const Documents: React.FC = () => {
  const statusColors = {
    completed: { bg: "bg-emerald-100", text: "text-emerald-700" },
    "in-progress": { bg: "bg-amber-100", text: "text-amber-700" },
    planned: { bg: "bg-slate-100", text: "text-slate-700" },
  };

  return (
    <section
      id="documents"
      className="py-12 md:py-16 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Documents
          </h2>
          <span className="text-xs text-slate-500">Last updated: today</span>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <a
              key={index}
              className={`group rounded-2xl p-6 border border-slate-200/70 ${
                index === 0 ? "bg-slate-50 hover:bg-slate-100" : ""
              } transition`}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold">{doc.title}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    statusColors[doc.status].bg
                  } ${statusColors[doc.status].text}`}
                >
                  {doc.fileType}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{doc.description}</p>
              <p className="mt-3 text-xs text-slate-500 group-hover:text-slate-700">
                {doc.status === "completed"
                  ? "Open document →"
                  : doc.status === "in-progress"
                  ? "Coming soon"
                  : "Pending"}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
