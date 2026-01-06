import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "./font";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/nav";
import AOSInitializer from "./aos-initializer";

export const metadata: Metadata = {
  title: "Chewtopia",
  description: "Chewy snack, soft and elite",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white ${nunito.className}`}>
        <Navbar />
        <AOSInitializer />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
