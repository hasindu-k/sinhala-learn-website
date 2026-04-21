import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="domain"
      className="py-12 md:py-16 border-t border-slate-200/70 dark:border-slate-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Domain
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
          Include the complete research background and methodology details in
          this section.
        </p>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              Literature Survey
            </h3>

            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Placeholder (required): Add key papers, findings, and prior
              Sinhala education AI studies.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Gap
            </h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              Placeholder (required): State what existing systems miss and why
              your solution is needed.
            </p>

            <h3 className="mt-6 font-semibold text-slate-900 dark:text-white">
              Research Problem and Objectives
            </h3>
            <ul className="mt-3 grid sm:grid-cols-1 gap-3 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500"></span>
                <span>
                  Placeholder (required): Write a clear problem statement.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"></span>
                <span>
                  Placeholder (required): Add main and sub objectives.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-6 shadow-soft border border-slate-200/60 bg-white dark:bg-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white">
                Methodology and Technologies
              </h3>

              <dl className="mt-3 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Workflow
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Placeholder (required): Add architecture summary.
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Tech Stack
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Placeholder (required): Add module-wise technologies.
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Data Sources
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Placeholder (required): Add dataset/source details.
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400">
                    Validation
                  </dt>
                  <dd className="font-semibold dark:text-slate-100">
                    Placeholder (required): Add evaluation plan.
                  </dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="tag">Placeholder</span>
                <span className="tag">Research Methods</span>
                <span className="tag">Architecture</span>
                <span className="tag">Technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
