import PatchStripSeparator from "@/components/PatchStripSeparator";

// Tiny tree mark — a miniature echo of the MughalTree, centred in the footer
function TreeMark() {
  return (
    <svg
      viewBox="0 0 40 48"
      width="28"
      height="34"
      fill="none"
      aria-hidden="true"
      style={{ display: "block", margin: "0 auto" }}
    >
      {/* Trunk */}
      <path d="M 20,48 L 20,28" stroke="#8B5E3C" strokeWidth="1.3" strokeLinecap="round" />
      {/* Branches */}
      <path d="M 20,32 Q 14,28 10,22" stroke="#8B5E3C" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M 20,32 Q 26,28 30,22" stroke="#8B5E3C" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M 20,26 Q 16,20 13,15" stroke="#8B5E3C" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <path d="M 20,26 Q 24,20 27,15" stroke="#8B5E3C" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      {/* Leaves — tiny colour pops */}
      <circle cx="10"  cy="22" r="2.2" fill="#C0572D" opacity="0.85" />
      <circle cx="30"  cy="22" r="2.2" fill="#D4A017" opacity="0.85" />
      <circle cx="13"  cy="15" r="1.8" fill="#5B7C3D" opacity="0.8" />
      <circle cx="27"  cy="15" r="1.8" fill="#8B2E18" opacity="0.8" />
      <circle cx="20"  cy="10" r="2.4" fill="#C97B84" opacity="0.8" />
      <circle cx="20"  cy="18" r="1.6" fill="#D4A017" opacity="0.7" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ padding: "2rem 0 4rem", position: "relative" }}>
      <div className="max-w-4xl mx-auto px-6">
        <PatchStripSeparator />

        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
          marginTop: "2rem",
        }}>
          <TreeMark />

          <p style={{
            fontFamily: "var(--font-lora), Georgia, serif",
            fontSize: "0.875rem",
            fontStyle: "italic",
            color: "#8B5E3C",
            letterSpacing: "0.01em",
            textAlign: "center",
            margin: 0,
          }}>
            made slowly, with both hands.
          </p>

          <div style={{
            display: "flex",
            gap: "1.75rem",
            alignItems: "center",
            marginTop: "0.25rem",
          }}>
            <a
              href="mailto:hello@khushi-sharma.com"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#8B5E3C",
                textDecoration: "none",
                borderBottom: "1px solid #C0572D33",
                paddingBottom: "2px",
              }}
            >
              email
            </a>
            <a
              href="https://github.com/khushi-sharma"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#8B5E3C",
                textDecoration: "none",
                borderBottom: "1px solid #C0572D33",
                paddingBottom: "2px",
              }}
            >
              github
            </a>
          </div>

          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#A8886E",
            marginTop: "0.75rem",
            marginBottom: 0,
          }}>
            © {year} khushi sharma
          </p>
        </div>
      </div>
    </footer>
  );
}
