export default function DigiHireAIPage() {
  const platformModules = [
    {
      icon: "🎙️",
      title: "AI-Powered Interviews",
      description: "Voice & video interviews with automated evaluation.",
      points: [
        "AI voice & video interviews",
        "Transcription & AI-based scoring",
        "Interview summary & smart reports",
        "Resume matching with JD% score",
        "Proctoring & fraud detection",
        "Candidate shareable detection",
        "User management & access control",
      ],
    },
    {
      icon: "‹›",
      title: "DigiHire CodeSense",
      description: "Developer coding assessments with automated evaluation.",
      points: [
        "Real-time coding tests",
        "Auto code evaluation",
        "Integrated with AI interview usage",
        "Standardized usage",
        "Multi-language coding environment",
      ],
    },
    {
      icon: "👥",
      title: "Vendor & Hiring Management",
      description: "Built for enterprise hiring ecosystems.",
      points: [
        "Multi-language AI voice interviews",
        "Vendor-wise candidate submission tracking",
        "Duplicate candidate detection",
        "Employer branding integration",
        "Priority support integration",
        "Regional hiring support",
      ],
    },
    {
      icon: "📞",
      title: "Employee Referral Intelligence",
      wide: true,
      points: [
        "Eliminate manual tagging & tracking",
        "Improve candidate quality with AI scoring",
        "Referral status & real-time reporting",
      ],
    },
    {
      icon: "🎓",
      title: "Campus Hiring Intelligence",
      description:
        "Purpose-built for high-volume fresher and campus recruitment drives.",
    },
  ];

  const plans = [
    {
      dot: "#1d9bf0",
      plan: "Starter",
      included: "Small hiring teams starting AI Interviews",
      flexibility: "+ Add-on flexibility",
    },
    {
      dot: "#18c58c",
      plan: "Growth",
      included: "Scaling candidate & vendor hiring",
      flexibility: "Test attempt add-ons",
    },
    {
      dot: "#af4cf0",
      plan: "Pro",
      included: "Advanced hiring intelligence & referrals",
      flexibility: "Scale as you grow",
    },
    {
      dot: "#ff8a00",
      plan: "Scale",
      included: "High-volume enterprise hiring & analytics",
      flexibility: "Built for large-scale hiring",
    },
    {
      dot: "#0056d6",
      plan: "Enterprise",
      included: "Priority support & dedicated branding",
      flexibility: "Full customization",
    },
  ];

  const whyPoints = [
    "Reduce hiring time by up to 60%",
    "Eliminate manual screening effort",
    "Centralized hiring intelligence & dashboard",
    "Multi-region, multi-language ready",
  ];

  const audience = [
    "IT services & consulting firms",
    "Staffing & recruitment companies",
    "GCC & enterprises",
    "Global hiring teams",
  ];

  return (
    <main className="digihire-page">
      <div className="digihire-sheet">
        <section className="digihire-hero-section">
          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>
          <div className="circle circle-three"></div>
          <div className="circle circle-four"></div>

          <img
            src="/Images/Digihire AI logo .png"
            alt="DigiHire AI Logo"
            className="digihire-logo"
          />

          <p className="hero-subtitle">
            Enterprise AI Hiring Intelligence Platform —{" "}
            <strong>www.digihireai.com</strong>
          </p>

          <h1>Intelligent Hiring. Faster Decisions. Better Talent.</h1>

          <h2>
            AI-Powered Interview, Assessment & Hiring Automation Platform
          </h2>

          <p className="hero-description">
            DigiHire AI helps organizations automate candidate screening,
            tech-driven hiring, and vendor & interview intelligence — all in one
            unified platform.
          </p>
        </section>

        <section className="modules-section">
          <div className="section-title-line">
            <span></span>
            <h2>PLATFORM MODULES</h2>
          </div>

          <div className="modules-grid">
            {platformModules.map((module) => (
              <div
                key={module.title}
                className={`module-card ${module.wide ? "wide" : ""}`}
              >
                <div className="module-title">
                  <span className="icon-box">{module.icon}</span>
                  <h3>{module.title}</h3>
                </div>

                {module.description && <p>{module.description}</p>}

                {module.points && (
                  <ul>
                    {module.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="plans-section">
          <div className="section-title-line">
            <span></span>
            <h2>FLEXIBLE PLANS FOR EVERY BUSINESS STAGE</h2>
          </div>

          <div className="plans-table">
            <div className="plans-header">
              <span>PLAN</span>
              <span>WHAT&apos;S INCLUDED</span>
              <span>FLEXIBILITY</span>
            </div>

            {plans.map((plan) => (
              <div key={plan.plan} className="plan-row">
                <div className="plan-name">
                  <span
                    className="plan-dot"
                    style={{ background: plan.dot }}
                  ></span>
                  {plan.plan}
                </div>

                <div className={plan.plan === "Pro" ? "bold-text" : ""}>
                  {plan.included}
                </div>

                <div>{plan.flexibility}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="info-section">
          <div className="info-box">
            <h2>
              <span className="small-icon">☑</span> Why DigiHire AI?
            </h2>

            <ul>
              {whyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="info-box">
            <h2>
              <span className="small-icon">💼</span> Who is it for?
            </h2>

            <ul>
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="trial-section">
          <div className="rocket-icon">🚀</div>

          <div className="trial-content">
            <h2>
              Experience AI Hiring Power —{" "}
              <span>Start Your Free Trial</span>
            </h2>

            <p>
              Transform your hiring with AI-driven intelligence, automation, and
              scale.
            </p>
          </div>

          <strong>info@digihireai.com</strong>
        </section>
      </div>

      <style>{`
        .digihire-page {
          width: 100%;
          min-height: 100vh;
          padding: 42px 24px 72px;
          background:
            linear-gradient(180deg, #f4f7fc 0%, #eef3fa 100%);
          color: #102244;
          font-family: Inter, Manrope, Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        .digihire-sheet {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          overflow: hidden;
          border: 1px solid #dce6f3;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 20px 60px rgba(15, 39, 84, 0.1);
        }

        .digihire-hero-section {
          position: relative;
          min-height: 390px;
          overflow: hidden;
          padding: 52px 360px 52px 48px;
          background:
            radial-gradient(circle at 89% 10%, rgba(26, 113, 231, 0.12), transparent 23%),
            linear-gradient(135deg, #ffffff 0%, #f7fbff 100%);
        }

        .circle {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
        }

        .circle-one {
          width: 310px;
          height: 310px;
          right: -110px;
          top: -120px;
          background: rgba(20, 104, 224, 0.16);
        }

        .circle-two {
          width: 230px;
          height: 230px;
          right: 40px;
          top: -98px;
          background: rgba(48, 163, 242, 0.13);
        }

        .circle-three {
          width: 205px;
          height: 205px;
          right: -30px;
          bottom: -42px;
          background: rgba(7, 58, 157, 0.12);
        }

        .circle-four {
          width: 135px;
          height: 135px;
          right: 140px;
          bottom: 20px;
          background: rgba(154, 217, 255, 0.22);
        }

        .digihire-logo {
          position: relative;
          z-index: 1;
          display: block;
          width: 250px;
          height: auto;
          margin-bottom: 17px;
        }

        .hero-subtitle {
          position: relative;
          z-index: 1;
          margin: 0 0 18px;
          color: #52657f;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.55;
        }

        .hero-subtitle strong {
          color: #075bb9;
          font-weight: 800;
        }

        .digihire-hero-section h1 {
          position: relative;
          z-index: 1;
          max-width: 720px;
          margin: 0 0 12px;
          color: #071b68;
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -0.8px;
          line-height: 1.14;
        }

        .digihire-hero-section h2 {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 0 18px;
          color: #1559a9;
          font-size: 19px;
          font-weight: 800;
          line-height: 1.42;
        }

        .hero-description {
          position: relative;
          z-index: 1;
          max-width: 710px;
          margin: 0;
          color: #334866;
          font-size: 16px;
          line-height: 1.7;
        }

        .modules-section,
        .plans-section,
        .info-section {
          padding-right: 36px;
          padding-left: 36px;
        }

        .modules-section {
          padding-top: 38px;
        }

        .section-title-line {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 20px;
        }

        .section-title-line::after {
          height: 1px;
          flex: 1;
          background: #d7e2f2;
          content: "";
        }

        .section-title-line span {
          width: 26px;
          height: 3px;
          flex: 0 0 26px;
          border-radius: 999px;
          background: #1265c5;
        }

        .section-title-line h2 {
          margin: 0;
          color: #0d4d9e;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.8px;
          line-height: 1.2;
        }

        .modules-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .module-card {
          min-height: 0;
          border: 1px solid #dce5f1;
          border-radius: 16px;
          background: #ffffff;
          padding: 22px;
          box-shadow: 0 8px 24px rgba(15, 39, 84, 0.04);
          transition:
            transform 0.24s ease,
            box-shadow 0.24s ease,
            border-color 0.24s ease;
        }

        .module-card:hover {
          border-color: #b9d0ee;
          box-shadow: 0 16px 34px rgba(15, 67, 133, 0.09);
          transform: translateY(-3px);
        }

        .module-card.wide {
          grid-column: span 2;
        }

        .module-title {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 14px;
        }

        .icon-box {
          display: flex;
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #edf5ff;
          color: #0e5fbd;
          font-size: 20px;
          font-weight: 900;
          filter: saturate(0.8);
        }

        .module-title h3 {
          margin: 0;
          color: #102b68;
          font-size: 20px;
          font-weight: 850;
          letter-spacing: -0.25px;
          line-height: 1.3;
        }

        .module-card p {
          margin: 0 0 15px;
          color: #53657c;
          font-size: 15px;
          line-height: 1.6;
        }

        .module-card ul,
        .info-box ul {
          display: grid;
          gap: 9px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .module-card li,
        .info-box li {
          position: relative;
          padding-left: 19px;
          color: #344861;
          font-size: 14px;
          line-height: 1.5;
        }

        .module-card li::before {
          position: absolute;
          top: 0;
          left: 0;
          color: #1765c1;
          content: "•";
          font-size: 18px;
          font-weight: 900;
          line-height: 1.1;
        }

        .plans-section {
          margin-top: 38px;
        }

        .plans-table {
          overflow: hidden;
          border: 1px solid #dce5f1;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 8px 24px rgba(15, 39, 84, 0.04);
        }

        .plans-header,
        .plan-row {
          display: grid;
          grid-template-columns: 210px minmax(0, 1fr) minmax(0, 1fr);
          align-items: center;
        }

        .plans-header {
          padding: 15px 22px;
          background: #103a7c;
          color: #ffffff;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.25px;
          line-height: 1.25;
        }

        .plan-row {
          min-height: 58px;
          padding: 0 22px;
          border-bottom: 1px solid #e7edf5;
          color: #41546c;
          font-size: 14px;
          line-height: 1.45;
        }

        .plan-row:last-child {
          border-bottom: 0;
        }

        .plan-row:nth-child(even) {
          background: #fbfdff;
        }

        .plan-name {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #112c67;
          font-weight: 850;
        }

        .plan-dot {
          display: inline-block;
          width: 10px;
          height: 10px;
          flex: 0 0 10px;
          border-radius: 999px;
        }

        .bold-text {
          color: #102b68;
          font-weight: 800;
        }

        .info-section {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 28px;
        }

        .info-box {
          border: 1px solid #dce5f1;
          border-radius: 16px;
          background: #ffffff;
          padding: 24px;
          box-shadow: 0 8px 24px rgba(15, 39, 84, 0.04);
        }

        .info-box h2 {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 20px;
          color: #102b68;
          font-size: 24px;
          font-weight: 850;
          letter-spacing: -0.45px;
          line-height: 1.25;
        }

        .small-icon {
          display: flex;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          background: #eaf3ff;
          color: #0f5cb7;
          font-size: 21px;
          filter: saturate(0.75);
        }

        .info-box li {
          padding-left: 30px;
          color: #30435c;
          font-size: 15px;
          line-height: 1.5;
        }

        .info-box li::before {
          position: absolute;
          top: 1px;
          left: 0;
          display: flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #1266c7;
          color: #ffffff;
          content: "✓";
          font-size: 12px;
          font-weight: 900;
        }

        .trial-section {
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr) auto;
          align-items: center;
          gap: 20px;
          margin: 32px 36px 38px;
          padding: 24px 28px;
          border-radius: 18px;
          background:
            linear-gradient(105deg, #0b2d6f 0%, #0e5fc4 100%);
          color: #ffffff;
          box-shadow: 0 16px 30px rgba(8, 52, 126, 0.2);
        }

        .rocket-icon {
          display: flex;
          width: 50px;
          height: 50px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.55);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          font-size: 22px;
        }

        .trial-content h2 {
          margin: 0 0 5px;
          color: #ffffff !important;
          font-size: 25px;
          font-weight: 850;
          letter-spacing: -0.45px;
          line-height: 1.25;
        }

        .trial-content h2 span {
          color: #ffffff;
          text-decoration: underline;
          text-decoration-color: rgba(255, 255, 255, 0.62);
          text-decoration-thickness: 2px;
          text-underline-offset: 5px;
        }

        .trial-content p {
          margin: 0;
          color: #dceaff;
          font-size: 15px;
          line-height: 1.55;
        }

        .trial-section strong {
          color: #ffffff;
          font-size: 16px;
          font-weight: 800;
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .digihire-hero-section h1 {
            font-size: 38px;
          }
        }

        @media (min-width: 1024px) {
          .digihire-hero-section h1 {
            font-size: 35px;
          }
        }

        @media (max-width: 1024px) {
          .digihire-page {
            padding: 28px 18px 58px;
          }

          .digihire-hero-section {
            min-height: auto;
            padding: 44px 34px;
          }

          .circle {
            opacity: 0.7;
          }

          .modules-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .module-card.wide {
            grid-column: span 2;
          }
        }

        @media (max-width: 760px) {
          .digihire-page {
            padding: 18px 12px 48px;
          }

          .digihire-sheet {
            border-radius: 18px;
          }

          .digihire-hero-section {
            padding: 34px 22px;
          }

          .circle {
            display: none;
          }

          .digihire-logo {
            width: 220px;
          }

          .hero-subtitle {
            font-size: 14px;
          }

          .digihire-hero-section h2 {
            font-size: 17px;
          }

          .hero-description {
            font-size: 15px;
          }

          .modules-section,
          .plans-section,
          .info-section {
            padding-right: 20px;
            padding-left: 20px;
          }

          .modules-section {
            padding-top: 30px;
          }

          .modules-grid,
          .info-section {
            grid-template-columns: 1fr;
          }

          .module-card.wide {
            grid-column: span 1;
          }

          .plans-header {
            display: none;
          }

          .plan-row {
            grid-template-columns: 1fr;
            gap: 6px;
            min-height: 0;
            padding: 16px 18px;
          }

          .plan-row > div:nth-child(2)::before {
            color: #6d7e94;
            content: "Included: ";
            font-size: 12px;
            font-weight: 800;
          }

          .plan-row > div:nth-child(3)::before {
            color: #6d7e94;
            content: "Flexibility: ";
            font-size: 12px;
            font-weight: 800;
          }

          .info-box h2 {
            font-size: 22px;
          }

          .trial-section {
            grid-template-columns: 1fr;
            gap: 14px;
            margin: 26px 20px 30px;
            padding: 24px 20px;
            text-align: center;
          }

          .rocket-icon {
            margin: 0 auto;
          }

          .trial-content h2 {
            font-size: 22px;
          }

          .trial-section strong {
            font-size: 15px;
          }
        }
      `}</style>
    </main>
  );
}