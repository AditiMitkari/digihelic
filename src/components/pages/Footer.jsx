import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-section">
        <div className="container footer-grid">
          <div className="footer-about">
            <h3>DigiHelic</h3>

            <p>
              DigiHelic is a global IT consulting and digital transformation
              company helping businesses implement, modernize, and manage
              enterprise technology solutions across SAP, Salesforce, Oracle,
              Microsoft, Java, cloud, and infrastructure platforms.
            </p>

            <div className="socials">
              <a
                href="https://www.linkedin.com/company/digihelic-solutions-pvt-ltd/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigiHelic LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.1 3 3.17 3.93 3.17 5.08s.93 2.08 2.08 2.08 2.08-.93 2.08-2.08S6.4 3 5.25 3ZM20.83 13.41c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.09-3.38 1.86V8.5H9.75V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.38l.32-6.59Z" />
                </svg>
              </a>

              <a
                href="https://x.com/digihelic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigiHelic X"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.9 2.5h3.68l-8.04 9.19L24 21.5h-7.41l-5.8-7.58L4.16 21.5H.47l8.6-9.83L0 2.5h7.6l5.24 6.93L18.9 2.5Zm-1.29 17.03h2.04L6.49 4.32H4.3L17.61 19.53Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/digihelic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigiHelic Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
                </svg>
              </a>

              <a
                href="https://youtu.be/iAm_px-zIWU"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DigiHelic YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.27 3.6-6.27 3.6Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>

            <ul>
              <li>Email: info@digihelic.com</li>

              <li>
                India: R Square Building, 1st Floor, Office #101, Warje, Pune
                411058, India
              </li>

              <li>
                USA: 1309 Coffeen Avenue STE 1200, Sheridan, WY 82801, USA
              </li>

              <li>
                UAE: Digi Helic Information Technology Consultants L.L.C, Port
                Saeed, Dubai, UAE
              </li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Our Services</h4>

            <ul>
              <li>SAP Consulting and Implementation</li>
              <li>Salesforce Consulting</li>
              <li>Oracle Solutions</li>
              <li>Microsoft Solutions</li>
              <li>Java Application Development</li>
              <li>Citrix and VMware Solutions</li>
              <li>Application Management Services</li>
              <li>GCC Solutions</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {currentYear} DigiHelic | All Rights Reserved
        </div>
      </footer>

      <style jsx>{`
        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .footer-section {
          background: #031225;
          color: #d8e7ff;
          padding-top: 52px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr 1.3fr;
          gap: 34px;
        }

        .footer-section h3,
        .footer-section h4 {
          color: #ffffff;
          margin: 0 0 16px;
        }

        .footer-about p,
        .footer-section li {
          color: #b9c8dc;
          line-height: 1.7;
          font-size: 14px;
        }

        .footer-section ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .footer-section li + li {
          margin-top: 8px;
        }

        .footer-section a {
          color: #b9c8dc;
          text-decoration: none;
        }

        .footer-section a:hover {
          color: #ffffff;
        }

        .socials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .socials a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.25s ease;
        }

        .socials a svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        .socials a:hover {
          background: #1cc3e8;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          padding: 18px 16px;
          margin-top: 36px;
          color: #9fb1c8;
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }

          .footer-about {
            grid-column: 1 / -1;
            max-width: 700px;
          }
        }

        @media (max-width: 720px) {
          .container {
            width: min(100% - 32px, 1180px);
          }

          .footer-section {
            padding-top: 40px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-about {
            grid-column: auto;
            max-width: none;
          }

          .footer-section h3 {
            font-size: 24px;
            margin-bottom: 12px;
          }

          .footer-section h4 {
            font-size: 18px;
            margin-bottom: 12px;
          }

          .footer-about p,
          .footer-section li {
            font-size: 14px;
            line-height: 1.75;
          }

          .socials {
            margin-top: 16px;
            gap: 12px;
          }

          .socials a {
            width: 44px;
            height: 44px;
          }

          .socials a svg {
            width: 20px;
            height: 20px;
          }

          .footer-bottom {
            margin-top: 30px;
            padding: 16px;
            font-size: 13px;
            line-height: 1.5;
          }
        }
      `}</style>
    </>
  );
}