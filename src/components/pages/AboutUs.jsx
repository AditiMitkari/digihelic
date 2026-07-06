"use client";

import React from "react";
import Link from "next/link";

export default function AboutUs() {
  const stats = [
    { value: "250+", label: "Global Clients", icon: "🌐" },
    { value: "150+", label: "Industry Experts", icon: "👥" },
    { value: "500+", label: "Projects Delivered", icon: "📋" },
    { value: "10+", label: "Years of Experience", icon: "🏅" },
    { value: "20+", label: "Countries Served", icon: "🤝" },
  ];

  const whyChoose = [
    {
      title: "Global Clients",
      desc: "We work with clients across regions and industries, solving real business challenges with reliable technology solutions.",
      icon: "🌍",
    },
    {
      title: "Industry Experts",
      desc: "Our team brings deep industry knowledge and technical experience to build practical and scalable modern solutions.",
      icon: "👨‍💻",
    },
    {
      title: "Complete Solutions",
      desc: "We provide end-to-end services from consulting and implementation to integration, support, and maintenance.",
      icon: "🧩",
    },
    {
      title: "Client Centric",
      desc: "We focus on building long-term partnerships and delivering solutions that create measurable business value.",
      icon: "🛡️",
    },
  ];

  return (
    <main className="about-page">
      {/* HERO */}
      <section
        className="about-hero"
        style={{
          height: "220px",
          minHeight: "320px",
          backgroundImage:
            'linear-gradient(90deg, rgba(2, 13, 31, 0.92) 0%, rgba(2, 13, 31, 0.72) 42%, rgba(2, 13, 31, 0.25) 100%), url("/Images/About Us.png")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container hero-grid">
          <div className="hero-left">
           
            <p>
              We turn ideas into practical digital solutions that drive business
              growth.
            </p>
            <span>
              DigiHelic empowers organizations with modern, scalable, and
              enterprise-grade technology solutions.
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="intro-section">
        <div className="container intro-grid">
          <div className="intro-image">
            <img
              src="/Images/About us 2nd image.png"
              alt="DigiHelic global consulting and enterprise technology"
            />
          </div>

          <div className="intro-content">

            <h2 className="!text-[20px] md:!text-[28px] lg:!text-[25px] !leading-[1.12] whitespace-nowrap">
              More Than a Software Technology Company
            </h2>
            <p>
              At DigiHelic, we help businesses transform ideas into reliable
              digital solutions. Our team works closely with organizations to
              understand their goals, challenges, and business processes.
            </p>

            <p>
              With expertise across enterprise software, SAP, Salesforce,
              Oracle, Microsoft, cloud, application development, and IT
              consulting, we deliver solutions that are practical, scalable, and
              aligned with real business needs.
            </p>

            <div className="value-row">
              <div>
                <span>🚀</span>
                <p>Transform Ideas</p>
              </div>
              <div>
                <span>⚙️</span>
                <p>Optimize Operations</p>
              </div>
              <div>
                <span>☁️</span>
                <p>Enhance Experience</p>
              </div>
              <div>
                <span>📈</span>
                <p>Drive Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <div className="stat-icon">{item.icon}</div>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TAGLINE */}
      <section className="tagline-section">
        <div className="container tagline-card">
          <div className="tagline-img">
            <img
              src="/Images/dream.png"
              alt="Innovation and technology capabilities"
            />
          </div>

          <div className="tagline-content">
            <span>“</span>
            <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]">
              You dream, and we innovate to turn your ideas into reality
            </h2>
            <p>with our technology capabilities.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-section">
        <div className="section-heading">

          <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]">
            Why Businesses Trust DigiHelic
          </h2>
        </div>

        <div className="container why-grid">
          {whyChoose.map((item) => (
            <div className="why-card" key={item.title}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership-section">
        <div className="container leadership-grid">
          <div className="leadership-content">
            <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]">
              Driven by Experience.
              <br />
              Focused on Innovation.
            </h2>
            <p>
              Our leadership team brings deep industry experience, strategic
              vision, and a strong commitment to technology-led business
              transformation.
            </p>

            <p>
              We believe in building long-term partnerships by delivering
              reliable solutions, transparent communication, and measurable
              business value.
            </p>

            <Link href="/contact" className="primary-btn">
              Learn More <span>›</span>
            </Link>
          </div>

          <div className="leadership-images">
            <img
              className="main-leader-img"
              src="/Images/Experience1.png"
              alt="DigiHelic leadership and consulting team"
            />

            <div className="side-images">
              <img
                src="/Images/Experience2 .png"
                alt="Technology team collaboration"
              />
              <img
                src="/Images/Experience3.png"
                alt="Enterprise technology partnership"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container cta-inner">
          
          <h2>Let’s Build the Future Together</h2>
          <p>
            Partner with DigiHelic and accelerate your digital transformation
            journey.
          </p>

          <div className="cta-actions">
            <Link href="/contact" className="cta-primary">
              Connect With Us
            </Link>
            <Link href="/services" className="cta-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          background: #ffffff;
          color: #0f172a;
        }

        .container {
          width: min(1160px, calc(100% - 40px));
          margin: 0 auto;
        }

        .about-hero {
          background: linear-gradient(135deg, #061a3a 0%, #082f63 100%);
          color: #ffffff;
          padding: 50px 0;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 42px;
        }

        .hero-left h1 {
          margin: 0 0 20px;
          font-size: clamp(30px, 4vw, 60px);
          line-height: 1;
          font-weight: 900;
        }

        .hero-left p {
          margin: 0 0 12px;
          max-width: 520px;
          font-size: 20px;
          line-height: 1.45;
          font-weight: 800;
        }

        .hero-left span {
          display: block;
          max-width: 500px;
          color: #d9eafe;
          font-size: 15px;
          line-height: 1.7;
        }

        .hero-right img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .intro-section {
          padding: 70px 0 36px;
          background: #ffffff;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          gap: 48px;
        }

        .intro-image img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 20px 45px rgba(15, 45, 85, 0.14);
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 12px;
          color: #2563eb;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.8px;
        }

        .intro-content h2,
        .leadership-content h2 {
          margin: 0 0 20px;
          color: #1e3a6d;
          font-size: clamp(32px, 4vw, 50px);
          line-height: 1.1;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .intro-content p,
        .leadership-content p {
          margin: 0 0 14px;
          color: #526174;
          font-size: 16px;
          line-height: 1.75;
        }

        .value-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 26px;
        }

        .value-row div {
          text-align: center;
          background: #ffffff;
          border: 1px solid #e7eef8;
          border-radius: 14px;
          padding: 18px 10px;
          box-shadow: 0 12px 28px rgba(15, 45, 85, 0.07);
        }

        .value-row span {
          display: block;
          margin-bottom: 8px;
          font-size: 24px;
        }

        .value-row p {
          margin: 0;
          color: #1e3a6d;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.3;
        }

        .stats-section {
          padding: 28px 0;
          background: #f8fbff;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid #e7eef8;
          border-radius: 16px;
          text-align: center;
          padding: 22px 12px;
          box-shadow: 0 16px 34px rgba(15, 45, 85, 0.08);
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          margin: 0 auto 10px;
          border-radius: 50%;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .stat-card h3 {
          margin: 0;
          color: #2563eb;
          font-size: 27px;
          font-weight: 900;
        }

        .stat-card p {
          margin: 4px 0 0;
          color: #526174;
          font-size: 13px;
          font-weight: 700;
        }

        .tagline-section {
          padding: 42px 0;
          background: #ffffff;
        }

        .tagline-card {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;
          gap: 34px;
          background: linear-gradient(135deg, #eef6ff, #ffffff);
          border: 1px solid #e4edfb;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 18px 42px rgba(15, 45, 85, 0.08);
        }

        .tagline-img img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 16px;
        }

        .tagline-content span {
          color: #2563eb;
          font-size: 62px;
          line-height: 0.8;
          font-weight: 900;
        }

        .tagline-content h2 {
          margin: 0 0 10px;
          color: #1e3a6d;
          font-size: clamp(26px, 3vw, 42px);
          line-height: 1.15;
          font-weight: 900;
        }

        .tagline-content p {
          margin: 0;
          color: #526174;
          font-size: 16px;
        }

        .why-section {
          padding: 70px 0;
          background: #f8fbff;
        }

        .section-heading {
          width: min(760px, calc(100% - 40px));
          margin: 0 auto 34px;
          text-align: center;
        }

        .section-heading span {
          color: #2563eb;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.7px;
        }

        .section-heading h2 {
          margin: 8px 0 0;
          color: #1e3a6d;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .why-card {
          background: #ffffff;
          border: 1px solid #e7eef8;
          border-radius: 16px;
          padding: 24px 18px;
          text-align: center;
          box-shadow: 0 18px 38px rgba(15, 45, 85, 0.08);
          transition: 0.25s ease;
        }

        .why-card:hover {
          transform: translateY(-6px);
        }

        .why-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .why-card h3 {
          margin: 0 0 10px;
          color: #1e3a6d;
          font-size: 17px;
          font-weight: 900;
        }

        .why-card p {
          margin: 0;
          color: #526174;
          font-size: 13.5px;
          line-height: 1.65;
        }

        .leadership-section {
          padding: 70px 0;
          background: #ffffff;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 44px;
          align-items: center;
        }

        .primary-btn {
          min-height: 44px;
          padding: 0 20px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          margin-top: 12px;
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(37, 99, 235, 0.25);
        }

        .leadership-images {
          display: grid;
          grid-template-columns: 1fr 170px;
          gap: 14px;
        }

        .main-leader-img,
        .side-images img {
          width: 100%;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 18px 42px rgba(15, 45, 85, 0.14);
        }

        .main-leader-img {
          height: 330px;
        }

        .side-images {
          display: grid;
          gap: 14px;
        }

        .side-images img {
          height: 158px;
        }

        .about-cta {
          padding: 68px 0;
          background:
            radial-gradient(
              circle at 18% 40%,
              rgba(37, 99, 235, 0.28),
              transparent 28%
            ),
            linear-gradient(135deg, #031225, #062f68);
          color: #ffffff;
          text-align: center;
        }

        .cta-icon {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
        }

        .cta-inner h2 {
          margin: 0 0 12px;
          font-size: clamp(30px, 4vw, 50px);
          font-weight: 900;
        }

        .cta-inner p {
          margin: 0 0 18px;
          color: #d9eafe;
          font-size: 16px;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cta-primary,
        .cta-secondary {
          min-height: 44px;
          padding: 0 20px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
        }

        .cta-primary {
          background: #ffffff;
          color: #0b3c85;
        }

        .cta-secondary {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.55);
        }

        @media (max-width: 1024px) {
          .hero-grid,
          .intro-grid,
          .tagline-card,
          .leadership-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .leadership-images {
            grid-template-columns: 1fr;
          }

          .side-images {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 28px, 1160px);
          }

          .about-hero {
            padding: 48px 0;
          }

          .hero-right img,
          .intro-image img {
            height: 250px;
          }

          .value-row,
          .stats-grid,
          .why-grid {
            grid-template-columns: 1fr;
          }

          .tagline-card {
            padding: 20px;
          }

          .side-images {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: column;
          }

          .cta-primary,
          .cta-secondary,
          .primary-btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}