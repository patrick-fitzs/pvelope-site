import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Patrick's Portfolio",
  description: "Patrick Fitzsimons — Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono bg-[#0f0f0f] text-[#e0e0e0] overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}