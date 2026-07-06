"use client";

import { useState } from "react";

const amsPillars = [
  {
    number: "01",
    title: "Seamless Operations",
    description:
      "Keep business platforms, applications, integrations, and support processes working together reliably across your organization.",
  },
  {
    number: "02",
    title: "Full Integration",
    description:
      "Connect multi-vendor CRM, CMS, ERP, cloud, IoT, AI, and enterprise systems into one efficient ecosystem.",
  },
  {
    number: "03",
    title: "Future-Ready Solutions",
    description:
      "Prepare your applications for cloud adoption, AI-enabled operations, modern architectures, and evolving business needs.",
  },
];

const amsCapabilities = [
  {
    title: "Application Monitoring & Support",
    description:
      "Proactive monitoring, issue resolution, application health checks, and support for business-critical applications.",
    label: "24/7 Ready",
  },
  {
    title: "Multi-Vendor Application Management",
    description:
      "Unified management across applications, platforms, vendors, and teams to reduce operational complexity.",
    label: "Unified",
  },
  {
    title: "Cloud & Multi-Cloud Operations",
    description:
      "Support for cloud-native, hybrid, and multi-cloud environments with improved visibility and governance.",
    label: "Cloud",
  },
  {
    title: "Application Integration",
    description:
      "Integrate CRM, CMS, ERP, analytics, data platforms, APIs, and business applications for smoother workflows.",
    label: "Connected",
  },
  {
    title: "AI & Automation Enablement",
    description:
      "Use automation, analytics, AI, and intelligent insights to improve response times and operational efficiency.",
    label: "AI Driven",
  },
  {
    title: "Enhancement & Modernization",
    description:
      "Plan upgrades, resolve technical debt, improve user experience, and modernize applications for future growth.",
    label: "Modern",
  },
];

const applicationAreas = [
  "CRM & Customer Experience Platforms",
  "ERP & Business Operations Systems",
  "CMS & Digital Experience Platforms",
  "Cloud & Multi-Cloud Applications",
  "Enterprise Integration & APIs",
  "Data, Analytics & Reporting Systems",
  "IoT, Edge & Smart Device Platforms",
  "Custom Enterprise Applications",
];

const deliverySteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "We understand your current applications, processes, vendors, dependencies, support requirements, and business priorities.",
  },
  {
    step: "02",
    title: "Stabilize",
    description:
      "We improve application performance, resolve recurring issues, strengthen support processes, and establish operational visibility.",
  },
  {
    step: "03",
    title: "Optimize",
    description:
      "We streamline integrations, automate repetitive tasks, improve workflows, and help reduce operational complexity.",
  },
  {
    step: "04",
    title: "Innovate",
    description:
      "We prepare your application environment for AI, cloud, analytics, IoT, edge computing, and continuous modernization.",
  },
];

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

function ApplicationManagementServicesPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormStatus(
      "Thank you. Your AMS requirement has been received. Our team will contact you soon."
    );

    setFormData(initialFormData);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fb] text-[#102850]">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#07142f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(79,70,229,0.38),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.28),transparent_26%),radial-gradient(circle_at_60%_92%,rgba(14,165,233,0.2),transparent_30%)]" />

        <div className="absolute inset-0 opacity-[0.14]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
          <div>
            <p className="mb-4 text-[10px] font-extrabold tracking-[0.24em] text-emerald-300 sm:text-xs">
              APPLICATION MANAGEMENT SERVICES
            </p>

            <h1 className="max-w-3xl !text-[30px] font-black !leading-[1.12] tracking-tight text-white md:!text-[38px] lg:!text-[35px]">
              Intelligent AMS for{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Modern Digital Enterprises
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-[17px]">
              DigiHelic goes beyond traditional Application Management Services
              by combining AI, cloud, automation, analytics, and multi-vendor
              integration to keep your applications stable, connected, scalable,
              and future-ready.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-sm font-black text-emerald-300">
                  AI + Automation
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Improve support speed, insight, and operational efficiency.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-sm font-black text-sky-300">
                  Multi-Cloud Ready
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Support hybrid, cloud-native, and multi-cloud applications.
                </p>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-extrabold text-[#07142f] shadow-lg shadow-emerald-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Talk to an AMS Expert
                <span className="ml-2 text-lg" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#ams-services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-indigo-500/20 via-sky-400/10 to-emerald-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.08] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-bold text-slate-300">
                    DigiHelic AMS Framework
                  </p>
                  <p className="mt-1 text-xl font-black text-white">
                    Connected Application Ecosystem
                  </p>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 to-sky-300 text-sm font-black text-[#07142f]">
                  AMS
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-[#111f44]/80 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-bold text-slate-300">
                      Application Stability
                    </p>
                    <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-300">
                      Active
                    </span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-emerald-400 to-sky-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[#111f44]/80 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      Integration
                    </p>
                    <p className="mt-2 text-2xl font-black text-emerald-300">
                      Unified
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111f44]/80 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      Operations
                    </p>
                    <p className="mt-2 text-2xl font-black text-sky-300">
                      Smart
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111f44]/80 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      Cloud
                    </p>
                    <p className="mt-2 text-2xl font-black text-indigo-300">
                      Ready
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#111f44]/80 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      Growth
                    </p>
                    <p className="mt-2 text-2xl font-black text-emerald-300">
                      Future
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3">
                <p className="text-sm font-semibold leading-6 text-emerald-100">
                  Empowering your business for a connected future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
          <div>
            <p className="text-xs font-extrabold tracking-[0.22em] text-indigo-600">
              BEYOND TRADITIONAL AMS
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              Application Management That Drives Innovation
            </h2>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-[#f8fbff] p-6 shadow-sm sm:p-8">
            <div className="space-y-5 text-[16px] leading-8 text-slate-600">
              <p>
                Applications are now central to how organizations serve
                customers, process transactions, manage operations, collaborate,
                and make data-driven decisions. From banking and shopping to
                communication and enterprise operations, applications power the
                modern information and economic network.
              </p>

              <p>
                DigiHelic helps businesses manage this growing complexity
                through intelligent Application Management Services. We bring
                together multi-vendor applications, cloud platforms,
                integrations, support processes, automation, analytics, and
                modernization initiatives into one seamless operating model.
              </p>

              <p>
                Our focus is not limited to tickets, metrics, support, and
                SLAs. We help improve business agility, application reliability,
                operational efficiency, and readiness for the next generation of
                digital technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AMS Pillars */}
      <section className="bg-[#f4f7ff] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold tracking-[0.22em] text-indigo-600">
              HOW DIGIHELIC AMS HELPS
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              Built for Seamless Operations, Integration, and Growth
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600">
              We help your application ecosystem become more reliable,
              connected, visible, and ready for continuous business
              transformation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {amsPillars.map((pillar) => (
              <article
                key={pillar.number}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/5"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-50 transition group-hover:bg-emerald-50" />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="text-sm font-black tracking-[0.16em] text-indigo-600">
                    {pillar.number}
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-lg font-black text-indigo-600 transition group-hover:bg-emerald-100 group-hover:text-emerald-700">
                    ✓
                  </span>
                </div>

                <h3 className="relative mt-8 text-2xl font-black leading-snug text-[#102850]">
                  {pillar.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-slate-600">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seamless Operations */}
      <section id="ams-services" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-extrabold tracking-[0.22em] text-indigo-600">
              SEAMLESS OPERATION
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              Keep Your Business Applications Running Together
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              DigiHelic&apos;s Application Management Services support your
              applications from planning and implementation through customer
              service, monitoring, maintenance, enhancement, and continuous
              optimization.
            </p>

            <p className="mt-4 text-[16px] leading-8 text-slate-600">
              We help connect business applications with cloud, AI, IoT, edge
              computing, analytics, and smart systems so your teams can access
              real-time data, actionable insights, and the visibility needed to
              make better decisions.
            </p>

            <div className="mt-8 rounded-[26px] border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-lg font-black text-[#102850]">
                Your applications are the backbone of your business.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                DigiHelic helps you keep those systems stable, connected,
                secure, efficient, and ready to support future business growth.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {applicationAreas.map((area, index) => (
              <div
                key={area}
                className="rounded-[24px] border border-slate-200 bg-[#f8fbff] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-lg hover:shadow-emerald-950/5"
              >
                <p className="text-xs font-black tracking-[0.14em] text-emerald-600">
                  0{index + 1}
                </p>

                <p className="mt-4 text-base font-black leading-6 text-[#102850]">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#07142f] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[0.22em] text-emerald-300">
              DIGIHELIC AMS CAPABILITIES
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-white md:!text-[38px] lg:!text-[35px]">
              Full Integration and Intelligent Application Support
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-300">
              We manage applications as connected business systems, helping
              reduce manual work, improve reliability, streamline integrations,
              and create a better foundation for innovation.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {amsCapabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-white/[0.1]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-300 text-base font-black text-[#07142f]">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-extrabold text-emerald-200">
                    {capability.label}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-black leading-snug text-white">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Future Ready */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-700 via-[#123872] to-emerald-600 p-7 text-white shadow-2xl shadow-indigo-950/20 sm:p-9">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-emerald-300/20 blur-2xl" />

            <div className="relative">
              <p className="text-xs font-extrabold tracking-[0.22em] text-emerald-200">
                FUTURE-READY SOLUTIONS
              </p>

              <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-white md:!text-[38px] lg:!text-[35px]">
                Build an Application Environment Ready for What&apos;s Next
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-slate-100">
                Businesses are moving toward cloud-based platforms, AI-enabled
                processes, smart devices, advanced analytics, IoT, and
                multi-cloud environments. DigiHelic helps organizations manage
                this transition with a practical and scalable AMS approach.
              </p>

              <div className="mt-8 grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-2xl font-black text-emerald-200">Cloud</p>
                  <p className="mt-1 text-sm leading-6 text-slate-100">
                    Hybrid and multi-cloud readiness.
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-emerald-200">AI</p>
                  <p className="mt-1 text-sm leading-6 text-slate-100">
                    Intelligent automation and insights.
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-black text-emerald-200">Scale</p>
                  <p className="mt-1 text-sm leading-6 text-slate-100">
                    Adaptable architecture for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-extrabold tracking-[0.22em] text-indigo-600">
              BUSINESS-FOCUSED AMS
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              From Support and SLAs to Optimization and Innovation
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-slate-600">
              DigiHelic&apos;s AMS team helps you integrate and streamline your
              current applications while building readiness for modern digital
              architectures. We focus on stable operations today and better
              business possibilities tomorrow.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Less Complexity",
                  desc: "Simplify multi-vendor, multi-platform, and multi-cloud application operations.",
                },
                {
                  title: "More Agility",
                  desc: "Respond to business changes faster with connected and optimized applications.",
                },
                {
                  title: "Better Visibility",
                  desc: "Gain insight into applications, integrations, support needs, and performance.",
                },
                {
                  title: "Continuous Growth",
                  desc: "Support modernization and innovation without disrupting core operations.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-[#f8fbff] p-5 transition duration-300 hover:border-indigo-300 hover:bg-white hover:shadow-lg hover:shadow-indigo-950/5"
                >
                  <p className="text-lg font-black text-[#102850]">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="bg-[#f4f7ff] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold tracking-[0.22em] text-indigo-600">
              OUR AMS DELIVERY APPROACH
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              A Clear Path from Application Stability to Innovation
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600">
              We help organizations create an application management model that
              supports daily operations while preparing the business for future
              digital transformation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {deliverySteps.map((item) => (
              <article
                key={item.step}
                className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5"
              >
                <span className="absolute -right-2 -top-8 text-8xl font-black text-indigo-50">
                  {item.step}
                </span>

                <p className="relative text-sm font-black tracking-[0.15em] text-emerald-600">
                  {item.step}
                </p>

                <h3 className="relative mt-5 text-xl font-black text-[#102850]">
                  {item.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-[#07142f] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(79,70,229,0.28),transparent_26%),radial-gradient(circle_at_88%_82%,rgba(16,185,129,0.24),transparent_28%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10">
          <div className="py-2">
            <p className="text-xs font-extrabold tracking-[0.22em] text-emerald-300">
              UNLOCK YOUR BUSINESS POTENTIAL
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-white md:!text-[38px] lg:!text-[35px]">
              Let&apos;s Make Your Applications Work Smarter Together
            </h2>

            <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-300">
              Reach out to DigiHelic to discuss application support,
              multi-vendor integration, cloud operations, AI enablement,
              modernization, or a complete AMS strategy for your organization.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Support for core enterprise systems, applications, integrations, and digital platforms.",
                "A practical roadmap for multi-cloud, AI, automation, IoT, and modern application ecosystems.",
                "DigiHelic empowers your business for a connected future.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-xs font-black text-[#07142f]">
                    ✓
                  </span>

                  <p className="text-sm leading-6 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[30px] border border-white/10 bg-white p-6 shadow-2xl shadow-black/25 sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold tracking-[0.18em] text-indigo-600">
                  CONTACT DIGIHELIC
                </p>

                <h3 className="mt-2 text-2xl font-black text-[#102850]">
                  Discuss Your AMS Requirements
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-xl font-black text-emerald-700">
                →
              </div>
            </div>

            <div className="mt-7 grid gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-extrabold text-[#102850]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#f8fbff] px-4 py-3.5 text-sm text-[#102850] outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-extrabold text-[#102850]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your business email"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-[#f8fbff] px-4 py-3.5 text-sm text-[#102850] outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-extrabold text-[#102850]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your application management requirements"
                  required
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-[#f8fbff] px-4 py-3.5 text-sm text-[#102850] outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {formStatus ? (
                <p
                  role="status"
                  className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-700"
                >
                  {formStatus}
                </p>
              ) : null}

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#102850] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-slate-900/20 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Send Message
                <span className="ml-2 text-lg" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ApplicationManagementServicesPage;
