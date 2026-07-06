export default function PortfoliosPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">
        
        {/* HERO IMAGE SECTION */}
<div className="w-screen group relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] h-[420px] overflow-hidden">

  <img
    src="/Portfolios.jpg"
    alt="Portfolio Banner"
    className="w-full h-full object-cover transform scale-110 transition-transform duration-700 group-hover:scale-100"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* TITLE ON IMAGE */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-wide">
      Portfolios
    </h2>
  </div>

</div>

        {/* HEADING */}
        <div className="text-center mt-8 mb-20">

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
<div className="group relative h-[420px]">

  {/* IMAGE BACKGROUND */}
  <div className="
    absolute inset-0
    rounded-[40px]
    overflow-hidden
    transition-all duration-500
    group-hover:-translate-y-3
    shadow-2xl
  ">
    <img
      src="/E-Support.jpg"
      alt="E-Support Portal"
      className="w-full h-full object-cover"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/30"></div>
  </div>

  {/* CONTENT */}
  <div className="
    relative z-10
    h-full
    rounded-[40px]
    p-7
    flex flex-col justify-between
    text-white
  ">

    <div className="mt-auto">

  <h3 className="text-3xl font-bold text-black mb-3">
    E-Support
    <span className="block">
      Portal Site
    </span>
  </h3>

  <p className="text-black font-medium flex items-center gap-2 cursor-pointer group-hover:gap-4 transition-all duration-300">
    View Project
    <span>→</span>
  </p>

</div>

  </div>
</div>

          <div className="group relative h-[420px]">

  <div className="
    absolute inset-0
    rounded-[40px]
    overflow-hidden
    transition-all duration-500
    group-hover:-translate-y-3
    shadow-2xl
  ">
    <img
      src="/IOT.jpg"
      alt="IoT Case Study"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30"></div>
  </div>

  <div className="relative z-10 h-full p-8 flex flex-col justify-end">

  <h3 className="text-3xl font-bold text-black mb-3">
    IoT
    <span className="block">
      Case Study
    </span>
  </h3>

  <p className="text-black font-medium flex items-center gap-2 cursor-pointer group-hover:gap-4 transition-all duration-300">
    Explore Study <span>→</span>
  </p>

</div>
</div>

          <div className="group relative h-[420px]">

  <div className="
    absolute inset-0
    rounded-[40px]
    overflow-hidden
    transition-all duration-500
    group-hover:-translate-y-3
    shadow-2xl
  ">
    <img
      src="/Case Study 1.jpg"
      alt="Salesforce Case Study"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30"></div>
  </div>

  <div className="relative z-10 h-full p-8 flex flex-col justify-end">

  <h3 className="text-3xl font-bold text-black mb-3">
    Salesforce
    <span className="block">
      Case Study
    </span>
  </h3>

  <p className="text-black font-medium flex items-center gap-2 cursor-pointer group-hover:gap-4 transition-all duration-300">
    Read Case Study <span>→</span>
  </p>

</div>
</div>

        </div>

      </div>

    </div>
  );
}