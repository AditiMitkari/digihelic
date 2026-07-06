export default function MicrosoftPage() {
  return (
    <>
      {/* Microsoft - Digital Transformation Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side Image */}
            <div className="overflow-hidden rounded-xl shadow-lg group">
              <img
                src="/Images/Microsoft Transformation.jpg"
                alt="Microsoft Digital Transformation"
                className="w-full h-[450px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Right Side Text */}
            <div>
              <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12] font-bold text-center mb-16">
                Microsoft - Digital Transformation Services
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                At DigiHelic, we empower businesses with cutting-edge Microsoft
                solutions, including Dynamics 365, application development, and
                AI-powered innovations. Our Microsoft Dynamics 365 services
                streamline operations through CRM & ERP implementation, custom
                development, and seamless integrations. We build scalable
                applications using .NET, Azure, and Power Apps, ensuring agility
                and efficiency. Leveraging AI and machine learning, we enhance
                automation, customer engagement, and data-driven decision-making.
                With certified Microsoft experts, end-to-end solutions, and a
                customer-centric approach, we deliver secure, scalable, and
                future-ready digital transformations to drive business growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Microsoft Services Cards */}

<section className="py-24 bg-[#f4f8fc]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-7 lg:gap-9">
      {[
        {
          title: "Cloud & Data",
          number: "01",
          points: [
            "Microsoft Azure",
            ".NET Core / ASP.NET Core",
            "Azure Cloud Migration",
            "Azure DevOps / GitHub",
            "Azure Kubernetes Service (AKS)",
          ],
        },
        {
          title: "Collaboration",
          number: "02",
          points: [
            "MS Teams Application Development",
            "App Modernization using Blazor & Power Apps",
            "SharePoint",
            "Angular",
            "Blazor",
          ],
        },
        {
          title: "AI",
          number: "03",
          points: [
            "Generative AI solutions using Azure AI and OpenAI",
            "Microsoft Copilot",
          ],
        },
      ].map((card) => (
        <div
          key={card.title}
          className="
            group
            relative
            h-[410px]
            md:h-[440px]
            overflow-hidden
            rounded-[24px]
            border
            border-[#0B5CAB]/50
            bg-gradient-to-br
            from-[#061B32]
            via-[#082A4A]
            to-[#0B3A63]
            shadow-[0_18px_38px_rgba(7,42,76,0.18)]
            cursor-pointer
            transition-all
            duration-500
            hover:-translate-y-2
            hover:border-[#00A4EF]
            hover:shadow-[0_25px_55px_rgba(0,120,212,0.24)]
          "
        >
          {/* MICROSOFT FOUR-COLOR STRIP */}
          <div className="absolute inset-x-0 top-0 z-30 flex h-1.5">
            <span className="w-1/4 bg-[#F25022]" />
            <span className="w-1/4 bg-[#7FBA00]" />
            <span className="w-1/4 bg-[#00A4EF]" />
            <span className="w-1/4 bg-[#FFB900]" />
          </div>

          {/* SUBTLE BACKGROUND SHAPES */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#6EBEFF]/20" />
          <div className="pointer-events-none absolute -right-4 -top-4 h-36 w-36 rounded-full border border-[#6EBEFF]/15" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 border-r border-t border-[#6EBEFF]/15" />

          {/* TOP SECTION */}
          <div className="absolute left-7 right-7 top-7 z-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid grid-cols-2 gap-1">
                <span className="h-2.5 w-2.5 bg-[#F25022]" />
                <span className="h-2.5 w-2.5 bg-[#7FBA00]" />
                <span className="h-2.5 w-2.5 bg-[#00A4EF]" />
                <span className="h-2.5 w-2.5 bg-[#FFB900]" />
              </div>

              <span className="text-[10px] font-bold tracking-[0.17em] text-[#C5E5FF]">
                MICROSOFT SOLUTIONS
              </span>
            </div>

            <span className="text-base font-semibold text-[#7FC5FF]">
              {card.number}
            </span>
          </div>

          {/* TITLE */}
          <div
            className="
              absolute
              inset-0
              z-20
              flex
              items-center
              justify-center
              px-8
              transition-all
              duration-500
              group-hover:items-start
              group-hover:justify-start
              group-hover:px-7
              group-hover:pt-24
            "
          >
            <div>
              <div className="mb-4 h-1 w-12 rounded-full bg-[#00A4EF] opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <h3
                className="
                  !text-[30px]
                  md:!text-[34px]
                  !leading-[1.12]
                  font-bold
                  !text-white
                  text-center
                  transition-all
                  duration-500
                  group-hover:text-left
                "
                style={{ color: "#FFFFFF" }}
              >
                {card.title}
              </h3>
            </div>
          </div>

          {/* DEFAULT BOTTOM CONTENT */}
          <div className="absolute bottom-7 left-7 right-7 z-10 border-t border-white/15 pt-5 transition-all duration-500 group-hover:opacity-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-[#B8DCFF]">
                Enterprise Microsoft capabilities
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#74BFFF]/40 text-lg text-[#74BFFF]">
                →
              </span>
            </div>
          </div>

          {/* HOVER TECHNOLOGY LIST */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-10
              h-[69%]
              overflow-y-auto
              border-t
              border-white/10
              bg-[#0A3155]
              px-7
              pb-7
              pt-28
              opacity-0
              translate-y-6
              transition-all
              duration-500
              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >
            <ul className="space-y-3">
              {card.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#F1F8FF]"
                >
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-sm bg-[#00A4EF]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
}