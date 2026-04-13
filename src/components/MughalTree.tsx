export default function MughalTree({ className = "" }: { className?: string }) {
  const flowerColor = "#C4622D";
  const apexColor = "#8B3A1F";
  const centerColor = "#E8A040";
  const leafColor = "#5A6B35";
  const stemColor = "#4A2E12";

  // Draws 8 petals of a lotus flower centered at (cx, cy) with given radius
  const petals = (cx: number, cy: number, r: number, color: string) =>
    [0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <ellipse
        key={angle}
        cx={cx}
        cy={cy - r * 0.55}
        rx={r * 0.35}
        ry={r * 0.55}
        fill={color}
        opacity={angle % 90 === 0 ? 0.95 : 0.78}
        transform={`rotate(${angle}, ${cx}, ${cy})`}
      />
    ));

  const flower = (cx: number, cy: number, r: number, color: string) => (
    <g key={`f-${cx}-${cy}`}>
      {petals(cx, cy, r, color)}
      <circle cx={cx} cy={cy} r={r * 0.28} fill={centerColor} />
      <circle cx={cx} cy={cy} r={r * 0.12} fill="#FDF6EC" />
    </g>
  );

  const leaf = (cx: number, cy: number, angle: number, scale = 1) => (
    <ellipse
      key={`l-${cx}-${cy}`}
      cx={cx}
      cy={cy}
      rx={5 * scale}
      ry={11 * scale}
      fill={leafColor}
      opacity={0.88}
      transform={`rotate(${angle}, ${cx}, ${cy})`}
    />
  );

  return (
    <svg
      viewBox="0 0 260 368"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="archClip">
          <path d="M 22,368 L 22,162 C 22,95 75,28 130,14 C 185,28 238,95 238,162 L 238,368 Z" />
        </clipPath>
      </defs>

      {/* Arch background fill */}
      <path
        d="M 22,368 L 22,162 C 22,95 75,28 130,14 C 185,28 238,95 238,162 L 238,368 Z"
        fill="#F8EEE0"
      />

      {/* All botanical content clipped to arch */}
      <g clipPath="url(#archClip)">

        {/* Trunk */}
        <path
          d="M 130,362 C 129,345 131,312 130,278 C 129,244 131,212 130,178 C 129,152 131,122 130,95 C 129,76 130,60 130,48"
          stroke={stemColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Root hints */}
        <path d="M 130,362 Q 112,368 98,372" stroke={stemColor} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.45" />
        <path d="M 130,362 Q 148,368 162,372" stroke={stemColor} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.45" />
        <path d="M 130,362 Q 130,370 130,376" stroke={stemColor} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.45" />

        {/* === Bottom branch pair y≈290 === */}
        <path d="M 130,290 C 118,276 100,265 78,252" stroke={stemColor} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M 130,290 C 142,276 160,265 182,252" stroke={stemColor} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {leaf(100, 268, -38)}
        {leaf(97, 257, -58, 0.85)}
        {leaf(160, 268, 38)}
        {leaf(163, 257, 58, 0.85)}
        {flower(78, 243, 18, flowerColor)}
        {flower(182, 243, 18, flowerColor)}

        {/* === Middle branch pair y≈205 === */}
        <path d="M 130,205 C 116,190 98,178 74,166" stroke={stemColor} strokeWidth="1.9" strokeLinecap="round" fill="none" />
        <path d="M 130,205 C 144,190 162,178 186,166" stroke={stemColor} strokeWidth="1.9" strokeLinecap="round" fill="none" />
        {leaf(100, 181, -42, 0.9)}
        {leaf(160, 181, 42, 0.9)}
        {flower(74, 157, 20, flowerColor)}
        {flower(186, 157, 20, flowerColor)}

        {/* === Upper branch pair y≈128 === */}
        <path d="M 130,128 C 119,116 105,107 90,100" stroke={stemColor} strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M 130,128 C 141,116 155,107 170,100" stroke={stemColor} strokeWidth="1.6" strokeLinecap="round" fill="none" />
        {leaf(108, 111, -44, 0.8)}
        {leaf(152, 111, 44, 0.8)}
        {flower(90, 92, 16, flowerColor)}
        {flower(170, 92, 16, flowerColor)}

        {/* === Apex flower — the sun it reaches toward === */}
        {flower(130, 45, 24, apexColor)}

        {/* Ambient dots — like tiny stars or bindi */}
        <circle cx={45} cy={316} r={2.5} fill={flowerColor} opacity={0.18} />
        <circle cx={215} cy={316} r={2.5} fill={flowerColor} opacity={0.18} />
        <circle cx={40} cy={230} r={2} fill={flowerColor} opacity={0.14} />
        <circle cx={220} cy={230} r={2} fill={flowerColor} opacity={0.14} />
        <circle cx={44} cy={152} r={2} fill={flowerColor} opacity={0.12} />
        <circle cx={216} cy={152} r={2} fill={flowerColor} opacity={0.12} />
        <circle cx={55} cy={80} r={1.5} fill={flowerColor} opacity={0.1} />
        <circle cx={205} cy={80} r={1.5} fill={flowerColor} opacity={0.1} />
      </g>

      {/* Arch outer border — drawn on top so it frames everything */}
      <path
        d="M 22,368 L 22,162 C 22,95 75,28 130,14 C 185,28 238,95 238,162 L 238,368"
        stroke="#C4622D"
        strokeWidth="3.5"
        fill="none"
      />

      {/* Inner arch — decorative inset border */}
      <path
        d="M 38,368 L 38,165 C 38,105 82,44 130,32 C 178,44 222,105 222,165 L 222,368"
        stroke="#C4622D"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
        strokeDasharray="5 7"
      />

      {/* Small scallop details along inner border — top portion only */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle
          key={i}
          cx={130 + (i - 2.5) * 22}
          cy={34}
          r={3}
          fill="none"
          stroke="#C4622D"
          strokeWidth="0.8"
          opacity="0.3"
        />
      ))}

      {/* Base decorative strip */}
      <rect x="22" y="356" width="216" height="10" rx="2" fill="#C4622D" opacity="0.2" />

      {/* Corner diamond accents at arch base */}
      <rect x="22" y="356" width="8" height="8" transform="rotate(45, 26, 360)" fill="#C4622D" opacity="0.4" />
      <rect x="230" y="356" width="8" height="8" transform="rotate(45, 234, 360)" fill="#C4622D" opacity="0.4" />
    </svg>
  );
}
