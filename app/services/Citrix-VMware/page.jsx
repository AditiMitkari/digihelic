"use client";

import { useState } from "react";

const citrixCapabilities = [
  {
    number: "01",
    title: "Citrix Cloud, Azure and AWS Infrastructure",
    description:
      "Build, migrate, and modernize Citrix infrastructure across Citrix Cloud, Microsoft Azure, AWS, and hybrid environments.",
  },
  {
    number: "02",
    title: "Enterprise VDI Operations",
    description:
      "Operational support for large VDI environments, including experience managing 7,000+ VDI users across multiple business locations.",
  },
  {
    number: "03",
    title: "XenDesktop Incident Resolution",
    description:
      "Troubleshoot XenDesktop issues, service incidents, user access concerns, and high-impact scenarios that affect business continuity.",
  },
  {
    number: "04",
    title: "Active-Active Site Architecture",
    description:
      "Plan and implement Active-Active XenDesktop sites to utilize resources efficiently across primary and passive data centre environments.",
  },
  {
    number: "05",
    title: "Citrix Upgrade and Platform Management",
    description:
      "Manage, maintain, and upgrade Citrix XenDesktop environments, including versions 7.6, 7.15, 1912, and 2022 with PVS components.",
  },
  {
    number: "06",
    title: "Application Delivery and NetScaler Support",
    description:
      "Support App-V application publishing, AppSense environments, policy implementation, and NetScaler URL configuration for external users.",
  },
];

const citrixServiceDetails = [
  "Citrix Cloud, Azure, AWS, and hybrid infrastructure migration",
  "Citrix XenDesktop and Virtual Desktop Infrastructure administration",
  "VDI alignment per ESXi host for efficient resource utilization",
  "Site consolidation using infrastructure servers across data centres",
  "Always-on database configuration support for high availability",
  "PVS management, vDisk creation, merging, updates, and troubleshooting",
  "Microsoft App-V 4.6 and 5.1 application packaging and publishing",
  "AppSense 8.x and 10.x administration, policies, and implementation",
  "NetScaler URL setup and troubleshooting for external user access",
];

const vmwareServices = [
  {
    title: "vCenter and ESXi Operations",
    description:
      "Operations and support for VMware vCenter, VMware platforms, and ESXi server environments.",
  },
  {
    title: "Virtual Machine Deployment",
    description:
      "Build and deploy virtual machines, templates, snapshots, cloning, and standardized VM configurations.",
  },
  {
    title: "Cluster, DRS and HA Administration",
    description:
      "Support VMware clusters, Distributed Resource Scheduler, High Availability, and Fault Tolerance configurations.",
  },
  {
    title: "Host Upgrades and Patching",
    description:
      "Plan and execute ESXi host upgrades, security patching, maintenance activities, and health validation.",
  },
  {
    title: "Storage and Datastore Management",
    description:
      "Administration of datastores, storage clusters, DRS policies, and capacity alignment across virtual infrastructure.",
  },
  {
    title: "Infrastructure Optimization",
    description:
      "Improve virtual infrastructure reliability, performance, capacity utilization, and operational visibility.",
  },
];

const deliverySteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "Review your current Citrix, VMware, cloud, VDI, and infrastructure landscape.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Create a secure migration, upgrade, consolidation, or operational support roadmap.",
  },
  {
    step: "03",
    title: "Implement",
    description:
      "Configure, migrate, upgrade, validate, and document the required environment changes.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "Provide ongoing monitoring, troubleshooting, optimization, and lifecycle support.",
  },
];

function CitrixVmwarePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect this section with your contact API when it is ready.
    setFormStatus(
      "Thank you. Your request has been received and our team will contact you soon."
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f6f9fd] text-[#102850]">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#061a36]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(59,130,246,0.28),transparent_28%),radial-gradient(circle_at_18%_80%,rgba(20,184,166,0.18),transparent_25%)]" />

        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
        </div>

        <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-10">
          <div>
            <p className="mb-4 text-[10px] font-extrabold tracking-[0.22em] text-cyan-300 sm:text-xs">
              CITRIX & VMWARE SERVICES
            </p>

            <h1 className="max-w-3xl !text-[30px] font-black !leading-[1.12] tracking-tight text-white md:!text-[38px] lg:!text-[35px]">
              Secure Virtual Workspace and{" "}
              <span className="text-cyan-300">
                Infrastructure Solutions
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-[17px]">
              DigiHelic delivers Citrix and VMware services that help
              organizations build secure, scalable, and cost-effective virtual
              infrastructure. From Citrix Cloud and VDI environments to VMware
              clusters, ESXi servers, and enterprise support, our team helps
              keep critical systems reliable and ready for growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                Citrix Cloud
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                VMware vSphere
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                VDI & End-User Computing
              </span>
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                Azure & AWS
              </span>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-extrabold text-[#06213f] shadow-lg shadow-cyan-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Talk to an Infrastructure Expert
                <span className="ml-2 text-lg" aria-hidden="true">
                  →
                </span>
              </a>

              <a
                href="#citrix-services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/35 px-6 py-3 text-sm font-extrabold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[32px] bg-cyan-400/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/25 backdrop-blur-md sm:p-7">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="text-sm font-bold text-slate-300">
                    DigiHelic Infrastructure
                  </p>
                  <p className="mt-1 text-xl font-black text-white">
                    Virtual Workspace Operations
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-xl font-black text-[#06213f]">
                  DH
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#0b2c53]/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    VDI Scale
                  </p>
                  <p className="mt-2 text-2xl font-black text-cyan-300">
                    7000+
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Users supported
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b2c53]/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Deployment
                  </p>
                  <p className="mt-2 text-2xl font-black text-cyan-300">
                    Hybrid
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Cloud-ready infrastructure
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b2c53]/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    Citrix
                  </p>
                  <p className="mt-2 text-2xl font-black text-cyan-300">
                    XD
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    XenDesktop and PVS
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b2c53]/70 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                    VMware
                  </p>
                  <p className="mt-2 text-2xl font-black text-cyan-300">
                    HA
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    DRS and fault tolerance
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <p className="text-sm font-semibold text-emerald-100">
                  Built for secure, reliable, and scalable operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-10">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0f76bc]">
              INFRASTRUCTURE EXPERTISE
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              Citrix and VMware Services for Modern Business Operations
            </h2>
          </div>

          <div className="space-y-5 text-[16px] leading-8 text-slate-600">
            <p>
              Citrix and VMware services are a key part of cloud computing and
              enterprise IT infrastructure. DigiHelic helps organizations
              improve virtual workspace delivery, infrastructure performance,
              security, availability, and operational efficiency.
            </p>

            <p>
              Our experienced team supports organizations through
              infrastructure migration, platform upgrades, incident
              troubleshooting, environment consolidation, end-user computing,
              virtualization management, and ongoing operational support.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-[#f7fbff] p-4">
                <p className="text-lg font-black text-[#0f76bc]">Secure</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Infrastructure designed with access, availability, and
                  operational resilience in mind.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f7fbff] p-4">
                <p className="text-lg font-black text-[#0f76bc]">Scalable</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Flexible support for growing teams, workloads, and business
                  locations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#f7fbff] p-4">
                <p className="text-lg font-black text-[#0f76bc]">Reliable</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Practical solutions focused on continuity, performance, and
                  supportability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citrix Services */}
      <section
        id="citrix-services"
        className="bg-[#f4f8fc] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0f76bc]">
              CITRIX SERVICES
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              Citrix Solutions Built for Secure Digital Workspaces
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600">
              From Citrix Cloud migration and XenDesktop upgrades to VDI
              operations and NetScaler support, DigiHelic helps businesses
              operate reliable virtual desktop and application delivery
              environments.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {citrixCapabilities.map((item) => (
              <article
                key={item.number}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-black tracking-[0.14em] text-[#0f76bc]">
                    {item.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f5ff] text-lg font-black text-[#0f76bc] transition group-hover:bg-[#0f76bc] group-hover:text-white">
                    ✓
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black leading-snug text-[#102850]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#102850] p-6 shadow-xl sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-extrabold tracking-[0.2em] text-cyan-300">
                  EXTENDED CITRIX SUPPORT
                </p>

                <h3 className="mt-4 text-2xl font-black leading-snug text-white md:text-3xl">
                  Citrix Expertise Across Your Full Virtual Workspace
                  Environment
                </h3>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {citrixServiceDetails.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-[#102850]">
                      ✓
                    </span>

                    <p className="text-sm leading-6 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VMware Services */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="rounded-[30px] bg-gradient-to-br from-[#083261] via-[#0c568e] to-[#0d8fa2] p-7 text-white shadow-2xl sm:p-9">
            <p className="text-xs font-extrabold tracking-[0.2em] text-cyan-200">
              VMWARE SERVICES
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-white md:!text-[38px] lg:!text-[35px]">
              Reliable Virtual Infrastructure for Critical Workloads
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-cyan-50">
              DigiHelic provides VMware operations, support, administration,
              deployment, cluster management, upgrade planning, and
              virtualization optimization for enterprise environments.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/20 pt-6">
              <div>
                <p className="text-3xl font-black text-cyan-200">vCenter</p>
                <p className="mt-1 text-sm text-cyan-50">
                  Centralized virtual infrastructure administration and support.
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-cyan-200">DRS + HA</p>
                <p className="mt-1 text-sm text-cyan-50">
                  Improved workload availability, balancing, and failover
                  readiness.
                </p>
              </div>

              <div>
                <p className="text-3xl font-black text-cyan-200">ESXi</p>
                <p className="mt-1 text-sm text-cyan-50">
                  Host upgrade, patching, maintenance, and platform support.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {vmwareServices.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-[#fbfdff] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0f76bc] hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f5ff] text-lg font-black text-[#0f76bc]">
                  ↗
                </div>

                <h3 className="mt-5 text-lg font-black leading-snug text-[#102850]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="bg-[#eef6fc] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold tracking-[0.2em] text-[#0f76bc]">
              OUR DELIVERY APPROACH
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-[#102850] md:!text-[38px] lg:!text-[35px]">
              From Infrastructure Assessment to Ongoing Support
            </h2>

            <p className="mt-5 text-[16px] leading-8 text-slate-600">
              We follow a clear approach that helps reduce operational risk,
              align technology with business needs, and support smooth
              infrastructure delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {deliverySteps.map((item) => (
              <article
                key={item.step}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="absolute -right-1 -top-7 text-8xl font-black text-[#edf6fc]">
                  {item.step}
                </span>

                <p className="relative text-sm font-black tracking-[0.15em] text-[#0f76bc]">
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

      {/* CTA and Contact */}
      <section id="contact" className="bg-[#071d3b] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div className="py-2">
            <p className="text-xs font-extrabold tracking-[0.2em] text-cyan-300">
              GET STARTED
            </p>

            <h2 className="mt-4 !text-[30px] font-black !leading-[1.12] tracking-tight text-white md:!text-[38px] lg:!text-[35px]">
              Let&apos;s Build a More Reliable Infrastructure Environment
            </h2>

            <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-300">
              Talk with DigiHelic about Citrix, VMware, VDI, cloud migration,
              platform upgrades, environment support, and enterprise
              infrastructure optimization.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-[#071d3b]">
                  ✓
                </span>
                <p className="text-sm leading-6 text-slate-200">
                  Citrix Cloud, XenDesktop, PVS, App-V, AppSense, and NetScaler
                  expertise.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-[#071d3b]">
                  ✓
                </span>
                <p className="text-sm leading-6 text-slate-200">
                  VMware vCenter, ESXi, DRS, HA, Fault Tolerance, and datastore
                  administration.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-[#071d3b]">
                  ✓
                </span>
                <p className="text-sm leading-6 text-slate-200">
                  Flexible engagement for migration, upgrades, operations, and
                  ongoing support.
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] bg-white p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold tracking-[0.18em] text-[#0f76bc]">
                  CONTACT DIGIHELIC
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#102850]">
                  Discuss Your Requirements
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8f5ff] text-xl font-black text-[#0f76bc]">
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
                  className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-4 py-3.5 text-sm text-[#102850] outline-none transition placeholder:text-slate-400 focus:border-[#0f76bc] focus:ring-4 focus:ring-blue-100"
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
                  className="w-full rounded-xl border border-slate-200 bg-[#fbfdff] px-4 py-3.5 text-sm text-[#102850] outline-none transition placeholder:text-slate-400 focus:border-[#0f76bc] focus:ring-4 focus:ring-blue-100"
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
                  placeholder="Tell us about your Citrix or VMware requirements"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#fbfdff] px-4 py-3.5 text-sm text-[#102850] outline-none transition placeholder:text-slate-400 focus:border-[#0f76bc] focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {formStatus ? (
                <p
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-700"
                >
                  {formStatus}
                </p>
              ) : null}

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0f76bc] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#0b5f9d]"
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

export default CitrixVmwarePage;
