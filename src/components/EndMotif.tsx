// Small lotus / bindi-like mark to close a post —
// signals "the thing is complete."
export default function EndMotif() {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "3.5rem 0 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.9rem",
      }}
      aria-hidden="true"
    >
      {/* Left whisker */}
      <span style={{
        width: "42px", height: "1px",
        background: "linear-gradient(to right, transparent, rgba(192,87,45,0.4))",
        display: "block",
      }} />

      {/* Lotus */}
      <svg width="30" height="30" viewBox="0 0 30 30">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <ellipse
            key={a}
            cx={15}
            cy={5.5}
            rx={2.2}
            ry={6.2}
            fill="#C0572D"
            opacity={a % 90 === 0 ? 0.72 : 0.5}
            transform={`rotate(${a}, 15, 15)`}
          />
        ))}
        <circle cx={15} cy={15} r={3.2} fill="#D4A017" opacity={0.85} />
        <circle cx={15} cy={15} r={1.5} fill="#FDF6EC" />
      </svg>

      {/* Right whisker */}
      <span style={{
        width: "42px", height: "1px",
        background: "linear-gradient(to left, transparent, rgba(192,87,45,0.4))",
        display: "block",
      }} />
    </div>
  );
}
