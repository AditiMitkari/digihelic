"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import Loader from "./SquareDotLoader";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Navbar />

      {loading && <Loader duration={800} />}

      {!loading && (
        <>
          {children}
          <Footer />
        </>
      )}
    </>
  );
}