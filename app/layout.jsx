import "./globals.css";
import { Manrope, Sora } from "next/font/google";
import ClientLayout from "../src/components/pages/ClientLayout";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  title: "DigiHelic Solutions Pvt. Ltd | Global IT & SAP Services Partner",
  description: "DigiHelic - Software Technology Company",
  icons: {
    icon: "/DigiHelic Logo.png",
    shortcut: "/DigiHelic Logo.png",
    apple: "/DigiHelic Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${sora.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}