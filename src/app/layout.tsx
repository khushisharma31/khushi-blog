import type { Metadata } from "next";
import { Lora, DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khushi Sharma",
  description: "Writing, building, and reaching toward the light.",
  openGraph: {
    title: "Khushi Sharma",
    description: "Writing, building, and reaching toward the light.",
    url: "https://khushi-sharma.com",
    siteName: "Khushi Sharma",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable} ${firaCode.variable}`}>
      <body style={{ minHeight: "100vh", background: "#FDF0E0", margin: 0 }}>

        <Nav />

        {/* Page offset for fixed nav */}
        <div style={{ paddingTop: "64px" }}>
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}
