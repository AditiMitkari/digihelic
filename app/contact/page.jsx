"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend success message only.
    // Connect this form to backend API later to send/store enquiries.
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#082d61] to-[#031329] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(25,166,255,0.28),transparent_28%),radial-gradient(circle_at_15%_88%,rgba(0,91,187,0.28),transparent_32%)]" />

        <div className="relative mx-auto w-[min(1180px,calc(100%-40px))]">
          <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-sky-300">
            CONTACT DIGIHELIC
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Let&apos;s Talk About Your{" "}
            <span className="text-sky-400">Project</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Connect with DigiHelic to discuss enterprise technology, SAP,
            Salesforce, Oracle, cloud, AI, product engineering, GCC, and
            digital transformation solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Contact Form */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,45,87,0.10)] md:p-9">
          <p className="text-xs font-extrabold tracking-[0.18em] text-sky-600">
            GET IN TOUCH
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1e3a]">
            Send Us a Message
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Tell us about your project, business challenge, or technology
            requirements. Our team will get back to you shortly.
          </p>

          {submitted && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
              Thank you for contacting DigiHelic. Your message has been sent
              successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold text-[#0b1e3a]"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-[#0b1e3a]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-bold text-[#0b1e3a]"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-[#0b1e3a]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project or requirement"
                required
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087ded] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-[#0569ca]"
            >
              Send Message <span className="text-lg">→</span>
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <aside className="space-y-6">
          <div className="rounded-3xl bg-[#071c3c] p-7 text-white shadow-[0_18px_45px_rgba(15,45,87,0.18)] md:p-9">
            <p className="text-xs font-extrabold tracking-[0.18em] text-sky-300">
              CONTACT INFO
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight">
              Let&apos;s Talk.
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-7">
              <div>
                <p className="font-bold text-slate-300">General Enquiry</p>
                <a
                  href="mailto:info@digihelic.com"
                  className="font-semibold text-sky-300 transition hover:text-white"
                >
                  info@digihelic.com
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-300">For Jobs</p>
                <a
                  href="mailto:jobs@digihelic.com"
                  className="font-semibold text-sky-300 transition hover:text-white"
                >
                  jobs@digihelic.com
                </a>
              </div>

              <div>
                <p className="font-bold text-slate-300">Working Hours</p>
                <p className="text-slate-100">Monday - Friday: 10:00 - 19:00</p>
                <p className="text-slate-100">Saturday - Sunday: Weekly Off</p>
              </div>
            </div>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="mb-4 text-xs font-extrabold tracking-[0.18em] text-sky-300">
                FOLLOW US
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#facebook"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-bold transition hover:border-sky-300 hover:bg-sky-400 hover:text-[#071c3c]"
                >
                  Facebook
                </a>

                <a
                  href="#twitter"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-bold transition hover:border-sky-300 hover:bg-sky-400 hover:text-[#071c3c]"
                >
                  Twitter
                </a>

                <a
                  href="#linkedin"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-bold transition hover:border-sky-300 hover:bg-sky-400 hover:text-[#071c3c]"
                >
                  LinkedIn
                </a>

                <a
                  href="#instagram"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-bold transition hover:border-sky-300 hover:bg-sky-400 hover:text-[#071c3c]"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-9">
            <p className="text-xs font-extrabold tracking-[0.18em] text-sky-600">
              VISIT US
            </p>

            <div className="mt-6 space-y-6 text-sm leading-7 text-slate-600">
              <div>
                <h3 className="font-extrabold text-[#0b1e3a]">
                  DigiHelic Solutions Pvt. Ltd.
                </h3>
                <p className="mt-1">
                  R Square Building, 1st Floor, Office #101,
                  <br />
                  Warje, Pune 411058, India
                </p>
              </div>

              <div>
                <h3 className="font-extrabold text-[#0b1e3a]">
                  DigiHelic LLC
                </h3>
                <p className="mt-1">
                  1309 Coffeen Avenue STE 1200,
                  <br />
                  Sheridan, WY 82801, USA
                </p>
              </div>

              <div>
                <h3 className="font-extrabold text-[#0b1e3a]">
                  Digi Helic Information Technology Consultants L.L.C
                </h3>
                <p className="mt-1">Port Saeed, Dubai, UAE</p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Privacy Policy */}
      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <p className="text-xs font-extrabold tracking-[0.18em] text-sky-600">
            PRIVACY POLICY
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1e3a]">
            Your Privacy Matters to Us
          </h2>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-600">
            DigiHelic Solutions Pvt. Ltd. is committed to protecting the
            privacy and security of clients, candidates, partners, and users
            across all our platforms and services, including DigiHireAI. We
            ensure responsible collection, processing, and protection of
            personal information in accordance with applicable privacy and
            security practices.
          </p>

          <a
            href="/privacy-policy"
            className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-sky-600 transition hover:text-sky-800"
          >
            Read More <span className="text-lg">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}