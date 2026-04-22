import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const isFormFilled = form.name && form.email && form.message;

  const [loading, setLoading] = useState(false);

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
        {
          ...form,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccess("Message sent successfully! ✅");
      setErrorMsg("");

      setForm({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch {
      setErrorMsg("Failed to send message ❌");
      setSuccess("");

      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }

    setLoading(false);
  };

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
          {/* Contact Info */}
          <article className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-colors">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">
              Contact Information
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Phone: 077-1234567
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Email: sinhala.learn@example.com
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Address: Colombo, Sri Lanka
            </p>
          </article>

          {/* Contact Form */}
          <article className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-colors">
            <h3 className="font-bold text-slate-900 dark:text-slate-100">
              Contact Form
            </h3>

            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              noValidate
            >
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Full Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </label>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </label>

              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  className="mt-1 w-full min-h-28 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-900 dark:text-slate-100"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </label>

              <button
                type="submit"
                disabled={loading || !isFormFilled}
                className={`btn btn-primary dark:btn-primary-dark ${
                  loading || !isFormFilled
                    ? "opacity-50 cursor-not-allowed bg-gray-400 dark:bg-gray-600"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-600 text-sm mt-2">{success}</p>
              )}

              {errorMsg && (
                <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
              )}
            </form>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
