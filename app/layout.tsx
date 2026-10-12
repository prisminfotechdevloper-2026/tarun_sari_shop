import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer, MobileBottomNav } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tarun Sari & Lehenga | Pure Handloom Banarasi, Kanjivaram & Bridal Wear",
  description:
    "Explore authentic royal Indian handloom sarees and bridal lehengas at Tarun Sari Shop. Certified pure silk, master weaver creations, and global delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFDF8] text-[#292421]">
        <Navbar />
        {children}
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
