import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "./font";
import { Analytics } from "@vercel/analytics/next";

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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
