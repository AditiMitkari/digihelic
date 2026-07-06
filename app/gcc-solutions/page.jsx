
export default function GCCBrochurePage() {
  const keyMetrics = [
    { value: "5M+", label: "STEM graduates annually in India" },
    { value: "70%", label: "Cost savings potential" },
    { value: "6–8 wks", label: "To full GCC setup" },
    { value: "24/7", label: "Business continuity" },
  ];

  const topStats = [
    { value: "25+", label: "Years engineering & delivery leadership" },
    { value: "500+", label: "Hires across global tech firms" },
    { value: "5+", label: "GCC engagements end-to-end" },
    { value: "ISO", label: "Certified quality processes" },
  ];

  const whyPoints = [
    "We own your outcomes — success is measured by your GCC's business impact, not headcount placed",
    "Practitioner-led — real operators who've built GCCs, not consultants with slide decks",
    "Proven track record with PE-backed global companies (Blackstone, Vista Equity Partners)",
    "Rapid setup (6–8 weeks) with full ownership from entity setup to steady-state",
    "Strong governance: KPIs, transfer pricing, compliance & executive reporting",
    "Scale from 0 to 150+ engineers — structured hiring with deep India market knowledge",
  ];

  const services = [
    {
      number: "01",
      title: "Outcomes & Leadership",
      text: "Leadership setup, skeletal team, delivery governance & executive alignment",
    },
    {
      number: "02",
      title: "Office & Infrastructure",
      text: "Ready offices — dedicated or shared — fit-outs, IT & connectivity from Day 1",
    },
    {
      number: "03",
      title: "Legal & Compliance",
      text: "Entity setup, payroll, DPDP Act, IP & data protection, transfer pricing & financial compliance",
    },
    {
      number: "04",
      title: "End-to-End GCC",
      text: "Strategy to steady-state — one partner, full lifecycle, outcome accountability",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Strategy",
      text: "Tailored GCC roadmap aligned to your goals, timeline & budget",
    },
    {
      number: "2",
      title: "Legal Entity",
      text: "India entity, registrations, payroll & statutory compliance",
    },
    {
      number: "3",
      title: "Location & Space",
      text: "Pune office, fit-out, IT & workplace readiness",
    },
    {
      number: "4",
      title: "Talent Acquisition",
      text: "Source, assess & onboard talent for your technical needs",
    },
    {
      number: "5",
      title: "Go-Live & Scale",
      text: "Launch, governance & scalable steady-state management",
    },
  ];

  const engagementModels = [
    {
      icon: "🔁",
      label: "MOST POPULAR",
      title: "Build · Operate · Transfer",
      text: "We build the GCC, run it to operational maturity, then transfer full control to your organisation — with governance, culture, and processes already embedded.",
      point: "Full ownership transfer at steady-state",
      dark: true,
    },
    {
      icon: "🏗️",
      label: "FULLY MANAGED",
      title: "Fully Managed Outcome",
      text: "We manage the GCC end-to-end on an ongoing basis — strategy, talent, delivery, governance and reporting — while you focus entirely on your core business.",
      point: "Accountable for business outcomes, not just operations",
      lightBlue: true,
    },
    {
      icon: "🧩",
      label: "LEAN START",
      title: "Leadership & Skeletal Setup",
      text: "Start with the right leadership and a skeletal team. We establish the foundation — entity, culture, governance — and enable your team to scale independently from a strong base.",
      point: "Right structure from day one; scale at your pace",
    },
  ];

  const cultureCards = [
    {
      icon: "🌎",
      title: "Deep Country & Skill Intelligence",
      text: "We bring genuine insight into India's talent landscape — city-by-city skill availability, compensation benchmarks, attrition patterns, and the nuances of building high-performance teams in Pune, Bangalore, Hyderabad and beyond.",
    },
    {
      icon: "🤝",
      title: "Parent Company Culture & Integration",
      text: "Your GCC must feel like an extension of your organisation, not a distant vendor. We architect culture deliberately — aligning values, communication rhythms, leadership styles, and team identity with your parent company from day one.",
    },
    {
      icon: "📋",
      title: "Local Nuances & Compliance",
      text: "India has layered statutory requirements — labour law, DPDP Act, GST, SEZ regulations, transfer pricing, and more. We navigate these with in-house expertise, so you're always compliant and never surprised.",
    },
    {
      icon: "😰",
      title: "Anxiety of a New Setup — Addressed",
      text: 'From "Will we hire the right leaders?" to "How do we handle attrition?" and "What if the culture doesn\'t fit?" — we\'ve seen every fear. Our structured approach, advisor involvement, and operational experience turn uncertainty into a clear, managed path.',
    },
  ];

  const securityCards = [
    {
      icon: "🔐",
      title: "Data Privacy & DPDP Act",
      text: "Full compliance with India's Digital Personal Data Protection Act. Data handling policies, consent frameworks, and breach response protocols built in from the start.",
    },
    {
      icon: "🛡️",
      title: "IP Protection & InfoSec",
      text: "Robust IP assignment agreements, NDAs, access controls, and information security frameworks aligned to ISO 27001. Your code and data stay yours — always.",
    },
    {
      icon: "💹",
      title: "Transfer Pricing & Financial Compliance",
      text: "Structured inter-company agreements, arm's-length pricing, and full FEMA/RBI compliance — so your GCC's financials are watertight for audits and cross-border transactions.",
    },
  ];

  const advisorStats = [
    { value: "150+", label: "Engineers scaled at India GCC" },
    { value: "US + India", label: "Cross-border leadership" },
    { value: "<2 yrs", label: "0 to full-scale GCC" },
    { value: "25+", label: "Years of leadership" },
  ];

  const advisorCards = [
    {
      title: "GCC Founding Experience",
      text: "Company registration, BOT partner selection, vendor onboarding & full team build-out",
    },
    {
      title: "Executive Governance",
      text: "Strategic alignment with US leadership, KPI reporting, budgeting & compliance oversight",
    },
    {
      title: "Cross-border Coordination",
      text: "Onsite liaison between India engineering teams and US executive management",
    },
    {
      title: "Large-scale Talent Scaling",
      text: "Hiring, mentoring & performance management across multi-org engineering teams",
    },
  ];

  const verticals = [
    {
      icon: "🏦",
      title: "FinTech & Banking",
      text: "Payments, core banking, risk engines, regulatory tech & fraud detection",
    },
    {
      icon: "🏥",
      title: "HealthTech & Pharma",
      text: "EHR platforms, clinical data, drug discovery tech & medical devices",
    },
    {
      icon: "🛒",
      title: "E-commerce & Retail",
      text: "Commerce platforms, supply chain, personalization & omnichannel ops",
    },
    {
      icon: "☁️",
      title: "SaaS & Product Engineering",
      text: "Cloud-native SaaS, microservices, platform teams & product R&D",
    },
    {
      icon: "🔬",
      title: "Engineering & R&D",
      text: "Deep tech, hardware-software, embedded systems & innovation labs",
    },
    {
      icon: "🛡️",
      title: "Insurance & BFSI",
      text: "Underwriting tech, claims automation, actuary platforms & compliance",
    },
    {
      icon: "🏭",
      title: "Manufacturing & Industrial",
      text: "IIoT, smart factory, PLM, MES systems & digital twin engineering",
    },
    {
      icon: "⚡",
      title: "Energy, Oil & Gas",
      text: "Asset management, SCADA, predictive maintenance & sustainability tech",
    },
  ];

  return (
    <main className="gcc-page">
      <section className="gcc-hero grid-bg">
        <div className="gcc-hero-inner">
          <div className="hero-left">
            <p className="eyebrow gold-dot">
              DigiHelic Solutions Pvt. Ltd — Pune, India
            </p>

            <p className="sub-kicker">DigiHelic — Build & Scale</p>

            <h1>
              <span>The GCC Blueprint</span>
              by DigiHelic
            </h1>

            <p className="hero-copy">
              We don't just advise — we{" "}
              <strong>operate with outcome-aligned commitment.</strong> Our
              practitioners have personally built and run GCCs, and we measure
              our success by the outcomes we deliver for your parent company —
              not by headcount placed.
            </p>

            <div className="hero-badge">
              ⚡ Operator-Led. Not Consultant-Led.
            </div>
          </div>

          <div className="hero-right">
            <p className="eyebrow blue">Key Metrics</p>

            <div className="metric-stack">
              {keyMetrics.map((item) => (
                <div className="metric-card" key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gold-stats">
        <div className="stats-inner">
          {topStats.map((item) => (
            <div className="top-stat" key={item.label}>
              <span>{item.value}</span>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="why-services">
        <div className="why-panel">
          <p className="eyebrow blue">Why DigiHelic</p>
          <h2>Outcome-First. Outcome-Aligned Execution.</h2>

          <div className="check-list">
            {whyPoints.map((point) => (
              <div className="check-row" key={point}>
                <span>✓</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="services-panel grid-bg">
          <p className="eyebrow blue">Our Services</p>
          <h2>What We Deliver</h2>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section grid-bg">
        <p className="eyebrow blue">Our Process</p>
        <h2>How We Deliver Your GCC</h2>

        <div className="process-line">
          {processSteps.map((step) => (
            <div className="process-step" key={step.number}>
              <div className="circle">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="engagement-section">
        <p className="eyebrow blue">Engagement Models</p>
        <h2>Choose How We Work Together</h2>

        <p className="section-lead">
          Every organisation's GCC journey is different. We offer three models
          — each with a clear outcome commitment and our full operational
          involvement. In every model, our success is aligned to yours —
          commercially realistic, operator-led, and outcome-accountable.
        </p>

        <div className="engagement-grid">
          {engagementModels.map((model) => (
            <div
              className={`engagement-card ${model.dark ? "dark" : ""} ${
                model.lightBlue ? "light-blue" : ""
              }`}
              key={model.title}
            >
              <div className="model-icon">{model.icon}</div>
              <p className="model-label">{model.label}</p>
              <h3>{model.title}</h3>
              <p>{model.text}</p>
              <div className="model-line"></div>
              <span>✦ {model.point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="commitment-banner">
        <div className="commit-icon">🤝</div>

        <div>
          <h2>Our Commitment: Outcome-Aligned Partnership</h2>

          <p>
            We align our success with your GCC's business outcomes — through
            governance, execution ownership, and measurable impact. DigiHelic
            brings{" "}
            <strong>
              practitioner-led discipline and operational accountability
            </strong>{" "}
            to every engagement. Our advisors have personally built GCCs from
            zero — and we measure our success by the{" "}
            <strong>
              business value your parent company gains
            </strong>{" "}
            from its India capability centre.
          </p>
        </div>
      </section>

      <section className="culture-section">
        <p className="eyebrow blue">Country & Culture Intelligence</p>
        <h2>We Understand What Keeps You Up at Night</h2>

        <p className="section-lead">
          Setting up in a new country — especially India — comes with real
          anxieties: cultural alignment, regulatory complexity, talent
          unpredictability, and the risk of creating a unit that never truly
          integrates with your parent organisation. We've lived these
          challenges firsthand. Here's how we address them.
        </p>

        <div className="culture-grid">
          {cultureCards.map((card) => (
            <div className="culture-card" key={card.title}>
              <div>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="security-section grid-bg">
        <p className="eyebrow blue">Security & Compliance</p>
        <h2>Data Security, Privacy & InfoSec</h2>

        <div className="security-grid">
          {securityCards.map((card) => (
            <div className="security-card" key={card.title}>
              <div>{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="advisor-section grid-bg">
        <p className="eyebrow blue">
          Advisory Board — GCC & Engineering
        </p>

        <p className="advisor-lead">
          Our advisory board brings decades of hands-on experience founding,
          scaling, and operating Global Capability Centers — including for
          organizations backed by leading private equity firms such as{" "}
          <strong>Blackstone</strong> and{" "}
          <strong>Vista Equity Partners.</strong>
        </p>

        <div className="advisor-box">
          <div className="advisor-avatar">GCC</div>

          <div className="advisor-content">
            <p className="eyebrow blue">
              GCC & Engineering Practice Advisor · 25+ Years
            </p>

            <p>
              A seasoned engineering leader with 25+ years of experience across
              India and the USA who personally incepted and scaled a 150+
              engineer Global Capability Center in Pune — managing company
              registration, BOT partner selection, vendor onboarding,
              full-scale hiring, and executive alignment with US leadership.
            </p>

            <ul>
              <li>
                → Incepted GCC for a leading USA-based Smart Access Control
                Solutions product company; scaled to{" "}
                <strong>150+ engineers</strong> (avg. 8 years experience, 7+
                skillsets) in under 2 years
              </li>

              <li>
                → Led end-to-end GCC setup for a global organization backed by{" "}
                <strong>Blackstone</strong>, a top-tier private equity firm
              </li>

              <li>
                → Prior leadership in{" "}
                <strong>
                  product engineering services & multinational R&D environments
                </strong>{" "}
                — delivering complex programs and scaling high-performance
                teams
              </li>

              <li>
                → Expertise across engineering leadership, product development,
                governance, and <strong>operational excellence</strong>
              </li>
            </ul>

            <div className="advisor-stats">
              {advisorStats.map((item) => (
                <div key={item.label}>
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>

            <div className="advisor-cards">
              {advisorCards.map((card) => (
                <div key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>

            <div className="pe-box">
              🏛️ <strong>PE-backed experience:</strong> Blackstone & Vista
              Equity Partners portfolio companies
            </div>
          </div>
        </div>
      </section>

      <section className="quote-blue">
        <span>❝</span>

        <p>
          DigiHelic brings real operator experience to your GCC journey. Our
          ability to combine strategy with execution — from entity setup to
          scaling 100+ engineers — will make a measurable difference.
        </p>
      </section>

      <section className="verticals-section grid-bg">
        <p className="eyebrow blue">Industry Verticals We Serve</p>
        <h2>Built for Your Domain</h2>

        <p className="section-lead">
          We bring deep domain awareness to every GCC engagement —
          understanding the unique compliance, talent, and engineering needs of
          your industry.
        </p>

        <div className="vertical-list">
          {verticals.map((item) => (
            <div className="vertical-card" key={item.title}>
              <div>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bottom-cta">
        <div className="testimonial">
          <span>❝</span>

          <p>
            DigiHelic made our India GCC journey seamless. From legal setup to
            hiring 80 engineers in 4 months, their end-to-end support was
            exceptional.
          </p>

          <strong>— VP Engineering, Global SaaS Company</strong>
        </div>

        <div className="ready-box">
          <h2>Ready to launch your GCC?</h2>

          <p>
            Speak with our advisors for a no-obligation consultation and a clear
            roadmap tailored to your goals.
          </p>

          <div className="contact-row">
            <span>Email</span>
            <strong>info@digihelic.com</strong>
          </div>

          <div className="contact-row">
            <span>Web</span>
            <strong>www.digihelic.com</strong>
          </div>

          <div className="contact-row">
            <span>Office</span>
            <strong>Pune, Maharashtra, India</strong>
          </div>
        </div>
      </section>

      <section className="gvc-strip">
        <span>→</span>

        <p>
          <strong>From GCC to GVC</strong> — Building GCCs to Global Value
          Centres: capability that doesn't just support your business, but
          drives strategic value for the parent company worldwide.
        </p>
      </section>

      <footer className="gcc-footer">
        <p>
          © 2026 DigiHelic Solutions Pvt. Ltd. All rights reserved. ·
          Confidential — not for redistribution
        </p>

        <strong>Building GCCs to GVCs — Global Value Centres</strong>
      </footer>

      <style>{`
        .gcc-page {
          background: #f4efe7;
          color: #031b3f;
          font-family: var(--font-manrope), "Manrope", "Inter", Arial, sans-serif;
        }

        .gcc-page *,
        .gcc-page button,
        .gcc-page input,
        .gcc-page textarea {
          font-family: inherit;
        }

        .grid-bg {
          background-color: #082857;
          background-image:
            linear-gradient(rgba(91, 160, 230, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91, 160, 230, 0.08) 1px, transparent 1px);
          background-size: 72px 72px;
        }

        .gcc-hero {
          max-width: 1360px;
          min-height: 682px;
          margin: 0 auto;
          border-radius: 6px 6px 0 0;
          overflow: hidden;
          position: relative;
          color: #ffffff;
        }

        .gcc-hero::after {
          content: "";
          position: absolute;
          right: -120px;
          bottom: -160px;
          width: 700px;
          height: 700px;
          border: 1px solid rgba(85, 160, 255, 0.16);
          border-radius: 999px;
        }

        .gcc-hero::before {
          content: "";
          position: absolute;
          right: 120px;
          bottom: -120px;
          width: 560px;
          height: 560px;
          border: 1px solid rgba(85, 160, 255, 0.13);
          border-radius: 999px;
        }

        .gcc-hero-inner {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          padding: 100px 72px;
        }

        .eyebrow {
          text-transform: uppercase;
          letter-spacing: 2.4px;
          font-size: 12px;
          line-height: 1.35;
          font-weight: 800;
          margin-bottom: 44px;
        }

        .gold-dot {
          color: #f4c520;
        }

        .gold-dot::before {
          content: "•";
          margin-right: 12px;
        }

        .blue {
          color: #70b6ff;
        }

        .sub-kicker {
          color: #d7c077;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 800;
          margin-bottom: 42px;
        }

        .gcc-hero h1 {
          font-family: inherit;
          font-size: 30px;
          line-height: 1.12;
          letter-spacing: -0.025em;
          font-weight: 800;
          margin: 0 0 36px;
          color: #ffffff;
        }

        .gcc-hero h1 span {
          display: block;
          color: #82c2ff;
          font-style: normal;
        }

        .hero-copy {
          color: #9cc9ff;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 500;
          max-width: 650px;
        }

        .hero-copy strong {
          color: #ffd33d;
          font-weight: 800;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          margin-top: 44px;
          padding: 18px 28px;
          border: 1px solid rgba(244, 197, 32, 0.35);
          background: rgba(255, 255, 255, 0.12);
          color: #ffd33d;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 800;
        }

        .metric-stack {
          display: grid;
          gap: 8px;
        }

        .metric-card {
          padding: 34px 22px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          color: white;
        }

        .metric-card h3 {
          font-family: inherit;
          font-size: 36px;
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 800;
          margin: 0 0 6px;
        }

        .metric-card p {
          color: #9cc9ff;
          margin: 0;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 600;
        }

        .gold-stats {
          max-width: 1360px;
          margin: 0 auto;
          background: #c8a321;
          padding: 28px 72px;
        }

        .stats-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }

        .top-stat {
          display: flex;
          align-items: center;
          gap: 18px;
          border-right: 1px solid rgba(0, 25, 50, 0.25);
        }

        .top-stat:last-child {
          border-right: 0;
        }

        .top-stat span {
          font-family: inherit;
          font-size: 30px;
          line-height: 1;
          letter-spacing: -0.035em;
          font-weight: 800;
        }

        .top-stat p {
          margin: 0;
          font-weight: 750;
          font-size: 14px;
          line-height: 1.45;
        }

        .why-services {
          max-width: 1360px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #f4efe7;
        }

        .why-panel {
          padding: 70px 72px;
        }

        .why-panel h2,
        .engagement-section h2,
        .culture-section h2,
        .security-section h2,
        .process-section h2,
        .verticals-section h2 {
          font-family: inherit;
          font-size: 30px;
          line-height: 1.12;
          letter-spacing: -0.025em;
          font-weight: 800;
          margin: 0 0 36px;
        }

        .check-list {
          display: grid;
          gap: 20px;
        }

        .check-row {
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .check-row span {
          background: #1263bd;
          color: #fff;
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 900;
          flex: 0 0 28px;
        }

        .check-row p {
          margin: 0;
          font-size: 16px;
          line-height: 1.6;
          font-weight: 500;
        }

        .services-panel {
          padding: 70px 50px;
          color: white;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 80px;
        }

        .service-card,
        .security-card,
        .advisor-box,
        .vertical-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(112, 182, 255, 0.22);
          border-radius: 8px;
        }

        .service-card {
          min-height: 245px;
          padding: 34px 24px;
          border-left: 5px solid #1a7ef2;
        }

        .service-card span {
          display: block;
          color: rgba(112, 182, 255, 0.35);
          font-family: inherit;
          font-size: 30px;
          line-height: 1;
          font-weight: 800;
          margin-bottom: 22px;
        }

        .service-card h3 {
          color: white;
          margin: 0 0 18px;
          font-size: 18px;
          line-height: 1.35;
          font-weight: 800;
        }

        .service-card p,
        .security-card p,
        .vertical-card p {
          color: #68b6ff;
          line-height: 1.65;
          margin: 0;
          font-size: 15px;
          font-weight: 500;
        }

        .process-section,
        .security-section,
        .advisor-section,
        .verticals-section {
          max-width: 1360px;
          margin: 0 auto;
          color: white;
          padding: 80px 72px;
        }

        .process-line {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 50px;
          margin-top: 56px;
        }

        .process-line::before {
          content: "";
          position: absolute;
          top: 34px;
          left: 50px;
          right: 50px;
          height: 1px;
          background: rgba(112, 182, 255, 0.3);
        }

        .process-step {
          position: relative;
          z-index: 2;
        }

        .circle {
          width: 68px;
          height: 68px;
          background: #155eb3;
          border: 3px solid #2e85ee;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
          font-size: 24px;
          line-height: 1;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .process-step h3 {
          font-size: 17px;
          line-height: 1.35;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .process-step p {
          color: #68b6ff;
          font-size: 15px;
          line-height: 1.6;
          font-weight: 500;
          margin: 0;
        }

        .engagement-section,
        .culture-section {
          max-width: 1360px;
          margin: 0 auto;
          background: #f4efe7;
          padding: 80px 72px;
        }

        .section-lead {
          max-width: 930px;
          color: #334965;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 500;
          margin-bottom: 44px;
        }

        .engagement-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .engagement-card {
          padding: 36px 30px;
          min-height: 390px;
          border-radius: 10px;
          border: 1px solid rgba(0, 35, 80, 0.15);
          background: #f5efe5;
        }

        .engagement-card.dark {
          background: #082857;
          color: white;
        }

        .engagement-card.light-blue {
          background: #e8f2ff;
        }

        .model-icon {
          font-size: 28px;
          margin-bottom: 34px;
        }

        .model-label {
          color: #005bd3;
          text-transform: uppercase;
          letter-spacing: 2.4px;
          font-weight: 800;
          font-size: 11px;
          line-height: 1.4;
        }

        .engagement-card.dark .model-label,
        .engagement-card.dark p {
          color: #68b6ff;
        }

        .engagement-card h3 {
          font-family: inherit;
          font-size: 20px;
          line-height: 1.3;
          letter-spacing: -0.02em;
          font-weight: 800;
          margin: 22px 0;
        }

        .engagement-card p {
          font-size: 15px;
          line-height: 1.7;
          font-weight: 500;
          color: #243c58;
        }

        .model-line {
          height: 1px;
          background: rgba(0, 35, 80, 0.18);
          margin: 24px 0;
        }

        .engagement-card span {
          color: #c8a321;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 800;
        }

        .commitment-banner {
          max-width: 1360px;
          margin: 0 auto;
          background: #123f7d;
          color: white;
          border-left: 6px solid #c8a321;
          border-bottom: 4px solid #c8a321;
          padding: 44px 84px;
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 30px;
        }

        .commit-icon {
          font-size: 44px;
        }

        .commitment-banner h2 {
          font-family: inherit;
          font-size: 30px;
          line-height: 1.12;
          letter-spacing: -0.025em;
          font-weight: 800;
          margin: 0 0 14px;
        }

        .commitment-banner p {
          color: #9cc9ff;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 500;
          margin: 0;
        }

        .commitment-banner strong {
          color: #ffd33d;
          font-weight: 800;
        }

        .culture-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .culture-card {
          background: white;
          border-left: 4px solid #1a7ef2;
          border-radius: 8px;
          padding: 32px;
          min-height: 230px;
        }

        .culture-card div,
        .security-card div,
        .vertical-card div {
          font-size: 28px;
          margin-bottom: 26px;
        }

        .culture-card h3,
        .security-card h3,
        .vertical-card h3 {
          margin: 0 0 18px;
          font-size: 18px;
          line-height: 1.35;
          font-weight: 800;
        }

        .culture-card p {
          color: #334965;
          line-height: 1.7;
          font-size: 15px;
          font-weight: 500;
        }

        .security-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .security-card {
          padding: 34px 26px;
          min-height: 280px;
        }

        .advisor-lead {
          color: #9cc9ff;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 500;
          max-width: 1050px;
        }

        .advisor-lead strong,
        .advisor-content strong {
          color: white;
          font-weight: 800;
        }

        .advisor-box {
          margin-top: 44px;
          padding: 44px;
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 36px;
        }

        .advisor-avatar {
          width: 96px;
          height: 96px;
          border-radius: 999px;
          background: #145eb9;
          border: 3px solid #2e85ee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
          font-size: 18px;
          line-height: 1;
          font-weight: 800;
        }

        .advisor-content p,
        .advisor-content li {
          color: #9cc9ff;
          font-size: 15px;
          line-height: 1.7;
          font-weight: 500;
        }

        .advisor-content ul {
          margin: 34px 0;
          display: grid;
          gap: 18px;
        }

        .advisor-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin: 34px 0 24px;
        }

        .advisor-stats div,
        .advisor-cards div {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(112, 182, 255, 0.18);
          border-radius: 8px;
          padding: 22px;
        }

        .advisor-stats h3 {
          font-family: inherit;
          font-size: 26px;
          line-height: 1;
          letter-spacing: -0.03em;
          font-weight: 800;
          margin: 0 0 4px;
        }

        .advisor-stats p,
        .advisor-cards p {
          margin: 0;
          color: #68b6ff;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 600;
        }

        .advisor-cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .advisor-cards h3 {
          margin: 0 0 18px;
          color: white;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 800;
        }

        .pe-box {
          display: inline-flex;
          gap: 18px;
          align-items: center;
          margin-top: 18px;
          background: rgba(255, 211, 61, 0.08);
          border: 1px solid rgba(255, 211, 61, 0.28);
          border-radius: 8px;
          padding: 18px 22px;
          color: #ffd33d;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 600;
        }

        .quote-blue {
          max-width: 1360px;
          margin: 0 auto;
          background: #155eb3;
          color: white;
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 20px;
          padding: 44px 72px;
          border-top: 3px solid #f4efe7;
          border-bottom: 3px solid #f4efe7;
        }

        .quote-blue span,
        .testimonial span {
          font-family: inherit;
          font-size: 54px;
          line-height: 1;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.22);
        }

        .quote-blue p {
          font-family: inherit;
          font-size: 20px;
          line-height: 1.65;
          letter-spacing: -0.015em;
          font-weight: 600;
          font-style: normal;
          margin: 0;
        }

        .vertical-list {
          display: grid;
          gap: 4px;
          margin-top: 52px;
        }

        .vertical-card {
          padding: 28px;
        }

        .bottom-cta {
          max-width: 1360px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          border-top: 3px solid #f4efe7;
        }

        .testimonial {
          background: #f4efe7;
          padding: 70px 52px;
        }

        .testimonial span {
          color: rgba(0, 35, 80, 0.12);
        }

        .testimonial p {
          font-family: inherit;
          font-style: normal;
          font-size: 20px;
          line-height: 1.65;
          letter-spacing: -0.015em;
          font-weight: 600;
          margin: 0 0 36px;
        }

        .testimonial strong {
          color: #005bd3;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 800;
        }

        .ready-box {
          background: #082857;
          color: white;
          padding: 84px 48px;
        }

        .ready-box h2 {
          font-family: inherit;
          font-size: 30px;
          line-height: 1.12;
          letter-spacing: -0.025em;
          font-weight: 800;
          margin: 0 0 22px;
        }

        .ready-box p {
          color: #9cc9ff;
          font-size: 16px;
          line-height: 1.65;
          font-weight: 500;
          margin-bottom: 34px;
        }

        .contact-row {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 20px;
          margin: 20px 0;
        }

        .contact-row span {
          color: #70b6ff;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 800;
          font-size: 11px;
          line-height: 1.45;
        }

        .contact-row strong {
          font-size: 14px;
          line-height: 1.5;
          font-weight: 700;
        }

        .gvc-strip {
          max-width: 1360px;
          margin: 0 auto;
          background: #082857;
          color: white;
          border-top: 3px solid #c8a321;
          padding: 38px 76px;
          display: grid;
          grid-template-columns: 60px 1fr;
          align-items: center;
        }

        .gvc-strip span {
          color: #c8a321;
          font-size: 38px;
          line-height: 1;
          font-weight: 700;
        }

        .gvc-strip p {
          font-family: inherit;
          font-size: 18px;
          line-height: 1.65;
          letter-spacing: -0.01em;
          font-weight: 600;
          font-style: normal;
          margin: 0;
        }

        .gvc-strip strong {
          color: #ffd33d;
          font-style: normal;
          font-weight: 800;
        }

        .gcc-footer {
          max-width: 1360px;
          margin: 0 auto;
          background: #082857;
          color: rgba(156, 201, 255, 0.55);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 24px 72px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 500;
        }

        .gcc-footer p {
          margin: 0;
        }

        .gcc-footer strong {
          color: #c8a321;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 11px;
          line-height: 1.5;
          font-weight: 800;
        }

        @media (min-width: 768px) {
          .gcc-hero h1,
          .why-panel h2,
          .engagement-section h2,
          .culture-section h2,
          .security-section h2,
          .process-section h2,
          .verticals-section h2,
          .commitment-banner h2,
          .ready-box h2 {
            font-size: 38px;
          }
        }

        @media (min-width: 1024px) {
          .gcc-hero h1,
          .why-panel h2,
          .engagement-section h2,
          .culture-section h2,
          .security-section h2,
          .process-section h2,
          .verticals-section h2,
          .commitment-banner h2,
          .ready-box h2 {
            font-size: 35px;
          }
        }

        @media (max-width: 1024px) {
          .gcc-hero-inner,
          .why-services,
          .bottom-cta,
          .advisor-box {
            grid-template-columns: 1fr;
          }

          .stats-inner,
          .services-grid,
          .engagement-grid,
          .culture-grid,
          .security-grid,
          .advisor-stats,
          .advisor-cards {
            grid-template-columns: 1fr 1fr;
          }

          .process-line {
            grid-template-columns: 1fr;
          }

          .process-line::before {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .gcc-hero-inner,
          .gold-stats,
          .why-panel,
          .services-panel,
          .process-section,
          .engagement-section,
          .culture-section,
          .security-section,
          .advisor-section,
          .quote-blue,
          .gvc-strip,
          .gcc-footer {
            padding-left: 22px;
            padding-right: 22px;
          }

          .stats-inner,
          .services-grid,
          .engagement-grid,
          .culture-grid,
          .security-grid,
          .advisor-stats,
          .advisor-cards {
            grid-template-columns: 1fr;
          }

          .gcc-hero h1 {
            font-size: 30px;
          }

          .hero-copy,
          .section-lead,
          .commitment-banner p,
          .advisor-lead,
          .ready-box p {
            font-size: 15px;
          }

          .top-stat {
            border-right: 0;
          }

          .quote-blue,
          .gvc-strip {
            grid-template-columns: 1fr;
          }

          .quote-blue p,
          .testimonial p,
          .gvc-strip p {
            font-size: 17px;
          }

          .gcc-footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}