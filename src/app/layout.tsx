import type { Metadata } from "next";
import { Lora, DM_Sans, Fira_Code } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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

        {/* Minimal floating nav */}
        <header style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          padding: "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(253, 240, 224, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(192, 87, 45, 0.12)",
        }}>
          <Link href="/" style={{
            fontFamily: "var(--font-lora), Georgia, serif",
            fontSize: "1rem",
            color: "#2C1A0E",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}>
            Khushi Sharma
          </Link>

          <nav style={{ display: "flex", gap: "2rem" }}>
            {[
              { href: "/writing", label: "writing" },
              { href: "/about",   label: "about" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#8B5E3C",
                textDecoration: "none",
                opacity: 0.8,
              }}>
                {label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Page offset for fixed nav */}
        <div style={{ paddingTop: "64px" }}>
          {children}
        </div>

      </body>
    </html>
  );
}
