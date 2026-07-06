"use client";

import { useState } from "react";

const javaServices = [
  {
    number: "01",
    title: "Java Application Design and Development",
    desc: "Build secure, scalable, and high-performance Java applications tailored to your business processes, users, and long-term technology goals.",
  },
  {
    number: "02",
    title: "Java Testing and Quality Assurance",
    desc: "Improve reliability with functional testing, API testing, performance testing, regression testing, and quality assurance practices.",
  },
  {
    number: "03",
    title: "Java Application Maintenance",
    desc: "Keep applications stable and future-ready through issue resolution, framework upgrades, performance optimization, monitoring, and enhancements.",
  },
  {
    number: "04",
    title: "Enterprise Integration and APIs",
    desc: "Connect Java applications with ERP, CRM, databases, cloud services, third-party APIs, and enterprise platforms.",
  },
  {
    number: "05",
    title: "Cloud-Native Java Solutions",
    desc: "Modernize enterprise applications with microservices, APIs, containers, cloud-ready architecture, and scalable backend systems.",
  },
  {
    number: "06",
    title: "Legacy Java Modernization",
    desc: "Upgrade legacy Java applications, improve architecture, adopt modern frameworks, and enhance maintainability and performance.",
  },
];

const benefits = [
  {
    icon: "⚡",
    title: "Increased Performance",
    desc: "Optimized Java applications designed for speed, stability, and smooth performance under demanding workloads.",
  },
  {
    icon: "↗",
    title: "Scalability",
    desc: "Flexible architecture that grows with your users, data, systems, and business requirements.",
  },
  {
    icon: "✓",
    title: "Reliability",
    desc: "Robust architecture, coding standards, testing, and monitoring for consistent application performance.",
  },
  {
    icon: "🛡",
    title: "Application Security",
    desc: "Secure coding practices, data protection, access controls, and compliance-focused development.",
  },
];

export default function JavaServicesPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // This currently shows a frontend success message.
    // Connect this form to your backend API later to send enquiries by email.
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#071b3d] py-20 text-white md:py-24">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-red-500 blur-3xl" />
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-[min(1180px,calc(100%-40px))] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>

            <h1 className="max-w-3xl !text-[30px] font-black !leading-[1.12] tracking-tight md:!text-[38px] lg:!text-[35px]">
              Java Application Development for{" "}
              <span className="text-red-400">Modern Enterprises</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              DigiHelic delivers secure, scalable, and high-performance Java
              solutions for businesses that need reliable enterprise
              applications, APIs, cloud-ready systems, and long-term technical
              support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="rounded-lg bg-red-500 px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-1 hover:bg-red-600"
              >
                Talk to Java Experts
              </a>

              <a
                href="#java-services"
                className="rounded-lg border border-white/40 bg-white/5 px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>


        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>


            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              Enterprise Java Solutions Built Around Your Business
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Java is one of the world & apos;s most widely used enterprise
              programming technologies, known for its reliability, security,
              cross-platform compatibility, and scalability.
            </p>

            <p>
              DigiHelic helps organizations build, modernize, integrate, and
              maintain Java applications that support critical business
              operations. From tailored application development to cloud-based
              infrastructure and enterprise integration, we deliver solutions
              aligned with your business requirements.
            </p>

            <p>
              Java is an open-source and versatile platform that helps
              businesses develop cost-effective, robust, and future-ready
              applications without compromising on performance or reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="java-services" className="bg-[#f5f8fc] py-16 md:py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <div className="max-w-3xl">

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              Complete Java Development Services
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We provide support throughout the complete Java application
              lifecycle, from planning and architecture to development,
              testing, deployment, maintenance, and continuous improvement.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {javaServices.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-sm font-black text-red-500">
                  {service.number}
                </span>

                <h3 className="mt-5 text-xl font-black leading-snug text-[#102850]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why DigiHelic */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <div className="text-center">
            <p className="text-xs font-extrabold tracking-[0.2em] text-red-500">
              WHY DIGIHELIC
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#102850] md:text-5xl">
              Built for Performance, Reliability and Growth
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
              Our experience enables us to build intuitive, secure, and
              business-ready Java solutions that work smoothly across devices,
              operating systems, and enterprise environments.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-[#fbfdff] p-6 text-center transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-2xl text-white shadow-lg shadow-red-200">
                  {benefit.icon}
                </div>

                <h3 className="mt-5 text-lg font-black text-[#102850]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {benefit.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Tags */}
      <section className="bg-[#102850] py-14 text-white">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
          <p className="text-center text-xs font-extrabold tracking-[0.2em] text-red-300">
            JAVA TECHNOLOGY EXPERTISE
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {[
              "Java",
              "Spring Boot",
              "Microservices",
              "REST APIs",
              "Cloud-Native Apps",
              "Enterprise Integration",
              "Application Modernization",
              "Maintenance & Support",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-bold text-slate-100"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-[#f5f8fc] py-16 md:py-20">
        <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              Let & apos;s Build Your Java Solution
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Tell us about your application development, modernization,
              integration, or support requirement. Our Java experts will help
              you identify the right solution.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-red-500 bg-white p-6 shadow-sm">
              <p className="font-bold text-[#102850]">
                Need Java application support?
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                We support design and development, testing, maintenance,
                modernization, enterprise integrations, APIs, and cloud-ready
                Java applications.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,45,87,0.10)] md:p-9">
            <h3 className="text-2xl font-black text-[#102850]">
              Send Your Requirement
            </h3>

            {submitted && (
              <div className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
                Thank you. Your Java service enquiry has been submitted.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-[#102850]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#102850]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[#102850]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your Java requirement"
                  required
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-red-500 focus:ring-4 focus:ring-red-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:bg-red-600"
              >
                Send <span className="text-lg">→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}