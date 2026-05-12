"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "What We Offer", path: "/services" },
    { name: "Portfolios", path: "/portfolios" },
    { name: "Careers", path: "/careers" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/DigiHelic Logo.png"
            alt="DigiHelic Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation */}
        <ul className="flex gap-8 text-[16px] font-medium">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`pb-1 hover:text-[#1CC3E8] transition ${
                  pathname === item.path
                    ? "text-[#1CC3E8] border-b-2 border-[#1CC3E8]"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}