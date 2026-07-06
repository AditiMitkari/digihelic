"use client";

import { useState } from "react";

const openPositions = [
  "SAP SAC Consultant",
  "SAP Native HANA Consultant",
  "SAP Group Reporting Consultant",
  "SAP BW/4HANA Consultant",
  "SAP Hybris Consultant",
  "SAP Project Manager",
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Frontend success message only.
    // Connect this form with your backend API later to save/send applications.
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031329] via-[#082d61] to-[#031329] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(25,166,255,0.28),transparent_28%),radial-gradient(circle_at_15%_88%,rgba(0,91,187,0.28),transparent_32%)]" />

        <div className="relative mx-auto w-[min(1180px,calc(100%-40px))]">
          <p className="mb-3 text-xs font-extrabold tracking-[0.2em] text-sky-300">
            CAREERS AT DIGIHELIC
          </p>

          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            Build the Future with{" "}
            <span className="text-sky-400">DigiHelic</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            Join a team of enterprise technology experts, innovators, and
            problem-solvers helping businesses transform through SAP, cloud,
            AI, product engineering, and digital solutions.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Open Positions */}
        <div>
          <p className="mb-3 text-xs font-extrabold tracking-[0.18em] text-sky-600">
            CAREER OPPORTUNITIES
          </p>

          <h2 className="text-3xl font-black tracking-tight text-[#0b1e3a] md:text-4xl">
            Open Job Positions
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Explore opportunities to work on enterprise technology projects,
            SAP transformation, cloud platforms, AI solutions, and global
            delivery engagements.
          </p>

          <div className="mt-8 space-y-4">
            {openPositions.map((position) => (
              <button
                type="button"
                key={position}
                onClick={() => {
                  setSelectedJob(position);
                  setSubmitted(false);

                  document
                    .getElementById("career-application-form")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className={`group flex w-full items-center justify-between rounded-2xl border p-5 text-left transition-all duration-200 ${
                  selectedJob === position
                    ? "border-sky-500 bg-sky-50 shadow-md"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
                }`}
              >
                <div>
                  <h3 className="text-base font-extrabold text-[#0b1e3a]">
                    {position}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Apply now and become part of DigiHelic.
                  </p>
                </div>

                <span className="text-2xl font-light text-sky-600 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div
          id="career-application-form"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,45,87,0.10)] md:p-9"
        >
          <p className="text-xs font-extrabold tracking-[0.18em] text-sky-600">
            APPLY NOW
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0b1e3a]">
            Upload Your CV
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Complete the form below and our recruitment team will contact you
            if your profile matches an available opportunity.
          </p>

          {submitted && (
            <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
              Your application has been submitted successfully.
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
                htmlFor="jobPosition"
                className="mb-2 block text-sm font-bold text-[#0b1e3a]"
              >
                Job Position
              </label>

              <select
                id="jobPosition"
                name="jobPosition"
                value={selectedJob}
                onChange={(event) => setSelectedJob(event.target.value)}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              >
                <option value="">Select job position</option>

                {openPositions.map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="cv"
                className="mb-2 block text-sm font-bold text-[#0b1e3a]"
              >
                Please Upload Your CV
              </label>

              <input
                id="cv"
                name="cv"
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={(event) => {
                  setSelectedFileName(event.target.files?.[0]?.name || "");
                }}
                className="block w-full cursor-pointer rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-sky-600 file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:file:bg-sky-700"
              />

              <p className="mt-2 text-xs text-slate-500">
                {selectedFileName
                  ? `Selected file: ${selectedFileName}`
                  : "Accepted formats: PDF, DOC, DOCX"}
              </p>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#087ded] px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-[#0569ca]"
            >
              Send Application <span className="text-lg">→</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}