export default function BlockPrintDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full py-3 ${className}`} aria-hidden="true">
      <svg
        width="320"
        height="28"
        viewBox="0 0 320 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left line */}
        <line x1="0" y1="14" x2="105" y2="14" stroke="#E8D4B8" strokeWidth="1" />
        {/* Right line */}
        <line x1="215" y1="14" x2="320" y2="14" stroke="#E8D4B8" strokeWidth="1" />

        {/* Left small motifs */}
        <circle cx="112" cy="14" r="2" fill="#C4622D" opacity="0.3" />
        <circle cx="124" cy="14" r="1.5" fill="#C4622D" opacity="0.2" />

        {/* Right small motifs */}
        <circle cx="208" cy="14" r="2" fill="#C4622D" opacity="0.3" />
        <circle cx="196" cy="14" r="1.5" fill="#C4622D" opacity="0.2" />

        {/* Central lotus motif */}
        {/* Outer 8 petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx={160}
            cy={6}
            rx={3}
            ry={6}
            fill="#C4622D"
            opacity={angle % 90 === 0 ? 0.55 : 0.35}
            transform={`rotate(${angle}, 160, 14)`}
          />
        ))}
        {/* Center */}
        <circle cx={160} cy={14} r={4} fill="#E8A040" opacity={0.7} />
        <circle cx={160} cy={14} r={2} fill="#FDF6EC" opacity={0.9} />

        {/* Left flanking diamonds */}
        <rect x="136" y="10" width="8" height="8" transform="rotate(45, 140, 14)" fill="none" stroke="#C4622D" strokeWidth="0.8" opacity="0.45" />
        {/* Right flanking diamonds */}
        <rect x="176" y="10" width="8" height="8" transform="rotate(45, 180, 14)" fill="none" stroke="#C4622D" strokeWidth="0.8" opacity="0.45" />
      </svg>
    </div>
  );
}
