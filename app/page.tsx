"use client";

import Link from "next/link";

/* ================= Feature Card ================= */

type FeatureCardProps = {
  title: string;
  desc: string;
  bgImage?: string; // optional because some cards may not have it
};

const FeatureCard = ({ title, desc, bgImage }: FeatureCardProps) => {
  if (bgImage) {
    return (
      <div className="group relative h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer">
        {/* Background Image */}
        <img
          src={bgImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Slight darken on hover */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>

        {/* FULL HEIGHT Sliding Panel */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-[#5A3A4E] to-[#6B4A5E]
            text-white
            p-6
            translate-y-full
            group-hover:translate-y-0
            transition-transform duration-300 ease-out
          "
        >
          <div className="h-full flex flex-col justify-end">
            <h3 className="text-xl font-semibold leading-snug">
              {title}
            </h3>

            <p className="mt-2 text-sm opacity-90 leading-relaxed">
              {desc}
            </p>

            <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-90">
              <span>Expand</span>
              <span className="text-lg">›</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Normal cards (unchanged)
  return (
    <div className="h-56 bg-white rounded-xl p-6 shadow-md border border-gray-200 flex flex-col justify-end">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  );
};


/* ================= Home Page ================= */

export default function HomePage() {
  return (
    <div className="bg-[#F5F8FF]">

      {/* Hero Section */}
      <section className="w-full bg-[#0A1B32] text-white py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video/home-page.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#0A1B32]/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-2xl font-bold leading-tight whitespace-nowrap">
              Digital Transformation. Delivered with Precision.
            </h1>

            <p className="mt-4 text-sm opacity-70">
              DigiHelic empowers enterprises with AI, Cloud, DevOps, Data & ERP
              solutions — engineered for scale, security, and future readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Why DigiHelic */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-10 text-center text-blue-900">
            Why DigiHelic: Your Modern Technology Partner
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Future-ready solutions",
                desc: "AI, Cloud, DevOps, Data",
                bgImage: "/Future-ready%20solutions.png",
              },
              {
                title: "Global Delivery Model",
                desc: "India, UAE, USA, Canada",
                bgImage: "/Global%20Delivery%20Model.png",
              },
              {
                title: "Certified Experts",
                desc: "SAP, Oracle, Salesforce, Azure, AWS, GCP",
                bgImage: "/Certified%20Experts.png",
              },
              {
                title: "Enterprise Security",
                desc: "Cloudflare Zero Trust + SOC2",
                bgImage: "/Enterprise%20Security.png",
              },
            ].map((card, i) => (
              <FeatureCard
                key={i}
                title={card.title}
                desc={card.desc}
                bgImage={card.bgImage}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
