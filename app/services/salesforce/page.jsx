"use client";

import { useEffect, useRef, useState } from "react";

export default function SalesforcePage() {

  // Service Cloud
  const serviceCloudRef = useRef(null);
  const [serviceCloudVisible, setServiceCloudVisible] = useState(false);

  // Implementation
  const implementationRef = useRef(null);
  const [implementationVisible, setImplementationVisible] = useState(false);

  // Integration
  const integrationRef = useRef(null);
  const [integrationVisible, setIntegrationVisible] = useState(false);

  // Testing
  const testingRef = useRef(null);
  const [testingVisible, setTestingVisible] = useState(false);

  useEffect(() => {
    const createObserver = (ref, setVisible) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        {
          threshold: 0.4,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const observers = [
      createObserver(serviceCloudRef, setServiceCloudVisible),
      createObserver(implementationRef, setImplementationVisible),
      createObserver(integrationRef, setIntegrationVisible),
      createObserver(testingRef, setTestingVisible),
    ];

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="bg-white">

      {/* HERO */}
      <main className="m-0 p-0">
        <section className="relative w-full h-[200px] md:h-[340px] lg:h-[420px] m-0 p-0 overflow-hidden">
          <img
            src="/Images/Salesforce.jpeg"
            className="block w-full h-full object-cover object-[center_35%]"
            alt="Salesforce"
          />
        </section>
      </main>

      {/* SPLIT ANIMATION SECTION */}
      <section
        ref={serviceCloudRef}
        className="relative h-[450px] md:h-[550px] lg:h-[650px] w-full overflow-hidden mt-24"
      >

        <img
          src="/Images/Cloud.jpg"
          alt="Management Directors"
          className={`
absolute
inset-0
h-full
object-cover
transition-all
duration-[1500ms]

${serviceCloudVisible
              ? "w-[70%] scale-100"
              : "w-full scale-110"
            }
`}
        />

        <div
          className={`
absolute
right-0
top-0
h-full
w-[40%]
bg-white
px-12
flex
flex-col
justify-center
transition-all
duration-[1500ms]

${serviceCloudVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
            }
`}
        >

          <p className="text-4xl font-bold mb-6">
            Salesforce Service cloud
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            Salesforce is a cloud-based customer relationship management (CRM)
            platform helping businesses to manage customer relationships better
            and increase efficiency. As businesses of all sizes seek to streamline operations and cut costs,
            Salesforce services can provide the necessary tools to achieve these goals.
          </p>
          <p className="text-gray-600 leading-8 mb-8">
            With the help of our Salesforce services, companies can optimize their operations
            and make improvements in areas such as customer service, sales, and marketing.
            We provide end-to-end Salesforce service to improve overall efficiency with increased automation
            and streamlined processes. With years of experience in Salesforce services, you can trust us as we
            make sure your business is running effectively.
          </p>

        </div>

      </section>

      {/* SALESFORCE CONSULTING SECTION */}
      <section className="w-full mt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT TEXT ================= */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Salesforce Consulting
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Our team offers comprehensive consulting to effectively utilize Salesforce services:
            </p>

            {/* ================= POINTERS ================= */}
            <div className="space-y-6">

              {/* ITEM 1 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  To enable you to identify areas where systems and processes can be improved to increase productivity and reduce overall costs.
                </p>

              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Provide a holistic approach to every aspect of your business from customer relationship management (CRM) to data analysis and more.
                </p>

              </div>

              {/* ITEM 3 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Creating solutions tailored specifically to your needs. This includes creating custom reports and dashboards and developing automation strategies for efficient workflows.
                </p>

              </div>

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="overflow-hidden shadow-xl rounded-xl group">
            <img
              src="/Images/Consulting.jpg"
              alt="Salesforce Consulting"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

        </div>
      </section>

      {/* SPLIT ANIMATION SECTION */}
      <section
        ref={implementationRef}
        className="relative h-[450px] md:h-[550px] lg:h-[650px] w-full overflow-hidden mt-24"
      >

        <img
          src="/Images/Implementation.jpg"
          alt="Implementation"
          className={`
absolute
inset-0
h-full
object-cover
transition-all
duration-[1500ms]

${implementationVisible
              ? "w-[70%] scale-100"
              : "w-full scale-110"
            }
`}
        />

        <div
          className={`
absolute
right-0
top-0
h-full
w-[40%]
bg-white
px-12
flex
flex-col
justify-center
transition-all
duration-[1500ms]

${implementationVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
            }
`}
        >

          <p className="text-4xl font-bold mb-6">
            Implementation
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            DigiHelic offers a wide variety of Salesforce services tailored to fit any business need.
            We ensure the successful implementation of the Salesforce environment for your business,
            by providing:
          </p>

          <div className="space-y-6"></div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              Access to powerful CRM and data analytics capabilities to help you make better decisions, track customer relationships, and improve processes.
            </p>

          </div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              Leveraging integrations to take advantage of the data across different systems to gain a complete view of their customers.
            </p>

          </div>

        </div>

      </section>

      {/* SALESFORCE Implementation SECTION */}
      <section className="w-full mt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT TEXT ================= */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Customization
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              We are committed to providing our clients with a personalized experience by delivering high-quality
              customizations maximising sales processes and increasing productivity, by catering to:
            </p>

            {/* ================= POINTERS ================= */}
            <div className="space-y-6">

              {/* ITEM 1 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Salesforce objects and fields, designing custom forms and creating custom integrations with other tools or systems.
                  Automating workflows and processes.
                </p>

              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Automating workflows and processes.
                </p>

              </div>

              {/* ITEM 3 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Adding features or functionality as needed.
                </p>

              </div>

              {/* ITEM 4 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Developing custom apps and dashboards.
                </p>

              </div>

              {/* ITEM 5 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Tracking customer data from multiple sources in one place.
                </p>

              </div>

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="overflow-hidden shadow-xl rounded-xl group">
            <img
              src="/Images/Customization.jpg"
              alt="Salesforce Consulting"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

        </div>
      </section>

      {/* SPLIT ANIMATION SECTION */}
      <section
        ref={integrationRef}
        className="relative h-[450px] md:h-[550px] lg:h-[650px] w-full overflow-hidden mt-24"
      >

        <img
          src="/Images/Integration 1.jpg"
          alt="Integration"
          className={`
absolute
inset-0
h-full
object-cover
transition-all
duration-[1500ms]

${integrationVisible
              ? "w-[70%] scale-100"
              : "w-full scale-110"
            }
`}
        />

        <div
          className={`
absolute
right-0
top-0
h-full
w-[40%]
bg-white
px-12
flex
flex-col
justify-center
transition-all
duration-[1500ms]

${integrationVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
            }
`}
        >

          <p className="text-4xl font-bold mb-6">
            Integration
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            DigiHelic is a Salesforce integration expert that provides
          </p>

          <div className="space-y-6"></div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              Data migration, customization and support.
            </p>

          </div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              Data synchronization between Salesforce and other systems, such as ERP solutions
              or eCommerce platforms.
            </p>

          </div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              With this integration in place, businesses can access real-time information about customers
              and their interactions across multiple channels. It allows companies to respond to queries or provide improved product recommendations.
            </p>

          </div>

        </div>

      </section>

      {/* SALESFORCE Support SECTION */}
      <section className="w-full mt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT TEXT ================= */}
          <div>

            <h2 className="text-4xl font-bold mb-6">
              Support
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              DigiHelic is the premier provider of Salesforce support and services.
              Our team of certified professionals are well-versed in Salesforce, ensuring that your business will get the highest level of Salesforce expertise.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              We offer comprehensive support for all aspects of Salesforce, including:
            </p>

            {/* ================= POINTERS ================= */}
            <div className="space-y-6">

              {/* ITEM 1 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Customization, Implementation, Training, and Maintenance.
                </p>

              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Customize each project, to ensure your clients are met with quality and results.
                </p>

              </div>

              {/* ITEM 3 */}
              <div className="flex items-start gap-3 group">

                <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

                  <svg
                    className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>

                </span>

                <p className="text-gray-700 text-lg leading-8">
                  Provide technical assistance to ensure your system is running smoothly at all times.
                </p>

              </div>

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="overflow-hidden shadow-xl rounded-xl group">
            <img
              src="/Images/Support.jpg"
              alt="Salesforce Consulting"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

        </div>
      </section>

      {/* SPLIT ANIMATION SECTION */}
      <section
        ref={testingRef}
        className="relative h-[450px] md:h-[550px] lg:h-[650px] w-full overflow-hidden mt-24 mb-24"
      >

        <img
          src="/Images/Testing and QA.jpeg"
          alt="Integration"
          className={`
absolute
inset-0
h-full
object-cover
transition-all
duration-[1500ms]

${testingVisible
              ? "w-[70%] scale-100"
              : "w-full scale-110"
            }
`}
        />

        <div
          className={`
absolute
right-0
top-0
h-full
w-[40%]
bg-white
px-12
flex
flex-col
justify-center
transition-all
duration-[1500ms]

${testingVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
            }
`}
        >

          <p className="text-4xl font-bold mb-6">
            Testing and QA
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            DigiHelic is an industry leader in providing testing and quality assurance (QA) services for salesforce and its applications.
          </p>

          <div className="space-y-6"></div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              Detailed performance diagnostics
            </p>

          </div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              Automated bug tracking
            </p>

          </div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              Custom scripting
            </p>

          </div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              Release management support — all with a focus on quality control.
            </p>

          </div>

          <div className="flex items-start gap-3 group">

            <span className="mt-2 w-5 h-5 rounded-full border border-[#1CC3E8]
            bg-white flex items-center justify-center
            group-hover:bg-[#1CC3E8] transition">

              <svg
                className="w-3 h-3 text-[#1CC3E8] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>

            </span>

            <p className="text-gray-700 text-lg leading-8">
              With our years of experience, we have established a reputation as the go-to provider for
              complete end-to-end software testing solutions that are tailored to meet our customer needs.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}