"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="px-6 py-6 flex items-center justify-between max-w-4xl mx-auto w-full">
      <Link
        href="/"
        className="font-serif text-lg tracking-tight"
        style={{ color: "#2C1A0E", fontFamily: "var(--font-lora), Georgia, serif", textDecoration: "none" }}
      >
        Khushi Sharma
      </Link>

      <nav className="flex items-center gap-8">
        <Link
          href="/writing"
          className="nav-link"
          style={{ color: pathname === "/writing" ? "#C4622D" : "#6B4C35" }}
        >
          writing
        </Link>
        <Link
          href="/about"
          className="nav-link"
          style={{ color: pathname === "/about" ? "#C4622D" : "#6B4C35" }}
        >
          about
        </Link>
      </nav>
    </header>
  );
}
