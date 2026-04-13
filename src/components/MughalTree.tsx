export default function MughalTree({ className = "" }: { className?: string }) {
  // Flower palette — pulled from the patchwork colour system so the tree
  // speaks the same language as the QuiltCards elsewhere on the site.
  // Each branch-pair flower gets a different colour; apex is the deep rust
  // "sun" the tree reaches toward.
  const flowers = {
    rust:    "#C0572D",   // warm brick
    teal:    "#2E8B8B",   // peacock
    rose:    "#C97B84",   // dusty rose
    mehendi: "#5B7C3D",   // deep green (paired w/ rose? we use amber below)
    amber:   "#D4A017",   // marigold
    indigo:  "#6060B0",   // ink blue
    plum:    "#7A3040",   // wine
  };
  const apexColor   = "#8B3A1F";   // deep rust — the "sun"
  const centerColor = "#E8A040";   // gold bindi at each flower's heart
  const leafGreens: string[] = ["#5A6B35", "#2E4818", "#7A9246"]; // sage → deep → light
  const stemColor   = "#4A2E12";

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

  const leaf = (cx: number, cy: number, angle: number, scale = 1, color = leafGreens[0]) => (
    <ellipse
      key={`l-${cx}-${cy}`}
      cx={cx}
      cy={cy}
      rx={5 * scale}
      ry={11 * scale}
      fill={color}
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

        {/* === Bottom branch pair y≈290 — rust ↔ teal === */}
        <path d="M 130,290 C 118,276 100,265 78,252" stroke={stemColor} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M 130,290 C 142,276 160,265 182,252" stroke={stemColor} strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {leaf(100, 268, -38, 1,    leafGreens[0])}
        {leaf(97,  257, -58, 0.85, leafGreens[1])}
        {leaf(160, 268,  38, 1,    leafGreens[2])}
        {leaf(163, 257,  58, 0.85, leafGreens[0])}
        {flower(78,  243, 18, flowers.rust)}
        {flower(182, 243, 18, flowers.teal)}

        {/* === Middle branch pair y≈205 — rose ↔ amber === */}
        <path d="M 130,205 C 116,190 98,178 74,166" stroke={stemColor} strokeWidth="1.9" strokeLinecap="round" fill="none" />
        <path d="M 130,205 C 144,190 162,178 186,166" stroke={stemColor} strokeWidth="1.9" strokeLinecap="round" fill="none" />
        {leaf(100, 181, -42, 0.9, leafGreens[1])}
        {leaf(160, 181,  42, 0.9, leafGreens[2])}
        {flower(74,  157, 20, flowers.rose)}
        {flower(186, 157, 20, flowers.amber)}

        {/* === Upper branch pair y≈128 — indigo ↔ plum === */}
        <path d="M 130,128 C 119,116 105,107 90,100" stroke={stemColor} strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <path d="M 130,128 C 141,116 155,107 170,100" stroke={stemColor} strokeWidth="1.6" strokeLinecap="round" fill="none" />
        {leaf(108, 111, -44, 0.8, leafGreens[0])}
        {leaf(152, 111,  44, 0.8, leafGreens[1])}
        {flower(90,  92, 16, flowers.indigo)}
        {flower(170, 92, 16, flowers.plum)}

        {/* === Apex flower — the sun it reaches toward === */}
        {flower(130, 45, 24, apexColor)}

        {/* Ambient dots — like tiny stars or bindi, tinted across the palette */}
        <circle cx={45}  cy={316} r={2.5} fill={flowers.rust}   opacity={0.22} />
        <circle cx={215} cy={316} r={2.5} fill={flowers.teal}   opacity={0.22} />
        <circle cx={40}  cy={230} r={2}   fill={flowers.rose}   opacity={0.2}  />
        <circle cx={220} cy={230} r={2}   fill={flowers.amber}  opacity={0.2}  />
        <circle cx={44}  cy={152} r={2}   fill={flowers.indigo} opacity={0.18} />
        <circle cx={216} cy={152} r={2}   fill={flowers.plum}   opacity={0.18} />
        <circle cx={55}  cy={80}  r={1.5} fill={flowers.amber}  opacity={0.16} />
        <circle cx={205} cy={80}  r={1.5} fill={flowers.teal}   opacity={0.16} />
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

      {/* Small scallop details along inner border — top portion only.
          Alternating colours pick up the flower palette below. */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const scallopColors = [flowers.rust, flowers.amber, flowers.teal, flowers.rose, flowers.indigo, flowers.rust];
        return (
          <circle
            key={i}
            cx={130 + (i - 2.5) * 22}
            cy={34}
            r={3}
            fill="none"
            stroke={scallopColors[i]}
            strokeWidth="0.9"
            opacity="0.45"
          />
        );
      })}

      {/* Base decorative strip */}
      <rect x="22" y="356" width="216" height="10" rx="2" fill="#C4622D" opacity="0.2" />

      {/* Corner diamond accents at arch base — picking up teal + rose so the
          base echoes the flower palette instead of being monochrome rust. */}
      <rect x="22"  y="356" width="8" height="8" transform="rotate(45, 26, 360)"  fill={flowers.teal} opacity="0.55" />
      <rect x="230" y="356" width="8" height="8" transform="rotate(45, 234, 360)" fill={flowers.rose} opacity="0.55" />
    </svg>
  );
}
