"use client";

import "./globals.css";
import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Loader from "../src/components/SquareDotLoader";
import Navbar from "@/src/components/Navbar";
// import Footer from "@/src/components/Footer";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 800); // SAME timing
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {loading && <Loader duration={800} />}
        {!loading && children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
