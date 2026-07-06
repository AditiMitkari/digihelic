
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdClose,
  MdMenu,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [isWhatWeOfferOpen, setIsWhatWeOfferOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const whatWeOfferRef = useRef(null);
  const productsRef = useRef(null);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "WHAT WE OFFER", path: "/services" },
    { name: "GCC SOLUTIONS", path: "/gcc-solutions" },
    { name: "PRODUCTS", path: "/products/DigihireAi" },
    { name: "BLOGS", path: "/blogs" },
    { name: "CAREERS", path: "/careers" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const whatWeOfferDropdown = [
    { name: "SAP", path: "/services/sap" },
    { name: "Salesforce", path: "/services/salesforce" },
    { name: "Oracle", path: "/services/oracle" },
    { name: "Microsoft", path: "/services/microsoft" },
    { name: "ERPNext", path: "/services/erpnext" },
    { name: "Red Hat Technologies", path: "/services/red-hat-technologies" },
    { name: "Java", path: "/java" },
    {
      name: "Citrix and VMware",
      path: "/services/Citrix-VMware",
    },
    {
      name: "Application Management Services",
      path: "/services/ams",
    },
  ];

  const productsDropdown = [
    { name: "DigiHire AI", path: "/products/DigihireAi" },
    { name: "Global Caseway", path: "/Global-Caseway" },
    { name: "Copilot Interview", path: "/Copilot" },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();

    setIsMobileMenuOpen(false);
    setIsWhatWeOfferOpen(false);
    setIsProductsOpen(false);

    if (pathname === "/") {
      window.location.reload();
    } else {
      window.location.href = "/";
    }
  };

  const closeAllMenus = () => {
    setIsWhatWeOfferOpen(false);
    setIsProductsOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        whatWeOfferRef.current &&
        !whatWeOfferRef.current.contains(event.target)
      ) {
        setIsWhatWeOfferOpen(false);
      }

      if (
        productsRef.current &&
        !productsRef.current.contains(event.target)
      ) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsWhatWeOfferOpen(false);
    setIsProductsOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActivePath = (path) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const isProductActive = () => {
    return (
      pathname.startsWith("/products") ||
      pathname === "/Global-Caseway" ||
      pathname === "/Copilot"
    );
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="group flex items-center"
          aria-label="DigiHelic Home"
        >
          <div className="relative flex items-center overflow-hidden rounded-full bg-white px-2 py-1.5 transition-all duration-500 hover:shadow-lg hover:ring-1 hover:ring-sky-200 sm:px-4 sm:py-2">
            <img
              src="/DigiHelic Logo.png"
              alt="DigiHelic Logo"
              className="h-9 w-auto transition-all duration-500 group-hover:scale-105 sm:h-12"
            />

            <span className="absolute bottom-0 left-3 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#1CC3E8] via-[#2B5CAA] to-[#EF3340] transition-all duration-500 group-hover:w-[82%] sm:left-4" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-[14px] font-semibold tracking-[0.02em] lg:flex">
          {navItems.map((item, index) => (
            <li
              key={`${item.name}-${item.path}-${index}`}
              className="relative"
              ref={
                item.name === "WHAT WE OFFER"
                  ? whatWeOfferRef
                  : item.name === "PRODUCTS"
                    ? productsRef
                    : null
              }
            >
              {item.name === "WHAT WE OFFER" ? (
                <>
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.path}
                      className={`border-b-2 pb-1 transition ${isActivePath(item.path)
                        ? "border-[#1CC3E8] text-[#1CC3E8]"
                        : "border-transparent text-gray-700 hover:text-[#1CC3E8]"
                        }`}
                    >
                      {item.name}
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setIsWhatWeOfferOpen((prev) => !prev);
                        setIsProductsOpen(false);
                      }}
                      className="flex items-center justify-center text-gray-700 transition hover:text-[#1CC3E8]"
                      aria-label="Open What We Offer menu"
                      aria-expanded={isWhatWeOfferOpen}
                    >
                      <MdOutlineKeyboardArrowDown
                        className={`text-[18px] transition-transform duration-200 ${isWhatWeOfferOpen ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </button>
                  </div>

                  {isWhatWeOfferOpen && (
                    <div className="absolute left-0 top-full z-50 mt-3 max-h-[360px] w-[270px] overflow-y-auto border border-slate-100 bg-white py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                      <ul>
                        {whatWeOfferDropdown.map((dropdownItem) => (
                          <li key={dropdownItem.path}>
                            <Link
                              href={dropdownItem.path}
                              onClick={() => setIsWhatWeOfferOpen(false)}
                              className={`block px-6 py-2.5 text-[13px] font-semibold tracking-[0.08em] transition-all duration-200 hover:bg-sky-50 hover:text-[#1CC3E8] ${isActivePath(dropdownItem.path)
                                ? "text-[#1CC3E8]"
                                : "text-gray-600"
                                }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : item.name === "PRODUCTS" ? (
                <>
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.path}
                      className={`border-b-2 pb-1 transition ${isProductActive()
                        ? "border-[#1CC3E8] text-[#1CC3E8]"
                        : "border-transparent text-gray-700 hover:text-[#1CC3E8]"
                        }`}
                    >
                      {item.name}
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setIsProductsOpen((prev) => !prev);
                        setIsWhatWeOfferOpen(false);
                      }}
                      className="flex items-center justify-center text-gray-700 transition hover:text-[#1CC3E8]"
                      aria-label="Open Products menu"
                      aria-expanded={isProductsOpen}
                    >
                      <MdOutlineKeyboardArrowDown
                        className={`text-[18px] transition-transform duration-200 ${isProductsOpen ? "rotate-180" : "rotate-0"
                          }`}
                      />
                    </button>
                  </div>

                  {isProductsOpen && (
                    <div className="absolute left-0 top-full z-50 mt-3 max-h-[360px] w-[245px] overflow-y-auto border border-slate-100 bg-white py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                      <ul>
                        {productsDropdown.map((dropdownItem) => (
                          <li key={dropdownItem.path}>
                            <Link
                              href={dropdownItem.path}
                              onClick={() => setIsProductsOpen(false)}
                              className={`block px-6 py-2.5 text-[13px] font-semibold tracking-[0.08em] transition-all duration-200 hover:bg-sky-50 hover:text-[#1CC3E8] ${isActivePath(dropdownItem.path)
                                ? "text-[#1CC3E8]"
                                : "text-gray-600"
                                }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.path}
                  className={`border-b-2 pb-1 transition ${isActivePath(item.path)
                    ? "border-[#1CC3E8] text-[#1CC3E8]"
                    : "border-transparent text-gray-700 hover:text-[#1CC3E8]"
                    }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => {
            setIsMobileMenuOpen((prev) => !prev);
            setIsWhatWeOfferOpen(false);
            setIsProductsOpen(false);
          }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 hover:text-[#1CC3E8] lg:hidden"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <MdClose className="text-[27px]" />
          ) : (
            <MdMenu className="text-[29px]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="max-h-[calc(100dvh-72px)] overflow-y-auto px-4 py-4 sm:px-6">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={`mobile-${item.name}-${item.path}`}>
                  {item.name === "WHAT WE OFFER" ? (
                    <>
                      <div
                        className={`flex items-center rounded-xl border transition ${isActivePath(item.path)
                          ? "border-[#1CC3E8]/30 bg-sky-50"
                          : "border-slate-100 bg-slate-50"
                          }`}
                      >
                        <Link
                          href={item.path}
                          onClick={closeAllMenus}
                          className={`flex-1 px-4 py-3 text-sm font-bold tracking-[0.03em] ${isActivePath(item.path)
                            ? "text-[#1CC3E8]"
                            : "text-slate-700"
                            }`}
                        >
                          {item.name}
                        </Link>

                        <button
                          type="button"
                          onClick={() => {
                            setIsWhatWeOfferOpen((prev) => !prev);
                            setIsProductsOpen(false);
                          }}
                          className="flex h-11 w-11 items-center justify-center text-slate-700 transition hover:text-[#1CC3E8]"
                          aria-label="Toggle What We Offer submenu"
                          aria-expanded={isWhatWeOfferOpen}
                        >
                          <MdOutlineKeyboardArrowDown
                            className={`text-[22px] transition-transform duration-200 ${isWhatWeOfferOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      </div>

                      {isWhatWeOfferOpen && (
                        <ul className="ml-4 mt-2 space-y-1 border-l-2 border-[#1CC3E8]/30 py-1 pl-3">
                          {whatWeOfferDropdown.map((dropdownItem) => (
                            <li key={`mobile-${dropdownItem.path}`}>
                              <Link
                                href={dropdownItem.path}
                                onClick={closeAllMenus}
                                className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${isActivePath(dropdownItem.path)
                                  ? "bg-sky-50 text-[#1CC3E8]"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-[#1CC3E8]"
                                  }`}
                              >
                                {dropdownItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : item.name === "PRODUCTS" ? (
                    <>
                      <div
                        className={`flex items-center rounded-xl border transition ${isProductActive()
                          ? "border-[#1CC3E8]/30 bg-sky-50"
                          : "border-slate-100 bg-slate-50"
                          }`}
                      >
                        <Link
                          href={item.path}
                          onClick={closeAllMenus}
                          className={`flex-1 px-4 py-3 text-sm font-bold tracking-[0.03em] ${isProductActive()
                            ? "text-[#1CC3E8]"
                            : "text-slate-700"
                            }`}
                        >
                          {item.name}
                        </Link>

                        <button
                          type="button"
                          onClick={() => {
                            setIsProductsOpen((prev) => !prev);
                            setIsWhatWeOfferOpen(false);
                          }}
                          className="flex h-11 w-11 items-center justify-center text-slate-700 transition hover:text-[#1CC3E8]"
                          aria-label="Toggle Products submenu"
                          aria-expanded={isProductsOpen}
                        >
                          <MdOutlineKeyboardArrowDown
                            className={`text-[22px] transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      </div>

                      {isProductsOpen && (
                        <ul className="ml-4 mt-2 space-y-1 border-l-2 border-[#1CC3E8]/30 py-1 pl-3">
                          {productsDropdown.map((dropdownItem) => (
                            <li key={`mobile-${dropdownItem.path}`}>
                              <Link
                                href={dropdownItem.path}
                                onClick={closeAllMenus}
                                className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${isActivePath(dropdownItem.path)
                                  ? "bg-sky-50 text-[#1CC3E8]"
                                  : "text-slate-600 hover:bg-slate-50 hover:text-[#1CC3E8]"
                                  }`}
                              >
                                {dropdownItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      onClick={closeAllMenus}
                      className={`block rounded-xl border px-4 py-3 text-sm font-bold tracking-[0.03em] transition ${isActivePath(item.path)
                        ? "border-[#1CC3E8]/30 bg-sky-50 text-[#1CC3E8]"
                        : "border-slate-100 bg-slate-50 text-slate-700 hover:border-sky-200 hover:bg-sky-50 hover:text-[#1CC3E8]"
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
