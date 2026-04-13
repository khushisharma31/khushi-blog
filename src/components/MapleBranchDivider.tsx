export default function MapleBranchDivider({ className = "" }: { className?: string }) {
  // Simplified maple leaf path, centered at 0,0 — traces a 5-lobe silhouette
  const leaf = `M 0,9 L 0,5 C -2,4 -4,3 -6,2 L -9,0 C -10,-1 -9,-3 -8,-3 L -6,-4 C -8,-6 -9,-9 -7,-10 C -6,-12 -4,-11 -3,-10 C -2,-11 0,-13 0,-12 C 0,-13 2,-11 3,-10 C 4,-11 6,-12 7,-10 C 9,-9 8,-6 6,-4 L 8,-3 C 9,-3 10,-1 9,0 L 6,2 C 4,3 2,4 0,5 Z`;

  return (
    <div className={`w-full my-2 ${className}`} aria-hidden="true" style={{ overflow: "visible" }}>
      <svg
        viewBox="0 0 900 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", overflow: "visible", display: "block" }}
        aria-hidden="true"
      >
        <defs>
          {/* Hand-drawn wobble for branches */}
          <filter id="branch-rough" x="-2%" y="-30%" width="104%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.038" numOctaves="4" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3.2" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          {/* Lighter wobble for leaves */}
          <filter id="leaf-rough" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves="3" seed="14" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* ── Main branch ── */}
        <g filter="url(#branch-rough)">
          <path
            d="M -10,60 C 80,57 180,63 290,58 C 400,53 490,59 600,54 C 700,50 800,55 910,48"
            stroke="#3D2008" strokeWidth="3.2" fill="none" strokeLinecap="round"
          />
        </g>

        {/* ── Sub-branches ── */}
        <g filter="url(#branch-rough)" stroke="#3D2008" fill="none" strokeLinecap="round">
          {/* Far left branch, upward */}
          <path d="M 105,58 C 100,48 94,35 88,22 C 84,13 80,7 76,1" strokeWidth="2" />
          <path d="M 118,50 C 126,40 132,30 136,20" strokeWidth="1.3" />

          {/* Centre-left branch */}
          <path d="M 268,57 C 261,45 254,31 247,17 C 243,9 239,4 235,0" strokeWidth="2" />
          <path d="M 280,46 C 290,35 296,24 300,14" strokeWidth="1.3" />

          {/* Centre branch */}
          <path d="M 458,54 C 450,41 443,27 436,13 C 432,5 429,1 426,-3" strokeWidth="1.9" />
          <path d="M 472,43 C 480,32 486,22 490,12" strokeWidth="1.2" />

          {/* Right branch */}
          <path d="M 642,52 C 636,40 630,26 625,13 C 622,6 620,1 618,-3" strokeWidth="1.8" />
          <path d="M 654,44 C 661,33 666,22 669,14" strokeWidth="1.2" />

          {/* Far right branch */}
          <path d="M 798,50 C 792,38 787,24 782,12" strokeWidth="1.7" />
        </g>

        {/* ── Leaves on branches ── */}
        <g filter="url(#leaf-rough)">
          {/* Branch 1 cluster */}
          <path d={leaf} fill="#C4622D" transform="translate(74, 3) rotate(-28) scale(0.88)" />
          <path d={leaf} fill="#D4922A" transform="translate(87, 16) rotate(32) scale(0.78)" />
          <path d={leaf} fill="#8B2C0E" transform="translate(99, 30) rotate(-8) scale(0.72)" />
          <path d={leaf} fill="#D4B020" transform="translate(137, 16) rotate(-40) scale(0.7)" />

          {/* Branch 2 cluster */}
          <path d={leaf} fill="#D4922A" transform="translate(233, 2) rotate(-22) scale(0.9)" />
          <path d={leaf} fill="#C4622D" transform="translate(244, 16) rotate(36) scale(0.82)" />
          <path d={leaf} fill="#8B2C0E" transform="translate(302, 10) rotate(-28) scale(0.74)" />
          <path d={leaf} fill="#D4B020" transform="translate(258, 32) rotate(18) scale(0.68)" />

          {/* Branch 3 cluster */}
          <path d={leaf} fill="#8B2C0E" transform="translate(424, -1) rotate(-18) scale(0.88)" />
          <path d={leaf} fill="#C4622D" transform="translate(437, 12) rotate(24) scale(0.8)" />
          <path d={leaf} fill="#D4922A" transform="translate(492, 8) rotate(-38) scale(0.72)" />
          <path d={leaf} fill="#4A6028" transform="translate(449, 28) rotate(-5) scale(0.7)" />

          {/* Branch 4 cluster */}
          <path d={leaf} fill="#C4622D" transform="translate(616, -1) rotate(-20) scale(0.85)" />
          <path d={leaf} fill="#D4B020" transform="translate(628, 12) rotate(30) scale(0.78)" />
          <path d={leaf} fill="#D4922A" transform="translate(671, 10) rotate(-34) scale(0.7)" />

          {/* Branch 5 cluster */}
          <path d={leaf} fill="#D4922A" transform="translate(780, 14) rotate(-24) scale(0.82)" />
          <path d={leaf} fill="#C4622D" transform="translate(792, 26) rotate(42) scale(0.72)" />
        </g>

        {/* ── Fallen / drifting leaves ── */}
        <g filter="url(#leaf-rough)" opacity="0.65">
          <path d={leaf} fill="#D4B020" transform="translate(45, 82) rotate(68) scale(0.62)" />
          <path d={leaf} fill="#C4622D" transform="translate(195, 86) rotate(-52) scale(0.58)" />
          <path d={leaf} fill="#8B2C0E" transform="translate(370, 84) rotate(75) scale(0.6)" />
          <path d={leaf} fill="#D4922A" transform="translate(540, 88) rotate(-60) scale(0.56)" />
          <path d={leaf} fill="#C4622D" transform="translate(720, 83) rotate(55) scale(0.6)" />
          <path d={leaf} fill="#4A6028" transform="translate(858, 80) rotate(-44) scale(0.58)" />
        </g>
      </svg>
    </div>
  );
}
