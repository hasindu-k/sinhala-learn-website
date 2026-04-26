import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const contactDetails = {
    phone: "+94 77 441 1969",
    email: "miyurilokuhewage15@gmail.com",
    address: "SLIIT, New Colombo Rd, Malabe, Sri Lanka",
  };

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const isFormFilled = form.name && form.email && form.message;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...form, time: new Date().toLocaleString() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSuccess("Message sent successfully! ✅");
      setErrorMsg("");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(""), 3000);
    } catch {
      setErrorMsg("Failed to send message ❌");
      setTimeout(() => setErrorMsg(""), 3000);
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-white dark:bg-slate-900 border-t border-slate-200/70 dark:border-slate-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Get in Touch
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Have questions about our Sinhala Learning Platform? We'd love to hear
          from you.
        </p>

        <div className="mt-10 grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info Card */}
          <article className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-left">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-xl">
                    <HiPhone className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Phone
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {contactDetails.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                    <HiMail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Email
                    </p>
                    <p className="break-words text-sm text-slate-600 dark:text-slate-400">
                      {contactDetails.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
                    <HiLocationMarker className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Address
                    </p>
                    <p className="break-words text-sm text-slate-600 dark:text-slate-400">
                      {contactDetails.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Form Card */}
          <article className="lg:col-span-3 rounded-2xl p-8 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 shadow-sm transition-colors">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
              Send us a Message
            </h3>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-4">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-1.5 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </label>

                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="mt-1.5 w-full min-h-[150px] rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm focus:ring-2 focus:ring-sky-500 outline-none transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </label>

              <button
                type="submit"
                disabled={loading || !isFormFilled}
                className={`w-full py-3 rounded-xl font-bold text-white transition-all ${
                  loading || !isFormFilled
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-sky-600 hover:bg-sky-700 shadow-lg shadow-sky-200 dark:shadow-none"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-center text-emerald-600 font-medium text-sm mt-2">
                  {success}
                </p>
              )}
              {errorMsg && (
                <p className="text-center text-red-500 font-medium text-sm mt-2">
                  {errorMsg}
                </p>
              )}
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
