"use client";

import Link from "next/link";

const blogs = [
  {
    category: "SAP & Data",
    title: "5 Ways to Manage Your Data with SAP",
    description:
      "Discover how SAP HANA helps businesses centralize data, improve reporting, strengthen security, and make faster decisions with real-time insights.",
    image: "/Images/SAP.png",
    href: "/blogs/manage-data-with-sap",
    date: "SAP Insights",
    readTime: "6 min read",
  },
  {
    category: "SAP HANA",
    title: "SAP HANA: New Opportunities with the Latest Release",
    description:
      "Explore how SAP HANA supports high-speed data processing, advanced analytics, cloud flexibility, performance optimization, and business continuity.",
    image: "/Images/SAP HANA.png",
    href: "/blogs/sap-hana-new-opportunities",
    date: "Enterprise Technology",
    readTime: "7 min read",
  },
  {
    category: "Cloud Transformation",
    title: "Modernizing Enterprise Operations with Cloud Solutions",
    description:
      "Learn how cloud technology helps organizations improve agility, reduce infrastructure complexity, optimize costs, and build future-ready operations.",
    image: "/Images/Operations with Cloud.png",
    href: "/blogs/cloud-enterprise-modernization",
    date: "Cloud & Innovation",
    readTime: "5 min read",
  },
];


export default function BlogsPage() {
  return (
    <main className="blogs-page">
      <section className="blogs-hero">
        <div className="blogs-container">
          
          <h1>
            Ideas, Technology <span>& Innovation</span>
          </h1>

          <p>
            Explore expert insights on SAP, cloud, enterprise applications,
            digital transformation, AI, automation, and modern business
            technology.
          </p>
        </div>
      </section>

      <section className="featured-section">
        <div className="blogs-container">
          <div className="section-heading">
            <div>
              <span className="section-kicker">FEATURED INSIGHT</span>
              <h2>Transform Data into Business Value with SAP HANA</h2>
            </div>

            <Link href="/blogs/sap-hana-new-opportunities" className="view-all">
              Read Article <span>→</span>
            </Link>
          </div>

          <div className="featured-card">
            <div className="featured-image-wrap">
              <img
                src="/Images/SAP HANA.png"
                alt="SAP HANA enterprise data and analytics"
                className="featured-image"
              />
            </div>

            <div className="featured-content">
              <span className="article-category">SAP HANA & ANALYTICS</span>

              <h3>SAP HANA: Building Smarter, Faster Enterprise Operations</h3>

              <p>
                SAP HANA enables organizations to process data faster, improve
                business visibility, and make informed decisions with real-time
                analytics. Learn how modern enterprises use SAP HANA to reduce
                complexity and unlock new growth opportunities.
              </p>

              <div className="article-meta">
                <span>Enterprise Technology</span>
                <span className="meta-dot">•</span>
                <span>7 min read</span>
              </div>

              <Link
                href="/blogs/sap-hana-new-opportunities"
                className="primary-btn"
              >
                Read Full Article <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="latest-section">
        <div className="blogs-container">
          <div className="latest-heading">
            <div>
              <span className="section-kicker">LATEST ARTICLES</span>
              <h2>Explore Our Latest Insights</h2>
            </div>

            <p>
              Practical technology insights to help businesses modernize,
              innovate, and grow.
            </p>
          </div>

          <div className="blog-grid">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.title}>
                <Link href={blog.href} className="blog-image-link">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />
                </Link>

                <div className="blog-card-content">
                  <span className="article-category">{blog.category}</span>

                  <h3>
                    <Link href={blog.href}>{blog.title}</Link>
                  </h3>

                  <p>{blog.description}</p>

                  <div className="card-bottom">
                    <div className="article-meta">
                      <span>{blog.date}</span>
                      <span className="meta-dot">•</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <Link href={blog.href} className="read-more">
                      Read More <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blogs-cta">
        <div className="blogs-container cta-inner">
          <div>
            <span className="section-kicker cta-kicker">
              LET’S BUILD THE FUTURE
            </span>

            <h2>Ready to Modernize Your Business?</h2>

            <p>
              Partner with DigiHelic for SAP, Salesforce, Oracle, Microsoft,
              cloud, AI, product engineering, and enterprise technology
              solutions.
            </p>
          </div>

          <Link href="/contact" className="cta-button">
            Talk to Our Experts <span>→</span>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .blogs-page {
          background: #f8fafc;
          color: #0f172a;
        }

        .blogs-container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .blogs-hero {
          padding: 105px 0 92px;
          color: #ffffff;
          background:
            radial-gradient(
              circle at 82% 18%,
              rgba(19, 168, 255, 0.38),
              transparent 28%
            ),
            radial-gradient(
              circle at 18% 95%,
              rgba(0, 91, 187, 0.34),
              transparent 34%
            ),
            linear-gradient(135deg, #031329 0%, #061f46 52%, #031126 100%);
        }

        .hero-kicker,
        .section-kicker {
          display: inline-block;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.8px;
          color: #168cf2;
          text-transform: uppercase;
        }

        .blogs-hero h1 {
          max-width: 790px;
          margin: 15px 0 20px;
          color: #ffffff;
          font-size: clamp(42px, 6vw, 72px);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1.05;
        }

        .blogs-hero h1 span {
          color: #23b3ff;
        }

        .blogs-hero p {
          max-width: 670px;
          margin: 0;
          color: rgba(255, 255, 255, 0.83);
          font-size: 18px;
          line-height: 1.75;
        }

        .featured-section {
          padding: 88px 0 72px;
          background: #ffffff;
        }

        .section-heading,
        .latest-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 32px;
        }

        .section-heading h2,
        .latest-heading h2 {
          margin: 10px 0 0;
          color: #0b1e3a;
          font-size: clamp(30px, 3.5vw, 46px);
          font-weight: 850;
          letter-spacing: -1.2px;
          line-height: 1.15;
        }

        .view-all,
        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #0c76d8;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          white-space: nowrap;
        }

        .view-all span,
        .read-more span,
        .primary-btn span,
        .cta-button span {
          font-size: 19px;
          line-height: 1;
          transition: transform 0.2s ease;
        }

        .view-all:hover span,
        .read-more:hover span,
        .primary-btn:hover span,
        .cta-button:hover span {
          transform: translateX(4px);
        }

        .featured-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border: 1px solid #e5edf7;
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 18px 48px rgba(3, 31, 70, 0.1);
        }

        .featured-image-wrap {
          min-height: 400px;
          overflow: hidden;
          background: #eaf4ff;
        }

        .featured-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .featured-card:hover .featured-image {
          transform: scale(1.04);
        }

        .featured-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 52px;
        }

        .article-category {
          display: inline-block;
          margin-bottom: 13px;
          color: #0078d7;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .featured-content h3,
        .blog-card h3 {
          margin: 0;
          color: #0b1e3a;
          font-weight: 850;
          letter-spacing: -0.6px;
          line-height: 1.22;
        }

        .featured-content h3 {
          font-size: clamp(26px, 2.6vw, 38px);
        }

        .featured-content p {
          margin: 19px 0;
          color: #52637a;
          font-size: 16px;
          line-height: 1.75;
        }

        .article-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          color: #718096;
          font-size: 13px;
          font-weight: 650;
        }

        .meta-dot {
          color: #168cf2;
        }

        .primary-btn,
        .cta-button {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 27px;
          padding: 14px 21px;
          border-radius: 8px;
          background: #087ded;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 13px 28px rgba(8, 125, 237, 0.25);
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .primary-btn:hover,
        .cta-button:hover {
          background: #0569ca;
          transform: translateY(-2px);
        }

        .latest-section {
          padding: 86px 0 96px;
          background: #f8fafc;
        }

        .latest-heading p {
          max-width: 400px;
          margin: 0;
          color: #5d6d84;
          font-size: 16px;
          line-height: 1.7;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 25px;
        }

        .blog-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e5edf7;
          border-radius: 18px;
          background: #ffffff;
          box-shadow: 0 10px 26px rgba(3, 31, 70, 0.06);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 38px rgba(3, 31, 70, 0.12);
        }

        .blog-image-link {
          display: block;
          height: 220px;
          overflow: hidden;
          background: #eaf4ff;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.35s ease;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.05);
        }

        .blog-card-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 26px 24px 24px;
        }

        .blog-card h3 {
          font-size: 22px;
        }

        .blog-card h3 a {
          color: inherit;
          text-decoration: none;
        }

        .blog-card h3 a:hover {
          color: #087ded;
        }

        .blog-card p {
          margin: 15px 0 22px;
          color: #5e6e84;
          font-size: 15px;
          line-height: 1.72;
        }

        .card-bottom {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          margin-top: auto;
        }

        .blogs-cta {
          padding: 74px 0;
          background:
            radial-gradient(
              circle at 83% 16%,
              rgba(35, 179, 255, 0.32),
              transparent 26%
            ),
            linear-gradient(120deg, #031329, #082e61);
        }

        .cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
        }

        .cta-kicker {
          color: #75cbff;
        }

        .cta-inner h2 {
          margin: 12px 0;
          color: #ffffff;
          font-size: clamp(30px, 3.5vw, 47px);
          font-weight: 850;
          letter-spacing: -1px;
        }

        .cta-inner p {
          max-width: 690px;
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          line-height: 1.7;
        }

        .cta-button {
          flex-shrink: 0;
          margin: 0;
          background: #ffffff;
          color: #075ba9;
          box-shadow: none;
        }

        .cta-button:hover {
          background: #dff2ff;
        }

        @media (max-width: 960px) {
          .featured-card {
            grid-template-columns: 1fr;
          }

          .featured-image-wrap {
            min-height: 300px;
          }

          .blog-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .blogs-container {
            width: min(100% - 32px, 620px);
          }

          .blogs-hero {
            padding: 75px 0 68px;
          }

          .section-heading,
          .latest-heading,
          .cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .featured-content {
            padding: 35px 27px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}