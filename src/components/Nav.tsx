"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Hand-drawn wavy underline — the mark on the active nav item
function WavyUnderline() {
  return (
    <svg
      viewBox="0 0 60 5"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -7,
        width: "100%",
        height: "5px",
        display: "block",
      }}
    >
      <path
        d="M 1,3 Q 10,0.8 20,3 Q 30,5 40,2.5 Q 50,0.5 59,3"
        stroke="#C0572D"
        strokeWidth="1.3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      style={{
        position: "relative",
        fontFamily: "var(--font-dm-sans), sans-serif",
        fontSize: "0.75rem",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: active ? "#C0572D" : "#8B5E3C",
        textDecoration: "none",
        opacity: active ? 1 : 0.78,
        paddingBottom: "2px",
      }}
    >
      {label}
      {active && <WavyUnderline />}
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname() ?? "/";

  const isAbout = pathname === "/about";
  // Any post page (/[slug]) also lights up "writing"
  const isWriting =
    pathname === "/writing" ||
    (pathname !== "/" && pathname !== "/about");

  return (
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
        <NavLink href="/writing" label="writing" active={isWriting} />
        <NavLink href="/about" label="about" active={isAbout} />
      </nav>
    </header>
  );
}
