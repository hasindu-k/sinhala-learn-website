import React from "react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 transition-colors">
          Contact Us
        </h2>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <article className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-colors">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 transition-colors">
              Contact Information
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 transition-colors">
              Phone: Placeholder (required)
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors">
              Email: Placeholder (required)
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors">
              Address: Placeholder (required)
            </p>
            <div className="mt-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-600 p-3 text-xs text-slate-600 dark:text-slate-300 transition-colors">
              Placeholder (optional): Add social links or office hours.
            </div>
          </article>

          <article className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-colors">
            <h3 className="font-bold text-slate-900 dark:text-slate-100 transition-colors">
              Contact Form Template
            </h3>
            <form className="mt-4 space-y-3">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors">
                Full Name
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors">
                Email
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors">
                Message
                <textarea
                  placeholder="Write your message"
                  className="mt-1 w-full min-h-28 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                />
              </label>

              <button
                type="button"
                className="btn btn-primary dark:btn-primary-dark"
              >
                Send Message (Template)
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
