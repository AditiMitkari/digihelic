export default function SAPPage() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* Left Side Image */}
          <div className="h-full overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/Images/SAP.jpg"
              alt="Smart Enterprise Transformation"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center">
            <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] font-bold text-gray-900 mb-6 !leading-[1.12]">
              Transforming your journey to become
              <span className="text-gray-900"> Smart Enterprises</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              In recent years, there has been a surge in technological
              innovation enabling businesses to gain a competitive edge by
              understanding their customers better and making data-driven
              decisions.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              With these innovations, enterprise software leader SAP plays
              an increasingly influential role in helping organizations
              transform and grow. DigiHelic leverages deep SAP expertise to
              help businesses effectively utilize data, streamline
              operations, and unlock new opportunities for sustainable
              success.
            </p>
          </div>

        </div>

        {/* ================= NEW SECTION START ================= */}

        <div className="mt-20">

          {/* Heading */}
          <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] font-bold text-gray-900 mb-6 !leading-[1.12]">
            SAP S/4 HANA
          </h2>
          {/* Description */}
          <p className="text-gray-700 text-lg max-w-4xl leading-relaxed">
            We enable business proficiency by automating processes and tasks across
            finance, marketing, human resources, sales, and others. We help businesses
            at every stage of SAP migration.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {/* Card 1 */}
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img
                src="/Images/Greenfield.jpg"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:h-1/2"
              />
              <div className="absolute bottom-0 w-full h-1/2 bg-[#1CC3E8] text-white p-5 translate-y-full group-hover:translate-y-0 transition-all duration-700">
                <h3 className="font-bold text-lg mb-2">Greenfield Implementation</h3>
                <p className="text-sm">
                  Our cross-industry know-how ensures to accelerate your business growth and transformation.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img
                src="/Images/Hana.jpg"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:h-1/2"
              />
              <div className="absolute bottom-0 w-full h-1/2 bg-[#1CC3E8] text-white p-5 translate-y-full group-hover:translate-y-0 transition-all duration-700">
                <h3 className="font-bold text-lg mb-2">S/4HANA assessment </h3>
                <p className="text-sm">
                  Create your intelligent enterprise with our expert S/4 Hana assessment service.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img
                src="/Images/ECC.jpg"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:h-1/2"
              />
              <div className="absolute bottom-0 w-full h-1/2 bg-[#1CC3E8] text-white p-5 translate-y-full group-hover:translate-y-0 transition-all duration-700">
                <h3 className="font-bold text-lg mb-2">ECC to S/4 Hana migration </h3>
                <p className="text-sm">
                  We help you seamlessly migrate from the ECC environment to S/4 Hana to drive positive business values.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img
                src="/Images/Data Transition.jpg"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:h-1/2"
              />
              <div className="absolute bottom-0 w-full h-1/2 bg-[#1CC3E8] text-white p-5 translate-y-full group-hover:translate-y-0 transition-all duration-700">
                <h3 className="font-bold text-lg mb-2">Data Transition </h3>
                <p className="text-sm">
                  We empower businesses to create a smooth data transition and configuration from your existing ERP installation to SAP S/4Hana systems.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= NEW SECTION END ================= */}

        {/* ================= SAP AMS SECTION START ================= */}

        <div className="mt-24 p-10 rounded-3xl"
          style={{
            background: `
              radial-gradient(circle at top left,
              rgba(59,130,246,0.18),
              transparent 35%),

              radial-gradient(circle at top right,
              rgba(14,165,233,0.15),
              transparent 35%),

              radial-gradient(circle at bottom center,
              rgba(99,102,241,0.12),
              transparent 40%),

              #ffffff
            `
          }}
        >

          {/* Heading */}
          <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] font-bold text-gray-900 mb-4 !leading-[1.12]">
            SAP AMS
          </h2>
          {/* Description */}
          <p className="text-gray-700 text-lg max-w-4xl leading-relaxed mb-12">
            Our SAP AMS service aims to support businesses across all SAP technologies.
            We also empower businesses by streamlining operations from implementation
            to regular updates. We do this by:
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src="/Images/Integration.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">SAP Integration</h3>
                <p className="text-sm text-gray-600">
                  With our new-age SAP system integration systems we cater to improved IT performances through proficient delivery and implementation with a focus on Organizational efficiency.
                </p>
              </div>

            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              <div className="h-40 overflow-hidden">
                <img
                  src="/Images/ECC Support.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">ECC Support</h3>
                <p className="text-sm text-gray-600">
                  Our end-to-end support for SAP products and services helps your business synchronise your SAP and digital journey, also creating opportunities for increased innovation and SAP investment.
                </p>
              </div>

            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              <div className="h-40 overflow-hidden">
                <img
                  src="/Images/Hana Support.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">S/4 Hana Support </h3>
                <p className="text-sm text-gray-600">
                  We also provide extended SAP support for delivering effective and enhanced applications by deploying our exceptional AMS
                </p>
              </div>

            </div>

            {/* Card 4 */}
            <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              <div className="h-40 overflow-hidden">
                <img
                  src="/Images/Upgrades.jpg"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-2">SAP Upgrades</h3>
                <p className="text-sm text-gray-600">
                  Our innovative solutions accelerate futuristic enterprises with risk-free mitigation, bug fixing, and constant security, software, and functional upgrades.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ================= SAP AMS SECTION END ================= */}

        {/* ================= SAP BUSINESS ANALYTICS START ================= */}

        <div className="mt-24">

          {/* Heading */}
          <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] font-bold text-gray-900 mb-4 !leading-[1.12]">
            SAP Business Analytics
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg max-w-4xl leading-relaxed mb-12">
            Our insightful analytics help you get the most valued input from data that
            instead helps with improved planning and analysis of business operations.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/Images/Rise of sap.jpg"
                  alt="Business Intelligence"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SAP Business Planning and Consolidation
                </h3>

                <p className="text-gray-600">
                  Leverage the core functionalities of SAP BPC with our experienced team to improve planning, forecasting, budgeting, and overall business performance.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/Images/SAP Analytics Cloud.jpeg"
                  alt="SAP Analytics Cloud"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SAP Analytics Cloud
                </h3>

                <p className="text-gray-600">
                  Harness the power of cloud technology with our predictive analytics and ML abilities to use real-time data-driven insights.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/Images/SAP Business Object.jpg"
                  alt="Data Visualization"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SAP Business Objects
                </h3>

                <p className="text-gray-600">
                  Our tested methodologies enable improved decision-making with insights that built accuracy and agility through SAP BusinessObjects.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/Images/SAP Business Warehouse.jpg"
                  alt="SAP Analytics Cloud"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SAP Business Warehouse
                </h3>

                <p className="text-gray-600">
                  Transform and integrate relevant business information with our successful BI and data warehouse strategy.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ================= SAP BUSINESS ANALYTICS END ================= */}

        <div className="mt-24">

          {/* Section Heading */}
          <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] font-bold text-gray-900 mb-4 !leading-[1.12]">
             SAP on Cloud
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg max-w-4xl leading-relaxed mb-12">
            To boost your business performance by 2x we provide SAP cloud service and also
            modify existing SAP architecture by moving it to the cloud with our mission-critical SAP systems.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-3">

              <img
                src="/Images/Rise with sap.jpg"
                alt="Rise with sap"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* ALWAYS VISIBLE TOP LEFT HEADING */}
              

              {/* Hover Content */}
              <div className="absolute inset-0 bg-[#1CC3E8] text-white p-6 flex flex-col justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-20">
                {/* <h3 className="text-2xl font-bold mb-4">
                  Rise with SAP
                </h3> */}

                <p>
                  DigiHelic’s efficient SAP with SAP Rise offers S/4Hana Cloud, implementation and migration services all hosted on SAP public cloud platform.
                </p>
              </div>

            </div>

            {/* Card 2 */}
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-3">

              <img
                src="/Images/SAP on Hyperscale's.jpeg"
                alt="SAP on Hyperscale's"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-[#1CC3E8] text-white p-6 flex flex-col justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-20">
                <h3 className="text-2xl font-bold mb-4">
                  SAP on Hyperscale's
                </h3>

                <p>
                  Host SAP on Hyperscalers- AWS, Google Cloud Platform, Azure, with our certified experts.
                </p>
              </div>

            </div>

            {/* Card 3 */}
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-3">

              <img
                src="/Images/Assessment.jpg"
                alt="Assessment and Roadmap"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-[#1CC3E8] text-white p-6 flex flex-col justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-20">
                <h3 className="text-2xl font-bold mb-4">
                  Assessment and Roadmap
                </h3>

                <p>
                  We enable clients to navigate to a secure and cost-friendly cloud environment, along with providing cloud strategy and a roadmap for implementation and maintenance.
                </p>
              </div>

            </div>

            {/* Card 4 */}
            <div className="group relative h-80 overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:-translate-y-3">

              <img
                src="/Images/Cloud Migration.jpg"
                alt="Cloud Migration"
                className="absolute inset-0 w-full h-full object-cover"
              />


              <div className="absolute inset-0 bg-[#1CC3E8] text-white p-6 flex flex-col justify-center translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-20">
                <h3 className="text-2xl font-bold mb-4">
                  Cloud Migration
                </h3>

                <p>
                  Build next-gen business efficiency by using our excellent automated cloud management and mitigation services.
                </p>
              </div>

            </div>

          </div>
        </div>

        <div className="mt-24">

          {/* Heading */}
          <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] font-bold text-gray-900 mb-4 !leading-[1.12]">
             SAP BO
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg max-w-4xl leading-relaxed mb-12">
            Build next-generation business essence with a centralized SAP business suite of data visualization and reporting features
          </p>
        </div>

        <div className="mt-24">

          {/* Heading */}
          <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] font-bold text-gray-900 mb-4 !leading-[1.12]">
             SAP Fiori
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg max-w-4xl leading-relaxed mb-12">
            Our experienced team of SAP professionals provides end-to-end support in Fiori app development with customization and development of existing and new apps.
          </p>
        </div>

        <section
          className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Images/Contact.jpeg')",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 w-full px-16">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left Form */}
              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-white text-black placeholder-gray-600 rounded-lg shadow-md focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white text-black placeholder-gray-600 rounded-lg shadow-md focus:outline-none"
                />

                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-white text-black placeholder-gray-600 rounded-lg shadow-md focus:outline-none"
                />
                <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                  Send →
                </button>
              </div>

              {/* Right Text */}
              <div className="ml-12 md:ml-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  For best tech solutions,
                  <br />
                  connect now!
                </h2>
              </div>

            </div>

          </div>
        </section>

      </div>
    </section>
  );
}