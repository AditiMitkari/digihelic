"use client";

import { useState } from "react";

export default function RedHatExpertise() {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem((currentItem) =>
      currentItem === index ? null : index
    );
  };

  const expertiseItems = [
    {
      title: "OpenShift & Kubernetes",
      text: "Deployment, administration, performance tuning, security, compliance, and hybrid cloud integration.",
    },
    {
      title: "OpenShift Virtualization",
      text: "Installation, upgrades, platform modernization, and VMware-to-Red Hat migration support.",
    },
    {
      title: "Red Hat Enterprise Linux (RHEL)",
      text: "RHEL implementation, upgrades, infrastructure modernization, and Windows-to-RHEL migration.",
    },
    {
      title: "Cloud & AI Solutions",
      text: "Azure Red Hat OpenShift (ARO), cloud modernization, and AI/ML development on OpenShift AI.",
    },
    {
      title: "DevOps & Automation",
      text: "CI/CD pipelines, infrastructure automation, monitoring, and operational optimization.",
    },
    {
      title: "Security & Compliance",
      text: "Role-based access control, secure containerization, governance, and compliance enablement.",
    },
    {
      title: "Ansible & AI on RHEL",
      text: "Enterprise automation, streamlined operations, and AI workload optimization on RHEL.",
    },
    {
      title: "Python-based AI/ML Model Development",
      text: "Python automation, ETL pipelines, CI/CD enablement, DevOps workflows, and AI/ML development.",
    },
  ];

  const accordionItems = [
    {
      title: "Why Partner With Us?",
      points: [
        "Industry-leading expertise across OpenShift, Kubernetes, cloud, AI, and DevOps.",
        "End-to-end support from strategic consulting to full-time specialist staffing.",
        "Access to experienced engineers, architects, and Red Hat technology consultants worldwide.",
      ],
    },
    {
      title: "How We Help Red Hat",
      points: [
        "Specialized talent acquisition for OpenShift, cloud, DevOps, and AI professionals.",
        "Project-based consulting for Red Hat customer implementations and modernization initiatives.",
        "Long-term strategic partnerships that accelerate cloud, AI, and DevOps innovation.",
      ],
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f7f7f7]">

      {/* HERO SECTION */}
      <section className="p-0">
        <div className="w-full">
          <div className="relative min-h-[410px] overflow-hidden bg-[#0d0d0d] shadow-[0_20px_55px_rgba(0,0,0,0.18)] md:min-h-[455px]">
            {/* Background Image */}
            <img
              src="/Images/RedHat.jpeg"
              alt="Red Hat cloud and enterprise technology"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Full Image Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.96)_0%,rgba(8,8,8,0.90)_38%,rgba(8,8,8,0.52)_63%,rgba(8,8,8,0.10)_100%)]" />

            {/* Decorative Elements */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[58%] bg-[radial-gradient(circle_at_22%_15%,rgba(204,0,0,0.16),transparent_35%)]" />
            <div className="pointer-events-none absolute -left-24 -top-28 h-64 w-64 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#cc0000] via-[#f04444] to-transparent" />

            {/* Main Content */}
            <div className="relative z-10 mx-auto flex min-h-[410px] max-w-7xl items-center px-6 py-10 sm:px-10 md:min-h-[455px] md:px-14 lg:px-16">
              <div className="max-w-[570px]">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/25 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[#e31b23]" />

                  <span
                    className="text-[10px] font-bold tracking-[0.18em]"
                    style={{ color: "#F7B0B2" }}
                  >
                    RED HAT SOLUTIONS
                  </span>
                </div>

                <h1
                  className="mt-5 !text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12] font-bold"
                  style={{ color: "#FFFFFF" }}
                >
                  Enterprise open-source technology, built for scale.
                </h1>

                <p
                  className="mt-4 max-w-[540px] text-sm leading-relaxed md:text-base"
                  style={{ color: "#D2D2D2" }}
                >
                  DigiHelic helps organizations modernize infrastructure, automate
                  operations, and accelerate cloud-native innovation with Red Hat
                  technologies.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {["OpenShift", "RHEL", "Ansible", "Hybrid Cloud"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/20 bg-white/[0.07] px-3.5 py-2 text-[13px] font-semibold backdrop-blur-sm"
                      style={{ color: "#FFFFFF" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e31b23]/50 bg-[#e31b23]/15">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.4"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12l4 4L19 6"
                        />
                      </svg>
                    </span>

                    <span
                      className="text-[13px] font-medium"
                      style={{ color: "#E1E1E1" }}
                    >
                      Cloud-native modernization
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e31b23]/50 bg-[#e31b23]/15">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2.4"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12l4 4L19 6"
                        />
                      </svg>
                    </span>

                    <span
                      className="text-[13px] font-medium"
                      style={{ color: "#E1E1E1" }}
                    >
                      Enterprise automation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right Information Card */}
            <div className="absolute bottom-5 right-5 hidden max-w-[275px] border-l-4 border-[#e31b23] bg-[#101010]/85 px-5 py-4 shadow-xl backdrop-blur-md lg:block">
              <p
                className="text-[10px] font-bold tracking-[0.15em]"
                style={{ color: "#F0989C" }}
              >
                CLOUD-NATIVE TRANSFORMATION
              </p>

              <p
                className="mt-2 text-[16px] font-semibold leading-snug"
                style={{ color: "#FFFFFF" }}
              >
                Modernize securely.
                <br />
                Automate confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] text-[#cc0000]">
                CORE EXPERTISE
              </p>

              <h2 className="mt-4 !text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12] font-bold text-[#1b1b1b]">
                Red Hat Technology Expertise
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#666666] md:text-lg">
                From platform engineering to cloud-native modernization, our
                specialists help you implement and optimize the Red Hat
                ecosystem for long-term business value.
              </p>
            </div>

            <div className="border-l-4 border-[#cc0000] pl-4 md:max-w-[280px]">
              <p className="text-sm leading-relaxed text-[#555555]">
                Enterprise-grade implementation, automation, migration, and
                operational support.
              </p>
            </div>
          </div>

          <div className="mt-11 grid gap-5 md:grid-cols-2">
            {expertiseItems.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[20px] border border-[#dedede] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#cc0000]/45 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] sm:p-7"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-[#cc0000] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f9e8e8] text-sm font-bold text-[#c80000] transition-all duration-300 group-hover:bg-[#cc0000] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="!text-[20px] font-bold leading-snug text-[#1b1b1b]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#696969] sm:text-[15px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP SECTION */}
      <section className="bg-[#111111] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-[#f17d81]">
                PARTNERSHIP APPROACH
              </p>

              <h2
                className="mt-4 !text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12] font-bold"
                style={{ color: "#FFFFFF" }}
              >
                Empowering Red Hat with Specialized Talent & Expertise
              </h2>

              <p
                className="mt-5 max-w-xl text-base leading-relaxed md:text-lg"
                style={{ color: "#CACACA" }}
              >
                We combine technical depth, operational experience, and
                flexible engagement models to help Red Hat teams and customers
                deliver meaningful outcomes faster.
              </p>

              <div className="mt-8 h-1 w-16 rounded-full bg-[#cc0000]" />
            </div>

            <div className="space-y-4">
              {accordionItems.map((item, index) => {
                const isOpen = openItem === index;

                return (
                  <div
                    key={item.title}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                      ? "border-[#e33a40] bg-white/[0.10]"
                      : "border-white/10 bg-white/[0.04]"
                      }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                      aria-expanded={isOpen}
                    >
                      <span
                        className="text-base font-bold sm:text-lg"
                        style={{ color: "#FFFFFF" }}
                      >
                        {item.title}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 ${isOpen
                          ? "rotate-180 border-[#cc0000] bg-[#cc0000]"
                          : "bg-white/[0.06]"
                          }`}
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-3 border-t border-white/10 px-5 py-5 sm:px-6">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="flex gap-3 text-sm leading-relaxed"
                              style={{ color: "#D1D1D1" }}
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e31b23]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
