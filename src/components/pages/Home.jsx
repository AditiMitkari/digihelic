"use client";

import React, { useEffect, useState } from "react";

const imageBase = "/images/home";

const heroBannerImages = [
  "/Images/banner%20image%202.png",
  "/Images/banner%20image%203.png",
  "/Images/banner%20image%204.png",
];

// Change these values to control slider timing.
const HERO_VIDEO_DURATION = 8000;
const HERO_BANNER_DURATION = 4500;

function Home() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  const stats = [
    { value: "350+", label: "Global Clients" },
    { value: "100+", label: "Enterprise Solutions" },
    { value: "250+", label: "Technology Experts" },
  ];

  const services = [
    {
      icon: "/Images/SAPsliver.jpeg",
      title: "SAP Silver Partner Consulting and Implementation",
      desc: "Plan, implement, customize, and support SAP solutions to improve operational efficiency and business performance.",
      link: "/services/sap",
    },
    {
      icon: "/Images/salesforce.png",
      title: "Salesforce Consulting and CRM Solutions",
      desc: "Improve customer engagement, sales visibility, service management, workflows, and CRM automation.",
      link: "/services/salesforce",
    },
    {
      icon: "/Images/oracal.png",
      title: "Oracle Solutions",
      desc: "Oracle consulting, implementation, integration, reporting, migration, and support for business-critical systems.",
      link: "/services/oracle",
    },
    {
      icon: "/Images/microsoft.png",
      title: "Microsoft Solutions",
      desc: "Cloud, productivity, application development, analytics, Dynamics 365, Power Platform, and enterprise integration services.",
      link: "/services/microsoft",
    },
    {
      icon: "/Images/java.png",
      title: "Java Application Development",
      desc: "Secure, scalable, and high-performance enterprise applications, APIs, modernization, and maintenance.",
      link: "/java",
    },
    {
      icon: "/Images/citrix.png",
      title: "Citrix and VMware Infrastructure Solutions",
      desc: "Virtualization, migration, cloud infrastructure, and workspace modernization across Citrix Cloud, Azure, AWS, and hybrid environments.",
      link: "/services/Citrix-VMware",
    },
    {
      icon: "/Images/ERPNext.png",
      title: "ERPNext Solutions",
      desc: "Flexible and cost-effective ERPNext implementation, customization, integration, migration, and support for growing businesses.",
      link: "/services/erpnext",
    },

    {
      icon: "/Images/AMS.png",
      title: "Application Management Services",
      desc: "Ongoing support, monitoring, enhancement, integration, modernization, and maintenance for enterprise applications.",
      link: "/services/ams",
    },

  ];

  const whyChoose = [
    { icon: "☆", title: "Enterprise Technology Expertise" },
    { icon: "◎", title: "Industry-Specific Solutions" },
    { icon: "🌐", title: "Global Delivery Presence" },
    { icon: "👨‍💼", title: "Experienced Consultants" },
    { icon: "⚙", title: "End-to-End Implementation & Support" },
    { icon: "🔒", title: "Scalable & Secure Solutions" },
  ];

  const products = [
    {
      title: "DigiHireAI",
      desc: "AI-powered hiring and interview automation platform.",
      img: "/Images/Digihire AI logo .png",
      link: "/products/digihireai",
    },
    {
      title: "GlobalCaseway",
      desc: "Digital case management and workflow platform for immigration and legal process management.",
      img: "/Images/GlobalCaseway logo.png",
      link: "/products/globalcaseway",
      imgWidth: "210px",
      imgHeight: "95px",
    },
  ];

  const portfolio = [
    {
      title: "E-Support Portal Site",
      desc: "A digital support portal designed to streamline customer service, ticket management, and communication.",
      img: "/Images/E-Support Portal.png",
      link: "/portfolio/e-support-portal",
    },
    {
      title: "IoT Case Study",
      desc: "An IoT solution focused on connected devices, monitoring, automation, and data-driven insights.",
      img: "/Images/IoT Case Study.png",
      link: "/portfolio/iot-case-study",
    },
    {
      title: "Salesforce Case Study",
      desc: "A Salesforce project focused on CRM optimization, workflow automation, and reporting.",
      img: "/Images/Salesforce Case Study.png",
      link: "/portfolio/salesforce-case-study",
    },
  ];

  const blogs = [
    {
      title: "SAP HANA: New Opportunities With the Latest Release",
      desc: "Learn how SAP HANA helps businesses improve data processing, analytics, and enterprise performance.",
      img: "/Images/SAP HANA.png",
      link: "/blogs/sap-hana-new-opportunities",
    },
    {
      title: "5 Ways to Manage Your Data With SAP",
      desc: "Discover practical ways SAP can help organizations manage, analyze, and use business data more effectively.",
      img: "/Images/SAP.png",
      link: "/blogs/manage-data-with-sap",
    },
    {
      title: "Modernizing Enterprise Operations with Cloud Solutions",
      desc: "Learn how cloud technology helps enterprises improve agility, reduce costs, and drive transformation.",
      img: "/Images/Operations with Cloud.png",
      link: "/blogs/cloud-enterprise-modernization",
    },
  ];

  const isVideoSlide = activeHeroSlide === 0;

  const showNextHeroSlide = () => {
    setActiveHeroSlide((currentSlide) =>
      currentSlide === heroBannerImages.length ? 0 : currentSlide + 1
    );
  };

  const showPreviousHeroSlide = () => {
    setActiveHeroSlide((currentSlide) =>
      currentSlide === 0 ? heroBannerImages.length : currentSlide - 1
    );
  };

  useEffect(() => {
    const slideDuration =
      activeHeroSlide === 0
        ? HERO_VIDEO_DURATION
        : HERO_BANNER_DURATION;

    const slideTimer = window.setTimeout(() => {
      setActiveHeroSlide((currentSlide) =>
        currentSlide === heroBannerImages.length ? 0 : currentSlide + 1
      );
    }, slideDuration);

    return () => window.clearTimeout(slideTimer);
  }, [activeHeroSlide]);

  return (
    <main className="dh-home">
      <section
        className="hero-section"
        aria-labelledby="home-hero-title"
        style={{
          width: "100%",
          height: "430px",
          minHeight: "430px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {isVideoSlide ? (
          <>
            <video
              key="global-world-map-video"
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source
                src="/video/Global world map animation.mp4"
                type="video/mp4"
              />
            </video>

            <div className="hero-video-overlay" aria-hidden="true"></div>

            <div className="hero-content">
              <div className="hero-text">
                <h1
                  id="home-hero-title"
                  className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]"
                  style={{
                    margin: "0 0 18px",
                    letterSpacing: "-0.6px",
                    fontWeight: 800,
                    color: "#ffffff",
                    maxWidth: "760px",
                  }}
                >
                  Industry Experts. Technology Innovators.
                  <span
                    style={{
                      display: "block",
                      color: "#d2d8dc",
                    }}
                  >
                    Trusted Digital Transformation Partner.
                  </span>
                </h1>

                <p className="hero-description">
                  DigiHelic helps businesses modernize operations with SAP,
                  Salesforce, Oracle, Microsoft, cloud, application development,
                  and managed IT services. We combine industry knowledge with
                  technology expertise to deliver scalable, secure, and
                  business-focused solutions.
                </p>

                <div className="hero-actions">

                  <a
                    href="/services"
                    className="btn-primary"
                    aria-label="Explore DigiHelic enterprise technology services"
                  >
                    Explore Our Services <span aria-hidden="true">›</span>
                  </a>

                  <a
                    href="/contact"
                    className="btn-outline"
                    aria-label="Contact DigiHelic technology expert"
                  >
                    Talk to an Expert
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <img
            key={`hero-banner-${activeHeroSlide}`}
            src={heroBannerImages[activeHeroSlide - 1]}
            alt={`DigiHelic enterprise technology banner ${activeHeroSlide}`}
            className="hero-video"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}

        <button
          type="button"
          className="hero-slider-control hero-slider-control-left"
          onClick={showPreviousHeroSlide}
          aria-label="Show previous hero slide"
        >
          <span aria-hidden="true">‹</span>
        </button>

        <button
          type="button"
          className="hero-slider-control hero-slider-control-right"
          onClick={showNextHeroSlide}
          aria-label="Show next hero slide"
        >
          <span aria-hidden="true">›</span>
        </button>

        <div className="hero-slider-dots" aria-label="Hero slider navigation">
          {[0, 1, 2, 3].map((slideIndex) => (
            <button
              type="button"
              key={slideIndex}
              onClick={() => setActiveHeroSlide(slideIndex)}
              className={`hero-slider-dot ${activeHeroSlide === slideIndex ? "active" : ""
                }`}
              aria-label={
                slideIndex === 0
                  ? "Show hero video"
                  : `Show banner image ${slideIndex}`
              }
              aria-current={activeHeroSlide === slideIndex ? "true" : undefined}
            />
          ))}
        </div>
      </section>

      <section
        className="about-section section-padding"
        aria-labelledby="about-heading"
      >
        <div className="container two-column">
          <div className="image-card">
            <img
              src="/Images/About DigiHelic.png"
              alt="DigiHelic global technology consulting and enterprise solutions team"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="content-block">
            <h2
              id="about-heading"
              className="about-title !text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]"
            >
              We Are More Than a Software Technology Company
            </h2>

            <p>
              At DigiHelic, we help businesses transform ideas into reliable
              digital solutions. Our team works with organizations across
              industries to implement enterprise platforms, modernize
              applications, improve business processes, and support long-term
              technology growth.
            </p>

            <p>
              From SAP and Salesforce implementation to Java development, cloud
              migration, infrastructure modernization, and application
              management, we focus on delivering solutions that are practical,
              scalable, and aligned with each client’s business goals.
            </p>

            <div
              className="stats-grid"
              aria-label="DigiHelic company statistics"
            >
              {stats.map((item) => (
                <div className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="services-section section-padding"
        aria-labelledby="services-heading"
      >
        <div className="section-heading">
          <h2
            id="services-heading"
            className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]"
          >
            Enterprise IT Services for Digital Transformation
          </h2>

          <p>
            Designed to improve performance, agility, security, and business
            growth.
          </p>
        </div>

        <div className="container service-grid">
          {services.map((service) => (
            <a
              href={service.link}
              className={`service-card ${service.wide ? "wide-card" : ""}`}
              key={service.title}
              aria-label={`Learn more about ${service.title}`}
            >
              <div className="service-icon" aria-hidden="true">
                <img
                  src={service.icon}
                  alt=""
                  className="service-icon-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>

              <span className="card-arrow" aria-hidden="true">
                ›
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        className="why-section section-padding"
        aria-labelledby="why-heading"
      >
        <div className="section-heading">
          <h2
            id="why-heading"
            className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]"
          >
            Why Choose DigiHelic
          </h2>
        </div>

        <div className="container why-grid">
          {whyChoose.map((item) => (
            <div className="why-card" key={item.title}>
              <div className="why-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section
        className="products-section section-padding"
        aria-labelledby="products-heading"
      >
        <div className="section-heading">
          <h2
            id="products-heading"
            className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]"
          >
            Digital Products Built for Modern Businesses
          </h2>
        </div>

        <div className="container product-grid">
          {products.map((product) => (
            <a
              href={product.link}
              className="product-card"
              key={product.title}
              aria-label={`View ${product.title} product details`}
            >
              <img
                src={product.img}
                alt={`${product.title} product logo`}
                className="product-logo"
                loading="lazy"
                decoding="async"
                style={{
                  width: product.imgWidth || "115px",
                  height: product.imgHeight || "65px",
                  objectFit: "contain",
                  borderRadius: 0,
                  margin: "0 auto",
                  display: "block",
                }}
              />

              <div>
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        className="portfolio-section section-padding"
        aria-labelledby="portfolio-heading"
      >
        <div className="section-heading">
          <h2
            id="portfolio-heading"
            className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]"
          >
            Our Work
          </h2>
        </div>

        <div className="container portfolio-grid">
          {portfolio.map((item) => (
            <a
              href={item.link}
              className="portfolio-card"
              key={item.title}
              aria-label={`Read case study: ${item.title}`}
            >
              <img
                src={item.img}
                alt={`${item.title} DigiHelic case study`}
                loading="lazy"
                decoding="async"
              />

              <div className="portfolio-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        className="testimonial-section section-padding"
        aria-labelledby="testimonial-heading"
      >
        <div className="container testimonial-wrap">
          <div className="testimonial-title">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>

            <h2
              id="testimonial-heading"
              className="!text-[26px] md:!text-[30px] lg:!text-[32px] !leading-[1.2]"
            >
              Trusted by Businesses for Reliable Technology Delivery
            </h2>

            <p>What Our Clients Say</p>
          </div>

          <div className="testimonial-card">
            <p>
              We are delighted to have engaged with the DigiHelic team during
              our SAP implementation project. Their quality of service,
              responsiveness, and professionalism were key drivers throughout
              the engagement. The team was reliable, knowledgeable, and helped
              us meet the project deadlines defined by our business.
            </p>

            <strong>Ajit Rane</strong>

            <span>
              Associate Vice President – IT, BLACK BOX LIMITED
              <br />
              Formerly AGC Networks Limited
            </span>
          </div>
        </div>
      </section>

      <section
        className="blogs-section section-padding"
        aria-labelledby="blogs-heading"
      >
        <div className="section-heading">
          <h2
            id="blogs-heading"
            className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]"
          >
            Our Blogs
          </h2>

          <p>
            Explore our thoughts on SAP, enterprise technology, cloud,
            automation, and digital transformation.
          </p>
        </div>

        <div className="container blog-grid">
          {blogs.map((blog) => (
            <a
              href={blog.link}
              className="blog-card"
              key={blog.title}
              aria-label={`Read blog: ${blog.title}`}
            >
              <img
                src={blog.img}
                alt={`${blog.title} blog article`}
                loading="lazy"
                decoding="async"
              />

              <div className="blog-body">
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <span>Read More →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <div className="container cta-content">
          <h2
            id="cta-heading"
            className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12]"
          >
            Ready to Modernize Your Business Technology?
          </h2>

          <p>
            Partner with DigiHelic to design, implement, and manage scalable
            enterprise solutions.
          </p>

          <a
            href="/contact"
            className="btn-light"
            aria-label="Contact DigiHelic today"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <style jsx>{`
        .dh-home {
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
          color: #0b1633;
          background: #ffffff;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .section-padding {
          padding: 58px 0;
        }

        .hero-section {
          background:
            radial-gradient(
              circle at 75% 35%,
              rgba(31, 140, 255, 0.35),
              transparent 35%
            ),
            linear-gradient(135deg, #06152e 0%, #082f63 55%, #02142d 100%);
          color: #ffffff;
          min-height: 560px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-video-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(2, 12, 28, 0.9) 0%,
              rgba(2, 12, 28, 0.74) 45%,
              rgba(2, 12, 28, 0.58) 100%
            );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          gap: 44px;
          padding: 0 82px;
          box-sizing: border-box;
        }

        .hero-text {
          max-width: 760px;
        }

        .hero-text h1 span {
          color: #18a7ff;
        }

        .hero-text p {
          color: #d8e7ff;
          font-size: 17px;
          line-height: 1.7;
          max-width: 680px;
          margin: 0 0 28px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .hero-slider-control {
          position: absolute;
          top: 50%;
          z-index: 5;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          padding: 0;
          transform: translateY(-50%);
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 50%;
          background: rgba(5, 20, 44, 0.5);
          color: #ffffff;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
        }

        .hero-slider-control:hover {
          border-color: #ffffff;
          background: #0d6efd;
          transform: translateY(-50%) scale(1.06);
        }

        .hero-slider-control span {
          display: block;
          font-size: 36px;
          line-height: 1;
          font-weight: 300;
          margin-top: -4px;
        }

        .hero-slider-control-left {
          left: 22px;
        }

        .hero-slider-control-right {
          right: 22px;
        }

        .hero-slider-dots {
          position: absolute;
          z-index: 5;
          left: 50%;
          bottom: 22px;
          display: flex;
          align-items: center;
          gap: 9px;
          transform: translateX(-50%);
        }

        .hero-slider-dot {
          width: 9px;
          height: 9px;
          padding: 0;
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .hero-slider-dot:hover {
          background: #ffffff;
        }

        .hero-slider-dot.active {
          width: 27px;
          border-radius: 10px;
          background: #ffffff;
        }

        .btn-primary,
        .btn-outline,
        .btn-light {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 24px;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .btn-primary {
          background: #0d6efd;
          color: #ffffff;
          box-shadow: 0 14px 30px rgba(13, 110, 253, 0.3);
        }

        .btn-outline {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.55);
        }

        .btn-light {
          color: #0b3c85;
          background: #ffffff;
        }

        .btn-primary:hover,
        .btn-outline:hover,
        .btn-light:hover {
          transform: translateY(-2px);
        }

        .two-column {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 48px;
          align-items: center;
        }

        .image-card img {
          width: 100%;
          border-radius: 18px;
          box-shadow: 0 18px 42px rgba(15, 45, 85, 0.12);
        }

        .eyebrow {
          display: inline-block;
          color: #0d6efd;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 850;
          margin-bottom: 10px;
        }

        .content-block h2,
        .section-heading h2,
        .cta-content h2 {
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.15;
          margin: 0 0 18px;
          color: #1e376d;
          font-weight: 850;
          letter-spacing: -0.8px;
        }

        .content-block p,
        .section-heading p {
          font-size: 16px;
          line-height: 1.75;
          color: #536076;
          margin: 0 0 14px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 28px;
        }

        .stat-card {
          background: #f7fbff;
          border: 1px solid #e3eefc;
          border-radius: 14px;
          padding: 20px;
          text-align: center;
        }

        .stat-card strong {
          display: block;
          font-size: 28px;
          color: #0d6efd;
          margin-bottom: 5px;
        }

        .stat-card span {
          color: #536076;
          font-size: 14px;
          font-weight: 700;
        }

        .services-section,
        .products-section,
        .blogs-section {
          background: #f7fbff;
        }

        .section-heading {
          text-align: center;
          width: min(760px, calc(100% - 40px));
          margin: 0 auto 36px;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .service-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e3ebf7;
          border-radius: 16px;
          padding: 22px;
          display: flex;
          gap: 16px;
          text-decoration: none;
          color: inherit;
          min-height: 150px;
          box-shadow: 0 16px 34px rgba(15, 45, 85, 0.05);
          transition: 0.22s ease;
        }

        .service-card:hover,
        .product-card:hover,
        .portfolio-card:hover,
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 48px rgba(15, 45, 85, 0.12);
        }

        .service-icon {
          min-width: 46px;
          height: 46px;
          border-radius: 14px;
          background: #eff6ff;
          color: #0d6efd;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 14px;
        }

        .service-icon-img {
          width: 46px;
          height: 46px;
          object-fit: contain;
        }

        .service-card h3 {
          margin: 0 0 8px;
          color: #1d3567;
          font-size: 17px;
          line-height: 1.25;
        }

        .service-card p {
          color: #536076;
          font-size: 14px;
          line-height: 1.55;
          margin: 0;
        }

        .card-arrow {
          position: absolute;
          right: 18px;
          bottom: 14px;
          color: #0d6efd;
          font-size: 28px;
          font-weight: 700;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }

        .why-card {
          text-align: center;
          border-right: 1px solid #e6edf8;
          padding: 16px;
        }

        .why-icon {
          font-size: 34px;
          color: #0d6efd;
          margin-bottom: 12px;
        }

        .why-card h3 {
          color: #1d3567;
          font-size: 15px;
          margin: 0;
          line-height: 1.35;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .product-card {
          background: #ffffff;
          border: 1px solid #e3ebf7;
          border-radius: 18px;
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 20px;
          align-items: center;
          padding: 16px;
          text-decoration: none;
          color: inherit;
          transition: 0.22s ease;
        }

        .product-card h3,
        .portfolio-card h3,
        .blog-card h3 {
          margin: 0 0 8px;
          color: #1d3567;
          font-size: 20px;
        }

        .product-card p,
        .portfolio-card p,
        .blog-card p {
          margin: 0;
          color: #536076;
          line-height: 1.55;
          font-size: 14px;
        }

        .portfolio-grid,
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .portfolio-card,
        .blog-card {
          background: #ffffff;
          border: 1px solid #e3ebf7;
          border-radius: 18px;
          overflow: hidden;
          color: inherit;
          text-decoration: none;
          box-shadow: 0 16px 34px rgba(15, 45, 85, 0.05);
          transition: 0.22s ease;
        }

        .portfolio-card img,
        .blog-card img {
          width: 100%;
          height: 170px;
          object-fit: cover;
        }

        .portfolio-body,
        .blog-body {
          padding: 20px;
        }

        .blog-body span {
          display: inline-block;
          margin-top: 12px;
          color: #0d6efd;
          font-weight: 800;
        }

        .testimonial-section {
          background: linear-gradient(135deg, #eef6ff, #ffffff);
        }

        .testimonial-wrap {
          display: grid;
          grid-template-columns: 0.9fr 1.4fr;
          gap: 28px;
          align-items: center;
        }

        .quote-mark {
          color: #0d6efd;
          font-size: 86px;
          line-height: 0.8;
          font-weight: 900;
        }

        .testimonial-title p {
          color: #0d6efd;
          font-weight: 800;
          margin: 0;
        }

        .testimonial-card {
          background: #ffffff;
          border: 1px solid #e3ebf7;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 18px 42px rgba(15, 45, 85, 0.08);
        }

        .testimonial-card p {
          color: #344156;
          line-height: 1.75;
          margin: 0 0 18px;
        }

        .testimonial-card strong {
          display: block;
          color: #1d3567;
          margin-bottom: 4px;
        }

        .testimonial-card span {
          color: #64748b;
          font-size: 14px;
        }

        .cta-section {
          background:
            radial-gradient(
              circle at 80% 40%,
              rgba(31, 140, 255, 0.25),
              transparent 35%
            ),
            linear-gradient(135deg, #05224d, #06152e);
          color: #ffffff;
          padding: 58px 0;
          text-align: center;
        }

        .cta-content p {
          color: #d8e7ff;
          margin: 0 0 22px;
        }

        .cta-content h2 {
          color: #ffffff;
        }

        @media (max-width: 1200px) {
          .service-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .why-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .hero-section {
            height: auto !important;
            min-height: 520px !important;
            padding: 78px 0;
          }

          .hero-content {
            width: 100%;
            padding-left: 64px;
            padding-right: 64px;
          }

          .two-column,
          .testimonial-wrap {
            grid-template-columns: 1fr;
          }

          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .container,
          .section-heading {
            width: min(100% - 28px, 420px);
          }

          .hero-content {
            width: 100%;
            padding-left: 56px;
            padding-right: 56px;
          }

          .section-padding {
            padding: 44px 0;
          }

          .hero-section {
            height: auto !important;
            min-height: 520px !important;
            padding: 70px 0;
          }

          .hero-text {
            max-width: 100%;
          }

          .hero-text p {
            font-size: 15px;
            line-height: 1.65;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary,
          .btn-outline,
          .btn-light {
            width: 100%;
            min-height: 48px;
          }

          .hero-slider-control {
            width: 38px;
            height: 38px;
          }

          .hero-slider-control span {
            font-size: 30px;
          }

          .hero-slider-control-left {
            left: 12px;
          }

          .hero-slider-control-right {
            right: 12px;
          }

          .hero-slider-dots {
            bottom: 16px;
          }

          .service-grid,
          .portfolio-grid,
          .blog-grid,
          .product-grid,
          .stats-grid,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            padding: 18px;
            min-height: auto;
          }

          .product-card {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .portfolio-card img,
          .blog-card img {
            height: 190px;
          }

          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .why-card {
            border-right: none;
            border: 1px solid #e6edf8;
            border-radius: 14px;
          }

          .content-block p,
          .section-heading p,
          .testimonial-card p {
            font-size: 15px;
            line-height: 1.65;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 560px !important;
            padding: 64px 0;
          }

          .container,
          .section-heading {
            width: min(100% - 24px, 390px);
          }

          .hero-content {
            width: 100%;
            padding-left: 52px;
            padding-right: 52px;
          }

          .section-padding {
            padding: 38px 0;
          }

          .two-column {
            gap: 28px;
          }

          .stats-grid {
            gap: 12px;
          }

          .stat-card {
            padding: 16px;
          }

          .stat-card strong {
            font-size: 24px;
          }

          .service-card {
            gap: 12px;
          }

          .service-icon {
            min-width: 42px;
            height: 42px;
          }

          .service-icon-img {
            width: 42px;
            height: 42px;
          }

          .why-grid {
            grid-template-columns: 1fr;
          }

          .testimonial-card {
            padding: 22px;
          }

          .quote-mark {
            font-size: 64px;
          }
        }
      `}</style>
    </main>
  );
}

export default Home;
