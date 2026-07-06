export default function GlobalCasewayPage() {
  const workCards = [
    {
      icon: "👨‍💼",
      title: "For Consultants",
      text: "Effortlessly manage client cases, track deadlines, access document templates, and collaborate securely — all from one intuitive hub.",
    },
    {
      icon: "👤",
      title: "For Clients",
      text: "Real-time progress updates, secure document uploads, and direct communication with your consultant from any device, anywhere.",
    },
    {
      icon: "🤖",
      title: "Meet Voya — AI Assistant",
      text: "Available 24/7 to answer immigration questions and guide both clients and consultants through complex processes instantly.",
    },
  ];

  const dashboardCases = [
    {
      name: "Ahmed K.",
      type: "Express Entry",
      color: "#2f66e8",
      progress: "78%",
    },
    {
      name: "Priya M.",
      type: "Study Permit",
      color: "#19a9df",
      progress: "55%",
    },
    {
      name: "Luca R.",
      type: "PR Application",
      color: "#f59e0b",
      progress: "90%",
    },
    {
      name: "Mei T.",
      type: "Work Permit",
      color: "#2f66e8",
      progress: "33%",
    },
  ];

  const features = [
    {
      icon: "💼",
      title: "Contact Management",
      text: "Organize contacts, track communication history, schedule follow-ups, and ensure timely updates for every person in your pipeline.",
    },
    {
      icon: "🔍",
      title: "Prospect Management",
      text: "Streamlined and personalized handling of potential immigrants with efficient assessment and application tracking.",
    },
    {
      icon: "👥",
      title: "Client Management",
      text: "Organize client interactions, track case details, and deliver personalized service with timely updates throughout the process.",
    },
    {
      icon: "📁",
      title: "Case Management",
      text: "Comprehensive tracking from initiation to resolution — streamlining workflow, communication, and legal compliance.",
    },
    {
      icon: "📋",
      title: "Form Management",
      text: "Efficiently handle and organize immigration forms — filling, submitting, and tracking documents for accuracy and compliance.",
    },
    {
      icon: "🗂️",
      title: "Document Management",
      text: "Secure organization, storage, and retrieval of all essential immigration documents with seamless sharing capabilities.",
    },
    {
      icon: "🌐",
      title: "Client Portal",
      text: "A user-friendly portal providing clients with personalized guidance, real-time updates, and a smooth application experience.",
    },
    {
      icon: "✉️",
      title: "Email Integration",
      text: "Seamless email integration to streamline communication between clients and immigration experts for efficient updates.",
    },
    {
      icon: "🗓️",
      title: "Calendar",
      text: "Manage appointments, consultations, and case timelines effortlessly with an integrated scheduling system.",
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      text: "Your gateway to seamless immigration solutions — anytime, anywhere, on any device.",
    },
    {
      icon: "💳",
      title: "Accounting",
      text: "Streamline billing, invoicing, retainers, and payment management with transparency and ease throughout the process.",
    },
    {
      icon: "🔐",
      title: "Security",
      text: "Reliable database servers in Montréal and Toronto, Canada — ensuring secure and efficient data management for your global needs.",
    },
    {
      icon: "✅",
      title: "Tasks & Reminders",
      text: "Empower your team with streamlined task management and automated reminders for efficient immigration workflows.",
    },
    {
      icon: "📝",
      title: "Contract Management",
      text: "Simplified handling of agreements and compliance documentation across borders — all within one secure platform.",
    },
    {
      icon: "📊",
      title: "Reports & Dashboard",
      text: "Real-time dashboard with insightful reports to monitor progress, trends, and compliance for informed decision-making.",
    },
  ];

  const plans = [
    {
      name: "LAUNCH",
      price: "68",
      highlight: false,
      features: [
        "14-Day Free Trial",
        "Unlimited Cases",
        "100GB Secure Storage",
        "2 User Licenses",
        "Contact, Client & Prospect Mgmt",
        "Case & Document Management",
        "Templates & Form Management",
        "Client Portal",
        "Express Entry Support",
        "Appointments & Tasks",
        "Accounting (View Only)",
        "AI Assistant — 50/day",
        "Canada Cloud Security",
      ],
    },
    {
      name: "SCALE",
      price: "108",
      highlight: true,
      features: [
        "14-Day Free Trial",
        "Unlimited Cases",
        "150GB Secure Storage",
        "3 User Licenses",
        "Contact, Client & Prospect Mgmt",
        "Case & Document Management",
        "Templates & Form Management",
        "Client Portal",
        "Express Entry Support",
        "Appointments & Tasks",
        "Accounting + Export",
        "Reports — PDF Download",
        "Email Integration",
        "e-Signatures",
        "AI Assistant — 200/day",
        "Canada Cloud Security",
      ],
    },
    {
      name: "ELITE",
      price: "168",
      highlight: false,
      features: [
        "14-Day Free Trial",
        "Unlimited Cases",
        "250GB Secure Storage",
        "5 User Licenses",
        "Contact, Client & Prospect Mgmt",
        "Case & Document Management",
        "All Form & Template Tools",
        "Client Portal",
        "Express Entry Support",
        "Appointments & Tasks",
        "Full Accounting + Export",
        "Reports — PDF + Excel",
        "Email Integration",
        "e-Signatures",
        "Dropbox / Google Drive / Gmail",
        "Calendly & QuickBooks Integration",
        "AI Assistant — Unlimited",
        "Canada Cloud Security",
      ],
    },
  ];

  const addOns = [
    "+User License — CAD 30/user/month",
    "+Storage — CAD 20 per 50GB",
    "AI Agreement Writer — CAD 1/agreement (pay-as-you-go)",
  ];

  const referralSteps = [
    {
      number: "1",
      title: "Share Your Unique Code",
      text: "Access your personalized referral code in your profile after signing up.",
    },
    {
      number: "2",
      title: "Invite RCIC Friends & Colleagues",
      text: "Share via email, social media, or direct messages to your network.",
    },
    {
      number: "3",
      title: "Earn Passive Income",
      text: "Successful referrals kick-start your journey to earning lifetime subscription rewards.",
    },
  ];

  const values = [
    {
      icon: "🤝",
      title: "Integrity",
      text: "Maintaining the highest standards of honesty and transparency in all our interactions.",
    },
    {
      icon: "⭐",
      title: "Excellence",
      text: "Striving for excellence in everything we do — platform quality, support, and results.",
    },
    {
      icon: "🔗",
      title: "Collaboration",
      text: "Building strong, supportive relationships with our users and their clients.",
    },
    {
      icon: "💡",
      title: "Innovation",
      text: "Continuously seeking innovative solutions to improve our platform and better serve users.",
    },
  ];

  return (
    <main className="global-caseway-page">
      <section className="gc-hero">
        <div className="gc-container">
          <div className="hero-pill">
            <span></span>
            IMMIGRATION PORTAL FOR RCICS & LAWYERS
          </div>

          <h1>
            Step into <span>Effortless</span> Case Management
          </h1>

          <p className="hero-copy">
            Welcome to the future of immigration case management. Global Caseway
            empowers RCICs and immigration lawyers with cutting-edge tools,
            real-time collaboration, and AI-powered support — all in one
            platform.
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="primary-btn">
              Start Free Trial
            </a>
            <a href="#features" className="secondary-btn">
              Explore Features
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>14-Day</h3>
              <p>Free Trial</p>
            </div>
            <div>
              <h3>∞</h3>
              <p>Unlimited Cases</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>AI Assistant — Voya</p>
            </div>
            <div>
              <h3>🇨🇦</h3>
              <p>Canada Cloud Security</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="gc-container">
          <p className="section-label">HOW IT WORKS</p>
          <h2>Empower Your Customers & Your Practice</h2>
          <p className="section-copy">
            Our platform simplifies the immigration journey — for both the
            consultant and the client.
          </p>

          <div className="work-layout">
            <div className="work-cards">
              {workCards.map((card) => (
                <div className="work-card" key={card.title}>
                  <div className="icon-box">{card.icon}</div>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-card">
              <h3>LIVE CASE DASHBOARD</h3>

              <div className="case-list">
                {dashboardCases.map((item) => (
                  <div className="case-row" key={item.name}>
                    <div className="case-left">
                      <span
                        className="case-dot"
                        style={{ background: item.color }}
                      ></span>
                      <p>
                        <strong>{item.name}</strong> — {item.type}
                      </p>
                    </div>

                    <div className="progress-track">
                      <span
                        style={{
                          width: item.progress,
                          background: item.color,
                        }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dashboard-footer">
                <span>📁 4 active cases</span>
                <span>✅ 2 docs pending</span>
                <span>🔔 1 deadline today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" id="features">
        <div className="gc-container">
          <p className="section-label">PLATFORM FEATURES</p>
          <h2>Everything You Need to Run Your Practice</h2>
          <p className="section-copy">
            A comprehensive suite of tools built specifically for immigration
            professionals.
          </p>

          <div className="features-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <div className="icon-box">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="gc-container">
          <p className="section-label">PRICING PLANS</p>
          <h2>Choose Your Plan</h2>
          <p className="section-copy">
            All plans include a 14-day free trial. Cancel anytime. Canadian
            cloud security included.
          </p>

          <div className="billing-toggle">
            <button className="active">Monthly</button>
            <button>Yearly</button>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div
                className={`pricing-card ${plan.highlight ? "popular" : ""}`}
                key={plan.name}
              >
                {plan.highlight && (
                  <div className="popular-badge">MOST POPULAR</div>
                )}

                <p className="plan-name">{plan.name}</p>

                <div className="price">
                  <span>CAD</span>
                  <strong>{plan.price}</strong>
                </div>

                <p className="per-month">/ month</p>

                <div className="pricing-line"></div>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>

                <button className={plan.highlight ? "blue-btn" : ""}>
                  Get Started Free
                </button>
              </div>
            ))}
          </div>

          <div className="addons-box">
            <h3>⚡ Add-Ons</h3>

            <div className="addons-list">
              {addOns.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="referral-section">
        <div className="gc-container referral-layout">
          <div>
            <p className="section-label">REFERRAL PROGRAM</p>
            <h2>Share Success, Earn Rewards</h2>
            <p className="section-copy">
              Invite fellow RCICs and immigration lawyers — earn lifetime
              passive income from every successful referral.
            </p>

            <div className="referral-steps">
              {referralSteps.map((step) => (
                <div className="referral-step" key={step.number}>
                  <div>{step.number}</div>
                  <span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="earning-card">
            <div>🎁</div>
            <h3>Start Earning Today</h3>
            <p>
              Join hundreds of consultants already building passive income
              through the Global Caseway referral program.
            </p>
            <button>Join & Get Your Code</button>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="gc-container about-layout">
          <div>
            <p className="section-label">ABOUT US</p>
            <h2>Why Choose Global Caseway</h2>

            <div className="about-copy">
              <p>
                <strong>Welcome to Global Caseway</strong> — the premier
                platform for RCICs and immigration lawyers. We are committed to
                supporting professionals in delivering top-notch immigration
                services to their clients.
              </p>

              <p>
                Our goal is to simplify your workflow, enhance your service
                offerings, and ensure your clients&apos; immigration journeys are
                successful and stress-free.
              </p>

              <p>
                <strong>Who We Are:</strong> Global Caseway is an innovative
                immigration portal designed specifically for RCICs and
                immigration lawyers. Our platform combines advanced technology
                with expert resources to empower you in providing exceptional
                service.
              </p>

              <p>
                <strong>Our Mission:</strong> To equip immigration professionals
                with the tools, information, and support necessary to excel in
                their field — making immigration more efficient and accessible
                for everyone.
              </p>

              <p className="copyright">
                📍 Vancouver, BC, Canada · © 2026 DigiHelic. All Rights
                Reserved.
              </p>
            </div>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.title}>
                <div>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="gc-container">
          <p className="section-label">GET IN TOUCH</p>
          <h2>Contact Us</h2>
          <p className="section-copy">
            Have questions about Global Caseway? Our team is ready to help you
            get started.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <div className="icon-box">✉️</div>
              <span>
                <h3>Email</h3>
                <p>info@globalcaseway.com</p>
              </span>
            </div>

            <div className="contact-card">
              <div className="icon-box">🌐</div>
              <span>
                <h3>Website</h3>
                <p>globalcaseway.com</p>
              </span>
            </div>

            <div className="contact-card wide">
              <div className="icon-box">🤖</div>
              <span>
                <h3>AI Assistant — Voya</h3>
                <p>
                  Available 24/7 on our platform to answer your immigration
                  questions instantly.
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .global-caseway-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #06152d;
          font-family: Arial, Helvetica, sans-serif;
        }

        .gc-container {
          width: 100%;
          max-width: 1540px;
          margin: 0 auto;
          padding-left: 96px;
          padding-right: 96px;
        }

        .gc-hero {
          max-width: 1720px;
          margin: 0 auto;
          background:
            linear-gradient(rgba(47, 102, 232, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(47, 102, 232, 0.07) 1px, transparent 1px),
            radial-gradient(circle at 33% 38%, rgba(47, 102, 232, 0.08), transparent 28%),
            #f5f9ff;
          background-size: 92px 92px, 92px 92px, auto, auto;
          min-height: 590px;
          padding-top: 34px;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #9fc0ff;
          background: rgba(47, 102, 232, 0.08);
          color: #2f66e8;
          border-radius: 999px;
          padding: 18px 30px;
          font-size: 14px;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 1.2px;
          margin-bottom: 66px;
        }

        .hero-pill span {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: #2f66e8;
        }

        h1,
        h2 {
          font-family: Georgia, "Times New Roman", serif;
          color: #07152d;
        }

        .gc-hero h1 {
          max-width: 1030px;
          font-size: 62px;
          line-height: 1.08;
          font-weight: 900;
          margin: 0 0 22px;
          letter-spacing: -1.5px;
        }

        .gc-hero h1 span {
          color: #22aeea;
        }

        .hero-copy {
          max-width: 820px;
          color: #667899;
          font-size: 17px;
          line-height: 1.75;
          margin: 0;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 44px;
        }

        .primary-btn,
        .secondary-btn {
          height: 72px;
          min-width: 170px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 900;
          font-size: 16px;
        }

        .primary-btn {
          background: #2f66e8;
          color: #ffffff;
          box-shadow: 0 18px 30px rgba(47, 102, 232, 0.22);
        }

        .secondary-btn {
          background: #ffffff;
          color: #07152d;
          border: 1px solid #d8e4f8;
          box-shadow: 0 10px 20px rgba(7, 21, 45, 0.05);
        }

        .hero-stats {
          display: flex;
          gap: 72px;
          margin-top: 66px;
        }

        .hero-stats h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 30px;
          margin: 0 0 16px;
          color: #07152d;
        }

        .hero-stats p {
          margin: 0;
          color: #667899;
          font-size: 12px;
        }

        .work-section,
        .features-section,
        .about-section {
          background: #ffffff;
          padding: 84px 0;
        }

        .pricing-section,
        .referral-section,
        .contact-section {
          background: #f5f9ff;
          padding: 84px 0;
        }

        .section-label {
          color: #0098ff;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          font-size: 13px;
          font-weight: 900;
          margin: 0 0 32px;
        }

        .work-section h2,
        .features-section h2,
        .pricing-section h2,
        .referral-section h2,
        .about-section h2,
        .contact-section h2 {
          font-size: 42px;
          line-height: 1.15;
          margin: 0 0 20px;
        }

        .section-copy {
          color: #667899;
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 62px;
        }

        .work-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 62px;
          align-items: center;
        }

        .work-cards {
          display: grid;
          gap: 28px;
        }

        .work-card,
        .dashboard-card,
        .feature-card,
        .pricing-card,
        .addons-box,
        .earning-card,
        .value-card,
        .contact-card {
          background: #ffffff;
          border: 1px solid #d6e4fb;
          border-radius: 16px;
          box-shadow: 0 20px 45px rgba(47, 102, 232, 0.06);
        }

        .work-card {
          min-height: 172px;
          display: grid;
          grid-template-columns: 68px 1fr;
          gap: 22px;
          align-items: center;
          padding: 24px;
        }

        .icon-box {
          width: 70px;
          height: 70px;
          border-radius: 14px;
          background: #edf4ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
        }

        .work-card h3,
        .feature-card h3,
        .value-card h3,
        .contact-card h3 {
          font-size: 16px;
          margin: 0 0 10px;
          color: #06152d;
        }

        .work-card p,
        .feature-card p,
        .value-card p,
        .contact-card p,
        .about-copy p {
          color: #4d6391;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        .dashboard-card {
          padding: 44px 32px;
        }

        .dashboard-card h3 {
          color: #4d6391;
          letter-spacing: 2px;
          font-size: 13px;
          margin: 0 0 36px;
        }

        .case-list {
          display: grid;
          gap: 16px;
        }

        .case-row {
          height: 72px;
          border: 1px solid #d6e4fb;
          border-radius: 10px;
          background: #f8fbff;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 140px;
          align-items: center;
          gap: 20px;
        }

        .case-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .case-left p {
          color: #4d6391;
          font-size: 13px;
          margin: 0;
        }

        .case-left strong {
          color: #06152d;
        }

        .case-dot {
          width: 16px;
          height: 16px;
          border-radius: 999px;
          display: block;
        }

        .progress-track {
          height: 8px;
          background: #dce7f7;
          border-radius: 999px;
          overflow: hidden;
        }

        .progress-track span {
          display: block;
          height: 100%;
          border-radius: 999px;
        }

        .dashboard-footer {
          display: flex;
          gap: 18px;
          margin-top: 28px;
          color: #4d6391;
          font-size: 12px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature-card {
          min-height: 270px;
          padding: 28px;
        }

        .feature-card .icon-box {
          margin-bottom: 36px;
        }

        .feature-card h3 {
          font-size: 17px;
        }

        .pricing-section {
          padding-top: 90px;
        }

        .billing-toggle {
          display: inline-flex;
          background: #dce8f8;
          border-radius: 12px;
          padding: 6px;
          margin: 20px 0 46px;
        }

        .billing-toggle button {
          border: 0;
          background: transparent;
          color: #4d6391;
          font-weight: 900;
          padding: 18px 28px;
          border-radius: 8px;
          cursor: pointer;
        }

        .billing-toggle .active {
          background: #2f66e8;
          color: #ffffff;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .pricing-card {
          position: relative;
          padding: 42px 48px;
          min-height: 820px;
        }

        .pricing-card.popular {
          background: #edf4ff;
          border-color: #2f66e8;
        }

        .popular-badge {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: #2f66e8;
          color: #ffffff;
          border-radius: 999px;
          padding: 16px 26px;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .plan-name {
          color: #0098ff;
          letter-spacing: 2px;
          font-size: 13px;
          font-weight: 900;
          margin: 0 0 20px;
        }

        .price {
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .price span {
          font-family: Georgia, "Times New Roman", serif;
          color: #07152d;
          font-size: 17px;
          margin-top: 10px;
        }

        .price strong {
          font-family: Georgia, "Times New Roman", serif;
          color: #07152d;
          font-size: 48px;
          line-height: 1;
        }

        .per-month {
          color: #4d6391;
          font-size: 13px;
          margin: 16px 0 34px;
        }

        .pricing-line {
          width: 150px;
          height: 1px;
          background: #d6e4fb;
          margin-bottom: 26px;
        }

        .pricing-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 26px;
        }

        .pricing-card li {
          color: #4d6391;
          font-size: 13px;
          line-height: 1.35;
        }

        .pricing-card li::first-letter {
          color: #0098ff;
        }

        .pricing-card button {
          width: 100%;
          height: 68px;
          border-radius: 10px;
          border: 1px solid #d6e4fb;
          background: #ffffff;
          color: #06152d;
          font-weight: 900;
          font-size: 15px;
          margin-top: 34px;
        }

        .pricing-card .blue-btn {
          background: #2f66e8;
          color: #ffffff;
          border-color: #2f66e8;
        }

        .addons-box {
          padding: 30px;
          margin-top: 34px;
        }

        .addons-box h3 {
          color: #f59e0b;
          font-size: 16px;
          margin: 0 0 20px;
        }

        .addons-list {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .addons-list span {
          border: 1px solid #d6e4fb;
          background: #f8fbff;
          border-radius: 10px;
          padding: 18px;
          color: #4d6391;
          font-size: 13px;
        }

        .referral-section {
          background: #eef6ff;
        }

        .referral-layout {
          display: grid;
          grid-template-columns: 1fr 0.95fr;
          gap: 84px;
          align-items: center;
        }

        .referral-steps {
          display: grid;
          gap: 56px;
          margin-top: 56px;
        }

        .referral-step {
          display: grid;
          grid-template-columns: 58px 1fr;
          gap: 22px;
          align-items: center;
        }

        .referral-step > div {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          border: 2px solid #9fc0ff;
          background: #dceaff;
          color: #2f66e8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
        }

        .referral-step h3 {
          margin: 0 0 8px;
          font-size: 15px;
        }

        .referral-step p {
          color: #4d6391;
          font-size: 13px;
          margin: 0;
        }

        .earning-card {
          min-height: 330px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px;
        }

        .earning-card > div {
          font-size: 46px;
          margin-bottom: 30px;
        }

        .earning-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          margin: 0 0 22px;
        }

        .earning-card p {
          color: #4d6391;
          font-size: 13px;
          line-height: 1.7;
          max-width: 620px;
          margin: 0 0 30px;
        }

        .earning-card button {
          border: 0;
          background: #2f66e8;
          color: #ffffff;
          border-radius: 10px;
          padding: 20px 36px;
          font-weight: 900;
          font-size: 15px;
        }

        .about-layout {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 70px;
          align-items: center;
        }

        .about-copy {
          display: grid;
          gap: 22px;
          max-width: 760px;
        }

        .about-copy strong {
          color: #06152d;
        }

        .copyright {
          font-size: 12px !important;
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .value-card {
          min-height: 210px;
          padding: 32px;
        }

        .value-card div {
          font-size: 24px;
          margin-bottom: 42px;
        }

        .contact-section {
          padding-bottom: 110px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 60px;
        }

        .contact-card {
          min-height: 120px;
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 22px;
          align-items: center;
          padding: 20px;
        }

        .contact-card.wide {
          grid-column: span 1;
        }

        @media (max-width: 1100px) {
          .gc-container {
            padding-left: 28px;
            padding-right: 28px;
          }

          .work-layout,
          .referral-layout,
          .about-layout,
          .pricing-grid,
          .features-grid,
          .contact-grid,
          .values-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card {
            min-height: auto;
          }

          .hero-stats {
            flex-wrap: wrap;
            gap: 28px;
          }
        }

        @media (max-width: 640px) {
          .gc-hero h1 {
            font-size: 42px;
          }

          .work-section h2,
          .features-section h2,
          .pricing-section h2,
          .referral-section h2,
          .about-section h2,
          .contact-section h2 {
            font-size: 34px;
          }

          .case-row {
            grid-template-columns: 1fr;
            height: auto;
            padding: 18px;
          }

          .dashboard-footer {
            flex-direction: column;
          }

          .work-card,
          .contact-card {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}