import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { DitherBackground } from "@/components/DitherBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "slfd.dev",
  description: "hey i'm benson - i try to build cool stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <DitherBackground />
        <div className="relative z-10">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
