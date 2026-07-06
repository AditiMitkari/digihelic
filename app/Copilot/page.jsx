"use client";

export default function CopilotInterviewPage() {
  const featureCards = [
    {
      icon: "🛡️",
      title: "AI-POWERED PROCTORING",
      text: "Detects impersonation, multiple faces, tab switching, external assistance and more.",
    },
    {
      icon: "👥",
      title: "INTERVIEWER FOCUS ON EVALUATION",
      text: "AI handles monitoring so interviewers can focus on what matters most.",
    },
    {
      icon: "📅",
      title: "CALENDAR INTEGRATION",
      text: "Connect Outlook or Google Calendar and schedule interviews in seconds.",
    },
    {
      icon: "🎥",
      title: "COMPLETE INTERVIEW RECORDING",
      text: "Securely record every interview for future reference, compliance and quality.",
    },
    {
      icon: "📄",
      title: "AI INTERVIEW SUMMARY REPORT",
      text: "Get AI-generated highlights, strengths, concerns and evaluation summary.",
    },
    {
      icon: "▶️",
      title: "VIDEO PLAYBACK & AUDIT TRAIL",
      text: "Review interviews anytime with full recording and evaluation history.",
    },
    {
      icon: "👨‍👩‍👧",
      title: "STANDARDIZED EVALUATION",
      text: "Ensure consistent scorecards and structured evaluation across interviews.",
    },
    {
      icon: "⚖️",
      title: "REDUCE HIRING BIAS",
      text: "AI-assisted insights promote fairness and objective decision making.",
    },
    {
      icon: "✅",
      title: "AUTHENTIC CANDIDATES",
      text: "Increase confidence in remote hiring with better verification and integrity checks.",
    },
    {
      icon: "👥",
      title: "COLLABORATE BETTER",
      text: "Recruiters, managers and panelists can review, score and share feedback.",
    },
    {
      icon: "⚡",
      title: "FASTER HIRING DECISIONS",
      text: "Centralized feedback, reports and recordings accelerate your hiring cycle.",
    },
    {
      icon: "📊",
      title: "DATA-DRIVEN DECISIONS",
      text: "Track interview metrics and hiring insights to improve quality of hire.",
    },
  ];

  const bottomCards = [
    {
      icon: "🔒",
      title: "SECURE & COMPLIANT",
      text: "Enterprise-grade security with role-based access and data protection.",
    },
    {
      icon: "☁️",
      title: "SCALABLE FOR EVERY HIRING NEED",
      text: "Ideal for startups, enterprises, staffing firms and RPOs of all sizes.",
    },
    {
      icon: "₹",
      title: "REDUCE COST OF WRONG HIRING",
      text: "Hire the right talent with confidence and save time, money and resources.",
    },
  ];

  return (
    <main className="copilot-page">
      <section className="copilot-sheet">
        <div className="copilot-hero-section">
          <div className="hero-left">
            <img
              src="/Images/Digihire AI logo .png"
              alt="DigiHire AI"
              className="small-logo"
            />

            <h1>
              DigiHireAI
              <span>Copilot Interview</span>
            </h1>

            <h2>
              AI-Assisted, Human-Led.
              <br />
              Better Interviews. Smarter Hiring.
            </h2>

            <p className="hero-copy">
              A dedicated interview platform where AI works alongside
              interviewers to ensure authenticity, capture insights and help you
              hire the right talent with confidence.
            </p>

            <div className="dependency-card">
              <div className="dependency-icon">
                <span>📘</span>
                <span>📌</span>
                <span>📹</span>
                <span>🌈</span>
              </div>

              <div>
                <h3>NO MORE DEPENDENCY ON MS TEAMS, ZOOM OR GMEET</h3>

                <p>
                  No extra licenses. No extra cost.
                  <br />
                  Do all your interviews on
                  <br />
                  DigiHireAI – built for recruitment.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="calendar-box">
              <div className="calendar-icon">📅</div>

              <div>
                <h3>INTEGRATES WITH OUTLOOK & GOOGLE CALENDAR</h3>

                <p>
                  Schedule interviews seamlessly.
                  <br />
                  We add the interview link automatically.
                </p>
              </div>

              <div className="calendar-apps">
                <div>O</div>
                <div>31</div>
              </div>
            </div>

            <img
              src="/Images/Copilot.png"
              alt="DigiHireAI Copilot Interview Dashboard"
              className="copilot-product-image"
            />
          </div>
        </div>

        <section className="features-section">
          <div className="section-heading">
            <span></span>

            <h2>
              Everything You Need for <strong>Smarter Interviews</strong>
            </h2>

            <span></span>
          </div>

          <div className="features-grid">
            {featureCards.map((card) => (
              <div className="feature-card" key={card.title}>
                <div className="feature-icon">{card.icon}</div>

                <h3>{card.title}</h3>

                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bottom-band">
          <div className="built-text">
            BUILT FOR
            <br />
            RECRUITERS.
            <br />
            DESIGNED FOR
            <br />
            RESULTS.
          </div>

          {bottomCards.map((card) => (
            <div className="bottom-info-card" key={card.title}>
              <div className="bottom-icon">{card.icon}</div>

              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}

          <div className="demo-box">
            <h3>Stop meeting. Start hiring.</h3>

            <p>
              Experience the future of interviews with DigiHireAI Copilot
              Interview.
            </p>

            <button>SCHEDULE A DEMO TODAY!</button>
          </div>
        </section>

        <footer className="page-footer">
          <p>
            Smarter Platform. Stronger Interviews.{" "}
            <strong>Better Hiring.</strong>
          </p>

          <span>www.digihireai.com</span>
        </footer>
      </section>

      <style>{`
        .copilot-page {
          width: 100%;
          min-height: 100vh;
          background: #f5f6ff;
          font-family: Arial, Helvetica, sans-serif;
          color: #12183f;
          padding: 0;
        }

        .copilot-sheet {
          max-width: 1280px;
          margin: 0 auto;
          background:
            radial-gradient(circle at 12% 28%, rgba(114, 89, 255, 0.08), transparent 28%),
            radial-gradient(circle at 70% 18%, rgba(114, 89, 255, 0.10), transparent 35%),
            linear-gradient(180deg, #ffffff 0%, #f9f7ff 62%, #ffffff 100%);
          overflow: hidden;
        }

        .copilot-hero-section {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 30px;
          padding: 34px 28px 24px;
          position: relative;
        }

        .hero-left {
          padding-top: 4px;
        }

        .small-logo {
          width: 150px;
          height: auto;
          display: block;
          margin-bottom: 66px;
        }

        .hero-left h1 {
          color: #11184f;
          font-size: 30px;
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -2px;
          margin: 0 0 26px;
        }

        .hero-left h1 span {
          display: block;
          color: #6b37e6;
        }

        .hero-left h2 {
          font-size: 30px;
          line-height: 1.16;
          font-weight: 900;
          color: #151a4d;
          margin: 0 0 30px;
        }

        .hero-copy {
          max-width: 450px;
          font-size: 17px;
          line-height: 1.45;
          color: #25294f;
          margin: 0 0 50px;
        }

        .dependency-card {
          display: grid;
          grid-template-columns: 118px 1fr;
          align-items: center;
          gap: 18px;
          width: 500px;
          border: 1px solid #ddd8f5;
          background: rgba(255, 255, 255, 0.72);
          border-radius: 14px;
          padding: 20px 22px;
          box-shadow: 0 12px 30px rgba(86, 55, 185, 0.08);
        }

        .dependency-icon {
          width: 96px;
          height: 96px;
          border-radius: 999px;
          background: #ffffff;
          box-shadow: inset 0 0 0 1px #d9d2ff;
          display: grid;
          grid-template-columns: 1fr 1fr;
          place-items: center;
          font-size: 25px;
        }

        .dependency-card h3 {
          color: #5d35d8;
          font-size: 16px;
          line-height: 1.22;
          font-weight: 900;
          margin: 0 0 8px;
        }

        .dependency-card p {
          color: #151a4d;
          font-size: 15px;
          line-height: 1.28;
          margin: 0;
        }

        .hero-right {
          padding-top: 2px;
        }

        .calendar-box {
          background: #0d104a;
          color: #ffffff;
          border-radius: 14px;
          display: grid;
          grid-template-columns: 92px minmax(0, 1fr) 170px;
          align-items: center;
          gap: 20px;
          padding: 18px 22px;
          margin-bottom: 24px;
          box-sizing: border-box;
        }

        .calendar-icon {
          width: 74px;
          height: 74px;
          border-radius: 999px;
          border: 7px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
        }

        .calendar-box h3 {
          color: #ffffff !important;
          font-size: 16px;
          line-height: 1.22;
          margin: 0 0 8px;
          font-weight: 900;
          letter-spacing: 0;
        }

        .calendar-box p {
          color: #e9ebff !important;
          font-size: 14px;
          line-height: 1.35;
          margin: 0;
        }

        .calendar-apps {
          border-left: 1px solid rgba(255, 255, 255, 0.45);
          min-height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          font-size: 28px;
          font-weight: 900;
        }

        .calendar-apps div {
          width: 52px;
          height: 52px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0086ff, #00b2ff);
        }

        .calendar-apps div:last-child {
          background: linear-gradient(135deg, #f7c843, #ffffff);
          color: #266bdc;
        }

        .copilot-product-image {
          width: 100%;
          max-width: 650px;
          height: auto;
          display: block;
          margin-left: auto;
          object-fit: contain;
          clip-path: inset(2px);
        }

        .features-section {
          padding: 4px 28px 20px;
        }

        .section-heading {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 22px;
          margin: 12px 0 18px;
        }

        .section-heading span {
          height: 2px;
          background: #151a4d;
        }

        .section-heading h2 {
          margin: 0;
          color: #151a4d;
          font-size: 30px;
          font-weight: 900;
          white-space: nowrap;
        }

        .section-heading strong {
          color: #6b37e6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
        }

        .feature-card {
          min-height: 210px;
          border: 1px solid #ddd8f5;
          background: rgba(255, 255, 255, 0.82);
          border-radius: 10px;
          padding: 18px 12px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(86, 55, 185, 0.05);
        }

        .feature-icon {
          color: #6b37e6;
          font-size: 36px;
          margin-bottom: 12px;
        }

        .feature-card h3 {
          color: #151a4d;
          font-size: 14px;
          line-height: 1.18;
          font-weight: 900;
          margin: 0 0 9px;
        }

        .feature-card p {
          color: #10142e;
          font-size: 13px;
          line-height: 1.28;
          margin: 0;
        }

        .bottom-band {
          background: #11144b;
          color: #ffffff;
          display: grid;
          grid-template-columns: 160px repeat(3, 1fr) 290px;
          gap: 0;
          padding: 28px;
          align-items: center;
        }

        .built-text {
          font-size: 16px;
          line-height: 1.35;
          font-weight: 900;
          border-right: 1px solid rgba(255, 255, 255, 0.24);
          padding-right: 24px;
        }

        .bottom-info-card {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 12px;
          padding: 0 24px;
          border-right: 1px solid rgba(255, 255, 255, 0.24);
        }

        .bottom-icon {
          width: 48px;
          height: 48px;
          border: 2px solid rgba(255, 255, 255, 0.78);
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .bottom-info-card h3 {
          font-size: 13px;
          line-height: 1.15;
          font-weight: 900;
          margin: 0 0 6px;
        }

        .bottom-info-card p {
          color: #e2e4ff;
          font-size: 11px;
          line-height: 1.35;
          margin: 0;
        }

        .demo-box {
          padding-left: 24px;
        }

        .demo-box h3 {
          font-size: 22px;
          margin: 0 0 6px;
        }

        .demo-box p {
          font-size: 14px;
          line-height: 1.35;
          margin: 0 0 14px;
          color: #e2e4ff;
        }

        .demo-box button {
          border: 0;
          border-radius: 8px;
          background: linear-gradient(90deg, #8d5cff, #6b37e6);
          color: #ffffff;
          font-size: 15px;
          font-weight: 900;
          padding: 13px 24px;
          width: 100%;
          box-shadow: 0 8px 18px rgba(107, 55, 230, 0.4);
        }

        .page-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 160px;
          padding: 12px 28px 18px;
          background: #ffffff;
        }

        .page-footer p {
          margin: 0;
          color: #151a4d;
          font-size: 20px;
          font-weight: 900;
        }

        .page-footer strong {
          color: #6b37e6;
        }

        .page-footer span {
          color: #000000;
          font-size: 16px;
          font-weight: 900;
        }

        @media (min-width: 768px) {
          .hero-left h1,
          .hero-left h2,
          .section-heading h2 {
            font-size: 38px;
          }
        }

        @media (min-width: 1024px) {
          .hero-left h1,
          .hero-left h2,
          .section-heading h2 {
            font-size: 35px;
          }
        }

        @media (max-width: 1100px) {
          .copilot-hero-section {
            grid-template-columns: 1fr;
          }

          .dependency-card {
            width: 100%;
          }

          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .bottom-band {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .built-text,
          .bottom-info-card {
            border-right: 0;
            padding-right: 0;
          }

          .demo-box {
            padding-left: 0;
          }

          .page-footer {
            gap: 20px;
            flex-direction: column;
          }

          .copilot-product-image {
            margin-left: 0;
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .copilot-hero-section {
            padding: 24px 16px;
          }

          .small-logo {
            margin-bottom: 38px;
          }

          .hero-copy {
            font-size: 17px;
          }

          .calendar-box {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .section-heading {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .section-heading h2 {
            white-space: normal;
          }
        }
      `}</style>
    </main>
  );
}