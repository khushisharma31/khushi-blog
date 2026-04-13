// Subtle botanical vine ornament for patch corners
// The patch must have position:relative (PatchSection already does)
import type { CSSProperties } from "react";

type Props = {
  color?: string;
  opacity?: number;
  size?: number;
  corner?: "tr" | "tl" | "br" | "bl";
};

export default function BotanicalCorner({
  color = "#D4A017",
  opacity = 0.18,
  size = 54,
  corner = "tr",
}: Props) {
  const pos: CSSProperties = { position: "absolute", pointerEvents: "none", width: size, height: size };
  if (corner === "tr" || corner === "br") pos.right = 10;
  if (corner === "tl" || corner === "bl") pos.left  = 10;
  if (corner === "tr" || corner === "tl") pos.top    = 10;
  if (corner === "br" || corner === "bl") pos.bottom = 10;

  // Flip the vine drawing so it always curves into the patch
  const sx = corner === "tl" || corner === "bl" ? -1 : 1;
  const sy = corner === "br" || corner === "bl" ? -1 : 1;
  const tx = sx < 0 ? size : 0;
  const ty = sy < 0 ? size : 0;

  return (
    <svg
      viewBox="0 0 54 54"
      width={size}
      height={size}
      style={{ ...pos, opacity }}
      aria-hidden="true"
    >
      <g transform={`translate(${tx}, ${ty}) scale(${sx}, ${sy})`}>
        {/* Curling vine */}
        <path
          d="M 52,2 C 44,6 30,16 20,28 C 12,38 8,46 6,52"
          stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round"
        />
        {/* Three leaves budding off the vine */}
        <ellipse cx={44} cy={9}  rx={4}   ry={7.5} fill={color} transform="rotate(-42, 44, 9)"  />
        <ellipse cx={29} cy={20} rx={3.5} ry={6.5} fill={color} transform="rotate(-62, 29, 20)" />
        <ellipse cx={15} cy={34} rx={3}   ry={6}   fill={color} transform="rotate(-78, 15, 34)" />
        {/* Small 3-petal flower at vine tip */}
        <circle cx={7}  cy={50} r={2.2}  fill={color} />
        <circle cx={4}  cy={47} r={1.5}  fill={color} />
        <circle cx={10} cy={47} r={1.5}  fill={color} />
        <circle cx={7}  cy={45} r={1.5}  fill={color} />
      </g>
    </svg>
  );
}
