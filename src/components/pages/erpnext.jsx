"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
              src="/ERPNext.jpg"
              alt="ERPNext"
              width={500}
              height={400}
              className="rounded-xl shadow-lg hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* BUSINESS BENEFITS SECTION */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
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
          <h2 className="text-3xl font-bold text-gray-800 text-left mb-10">
            Key Modules
          </h2>

          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">

              <thead>
                <tr className="bg-[#1cc3e8] text-white">
                  <th className="p-4 text-left">Business Function</th>
                  <th className="p-4 text-left">ERPNext Module</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Sales & Customer Management</td>
                  <td className="p-4">Sales, CRM</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Purchase Management</td>
                  <td className="p-4">Buying</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Inventory & Warehouse</td>
                  <td className="p-4">Stock</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Manufacturing</td>
                  <td className="p-4">Manufacturing</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Quality Control</td>
                  <td className="p-4">Quality</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Accounting & Finance</td>
                  <td className="p-4">Accounts</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Asset Management</td>
                  <td className="p-4">Assets</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Project Management</td>
                  <td className="p-4">Projects</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Customer Support</td>
                  <td className="p-4">Support</td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4">Human Resources</td>
                  <td className="p-4">HR</td>
                </tr>

                <tr>
                  <td className="p-4">Payroll Management</td>
                  <td className="p-4">Payroll</td>
                </tr>

              </tbody>
            </table>
          </motion.div>
        </div>

      </div>
    </section>
  );
}