"use client";

import Image from "next/image";

export default function ERPNextPage() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* WHY ERPNext SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why ERPNext?
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                <span className="font-semibold text-gray-800">
                  End-to-End Business Management:
                </span>{" "}
                Unify your entire operation—from Sales and Manufacturing to Inventory,
                CRM, HR, Projects, and Finance—on a single, integrated platform.
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Cloud-Based & Scalable:
                </span>{" "}
                Access your system from anywhere. ERPNext is designed to grow with your business,
                whether you’re in aviation technology, manufacturing, trading, or services.
              </p>

              <p>
                <span className="font-semibold text-gray-800">
                  Customizable & Open Source:
                </span>{" "}
                Tailor workflows and build custom modules to suit your unique business needs.
                With no vendor lock-in, ERPNext offers full flexibility and control.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/Images/ERPNext.jpg"
              alt="ERPNext"
              width={500}
              height={400}
              className="rounded-xl shadow-lg hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* BUSINESS BENEFITS SECTION */}
        <div className="mt-16 text-center">
          <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12] font-bold text-gray-800 text-center mb-10">
            Business Benefits
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8 text-gray-800">

            {[
              "Improved Operational Visibility",
              "Reduced Manual Work",
              "Faster Decision-Making",
              "Regulatory Compliance",
              "Real-Time Reporting",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  p-8
                  rounded-xl
                  bg-white
                  shadow-md
                  border border-transparent
                  transition-all
                  duration-300
                  hover:border-[#1cc3e8]
                  hover:shadow-lg
                  cursor-pointer
                "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* KEY MODULES TABLE SECTION */}

        <div className="mt-20 max-w-7xl mx-auto">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[0.18em] text-[#1f7a4d]">
              ERPNEXT CAPABILITIES
            </p>

            <h2 className="!text-[30px] md:!text-[38px] lg:!text-[35px] !leading-[1.12] font-bold text-gray-800 text-left">
              Key Modules
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-gray-600">
              Explore the core ERPNext modules that connect your business operations
              in one integrated platform.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-[#1f7a4d]/25 bg-white shadow-[0_18px_45px_rgba(31,122,77,0.12)]">
            <div className="overflow-x-auto">
              <table className="min-w-[720px] w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#123e2b] via-[#17633d] to-[#1f7a4d] text-white">
                    <th className="w-[90px] px-5 py-5 text-center text-xs font-bold tracking-[0.12em]">
                      NO.
                    </th>

                    <th className="px-6 py-5 text-left text-sm font-semibold tracking-wide">
                      Business Function
                    </th>

                    <th className="px-6 py-5 text-left text-sm font-semibold tracking-wide">
                      ERPNext Module
                    </th>
                  </tr>
                </thead>

                <tbody className="text-gray-700">
                  {[
                    ["Sales & Customer Management", "Sales, CRM"],
                    ["Purchase Management", "Buying"],
                    ["Inventory & Warehouse", "Stock"],
                    ["Manufacturing", "Manufacturing"],
                    ["Quality Control", "Quality"],
                    ["Accounting & Finance", "Accounts"],
                    ["Asset Management", "Assets"],
                    ["Project Management", "Projects"],
                    ["Customer Support", "Support"],
                    ["Human Resources", "HR"],
                    ["Payroll Management", "Payroll"],
                  ].map(([businessFunction, module], index) => (
                    <tr
                      key={businessFunction}
                      className={`border-b border-[#1f7a4d]/10 transition-all duration-200 hover:bg-[#edf8f1] ${index % 2 === 0 ? "bg-white" : "bg-[#f8fcf9]"
                        }`}
                    >
                      <td className="px-5 py-5 text-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf7ee] text-xs font-bold text-[#17633d]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#1f7a4d]" />

                          <span className="text-sm font-semibold text-[#244b37]">
                            {businessFunction}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <span className="inline-flex rounded-full border border-[#1f7a4d]/20 bg-[#eaf7ee] px-4 py-1.5 text-sm font-semibold text-[#17633d]">
                          {module}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-2 border-t border-[#1f7a4d]/10 bg-[#f7fcf8] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#557061]">
                11 integrated ERPNext modules for core business operations.
              </p>

              <span className="text-xs font-bold tracking-[0.12em] text-[#1f7a4d]">
                ONE CONNECTED ERP PLATFORM
              </span>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}