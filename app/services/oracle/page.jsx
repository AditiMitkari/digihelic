export default function OraclePage() {
  return (
    <div className="bg-white">

      {/* FIRST SECTION */}
      <section className="relative h-[500px] w-full overflow-hidden group isolate">
        {/* TEXT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff8f7] via-white to-[#f9ddd8]">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#C74634]/10 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-[#8F1D1D]/10 blur-3xl" />
        </div>

        {/* TEXT CONTENT */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
            <div className="max-w-2xl border-l-4 border-[#C74634] pl-5 md:pl-8">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#C74634]/25 bg-white px-4 py-2 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#C74634]" />
                <span className="text-xs font-bold tracking-[0.18em] text-[#A52A2A]">
                  ORACLE CLOUD SOLUTIONS
                </span>
              </div>

              <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12] font-bold text-[#8F1D1D]">
                Oracle Solutions That Power
                <span className="block text-[#C74634]">
                  Smarter Business Growth
                </span>
              </h2>

              <div className="my-6 h-1 w-20 rounded-full bg-[#C74634]" />

              <p className="max-w-xl text-base leading-relaxed text-[#63322c] md:text-lg">
                DigiHelic helps businesses modernize operations with Oracle Cloud
                applications, enterprise databases, and scalable infrastructure
                designed for confident digital transformation.
              </p>

              <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#A52A2A]">
                <span className="h-px w-10 bg-[#C74634]" />
                Enterprise technology. Built for scale.
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="
      absolute inset-0 z-20
      transition-all duration-700 ease-in-out
      group-hover:translate-y-full
      group-hover:opacity-0
    "
        >
          <img
            src="/Images/Contact.jpeg"
            alt="Oracle"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#3c0c09]/30 via-transparent to-[#C74634]/10" />

          <div className="absolute bottom-7 left-6 border-l-4 border-[#C74634] bg-black/40 px-4 py-3 backdrop-blur-sm md:bottom-10 md:left-10">
            <p className="text-xs font-semibold tracking-[0.16em] text-white/80">
              DIGIHELIC × ORACLE
            </p>
            <p className="mt-1 text-lg font-bold text-white">
              Transform with confidence
            </p>
          </div>
        </div>
      </section>


      {/* SECOND SECTION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12] font-bold text-center mb-16">
            Consulting
          </h2>


          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                title: "Functional Consulting",
                image: "/Images/Functional Consulting.jpg",
                points: [
                  "Our functional consulting for Oracle involves understanding business processes and requirements, then configuring and customizing Oracle applications to meet those needs.",
                  "We assist clients in planning and designing projects from scratch.",
                  "We help clients identify the right teams based on organisational structure and functional needs.",
                ],
              },
              {
                title: "Technical Consulting",
                image: "/Images/Technical Consulting.jpg",
                points: [
                  "We provide technical consulting services for implementing and configuring Oracle cloud-based applications, including third-party databases, data migration, reporting, and analytics.",
                  "We ensure clients benefit from technical transformation through the design, development, and implementation of custom solutions that integrate with or extend Oracle applications.",
                ],
              },
              {
                title: "Oracle Project Delivery",
                image: "/Images/Programme Management.jpg",
                points: [
                  "We manage and oversee the planning, execution, and delivery of Oracle consulting services to clients.",
                  "We ensure project deliverables meet client expectations and quality standards.",
                  "We provide continuous support from implementation through post-implementation support.",
                ],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="
        group
        relative
        h-[500px]
        md:h-[530px]
        lg:h-[550px]
        overflow-hidden
        rounded-[22px]
        border
        border-[#8F1D1D]/50
        bg-white
        shadow-md
        shadow-[#8F1D1D]/10
        transition-all
        duration-700
        hover:-translate-y-1
        hover:border-[#C74634]
        hover:shadow-xl
        hover:shadow-[#8F1D1D]/20
      "
              >
                {/* CARD HEADING */}
                <div
                  className="
          relative
          z-10
          flex
          h-[28%]
          flex-col
          justify-between
          border-t-4
          border-[#C74634]
          bg-[#fff9f8]
          px-6
          py-5
          md:px-7
          md:py-6
        "
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A52A2A] md:text-[11px]">
                      Oracle Consulting
                    </span>

                    <span className="text-sm font-bold text-[#C74634] md:text-base">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <div className="mb-3 h-[3px] w-10 rounded-full bg-[#C74634]" />

                    <h3 className="text-[25px] font-bold leading-[1.12] text-[#641510] md:text-[29px] lg:text-[30px]">
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* IMAGE - EXISTING SLIDE DOWN ANIMATION */}
                <div
                  className="
          absolute
          bottom-0
          left-0
          z-20
          h-[72%]
          w-full
          overflow-hidden
          transition-all
          duration-700
          group-hover:translate-y-full
          group-hover:opacity-0
        "
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#C74634]" />
                </div>

                {/* TEXT - EXISTING REVEAL ANIMATION */}
                <div
                  className="
          absolute
          bottom-0
          left-0
          flex
          h-[72%]
          w-full
          items-center
          bg-gradient-to-br
          from-[#8F1D1D]
          via-[#A52A2A]
          to-[#C74634]
          px-6
          py-7
          opacity-0
          translate-y-8
          transition-all
          duration-700
          group-hover:opacity-100
          group-hover:translate-y-0
        "
                >
                  <div className="w-full">
                    <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FFE2DD]">
                      {card.title}
                    </p>

                    <ul className="space-y-4 text-left">
                      {card.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm leading-relaxed text-white md:text-[15px]"
                        >
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#FFE1DB]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src="/Images/Reporting Services.jpg"
                alt="Oracle Reporting Services"
                className="
                  w-full
                  h-[550px]
                  object-cover
                  transition-transform
                  duration-700
                  ease-in-out
                  group-hover:scale-110
                "
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Reporting Services
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our extensive range of reports helps organizations analyze and
                understand their business performance across the Oracle repository.
                Our different reporting tools include:
              </p>

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
                    Catering to active management of master data. Organizations can access and manage different module integrations including Sales and HRMS.
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
                    Oracle Transactional Business Intelligence enables transparency and objective reporting. It caters to module integration of ERP, HCM, CRM and others.
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
                    Provides current financial statements and the ability to create embedded charts and graphs, allowing integration with cube data.
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
                    Supports active master data management and integrated data from Oracle and other enterprise systems.
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
                    Offers the ability to work directly from Excel while accessing live data from GL cubes.
                  </p>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>

              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Data Migration Services
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Data migration requires careful planning, execution, and validation
                to ensure that the data is accurate, complete, and consistent.
                At DigiHelic we provide a structured approach to data migration
                from legacy systems to Oracle applications, databases, or cloud
                solutions through:
              </p>

              <div className="space-y-8">

                {/* ASSESSMENT */}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>

                  </span>

                  <p className="text-gray-700 text-lg leading-8">
                    <span className="font-semibold text-gray-800">
                      Assessment:
                    </span>{" "}
                    Identifying source and target systems, the scope of data
                    to be migrated, and any data quality issues that need to
                    be addressed.
                  </p>

                </div>

                {/* DESIGN */}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>

                  </span>

                  <p className="text-gray-700 text-lg leading-8">
                    <span className="font-semibold text-gray-800">
                      Design:
                    </span>{" "}
                    Developing a detailed plan for migrating data including
                    mapping, transformation, and validation processes.
                  </p>

                </div>

                {/* EXECUTION */}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>

                  </span>

                  <p className="text-gray-700 text-lg leading-8">
                    <span className="font-semibold text-gray-800">
                      Execution:
                    </span>{" "}
                    Executing the migration plan including extraction,
                    transformation, and loading of data into the target system.
                  </p>

                </div>

                {/* VALIDATION */}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>

                  </span>

                  <p className="text-gray-700 text-lg leading-8">
                    <span className="font-semibold text-gray-800">
                      Validation:
                    </span>{" "}
                    Verifying the accuracy and completeness of migrated data,
                    conducting reconciliation activities and validation testing.
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="overflow-hidden rounded-3xl shadow-2xl group">
              <img
                src="/Images/Data Migration.jpg"
                alt="Data Migration Services"
                className="
                  w-full
                  h-[600px]
                  object-cover
                  transition-transform
                  duration-700
                  ease-in-out
                  group-hover:scale-110
                "
              />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}