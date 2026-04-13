"use client";
import { ReactNode, useState } from "react";
import type { CSSProperties } from "react";
import * as React from "react";

// React 19.2 exports `ViewTransition` but the @types/react version installed
// exposes it only behind experimental/canary — `react` from Next's bundled
// runtime has it at runtime. We grab it via a typed cast.
const ViewTransition = (
  React as unknown as { ViewTransition: React.ComponentType<{ name?: string; children: ReactNode }> }
).ViewTransition;
import { patches, type PatchVariant } from "@/lib/patches";

// ── FABRIC SWATCH POOL ──────────────────────────────────────
// Each swatch = a small bolt of fabric. Mix of solids + patterns
// (dots, stripes, diagonal weave, cross-hatch, floral).

type Pattern = "solid" | "dots" | "stripes" | "diagonal" | "cross" | "floral";
interface Swatch {
  bg: string;
  pattern?: Pattern;
  pc?: string;  // pattern colour
}

const swatches: Swatch[] = [
  // Warm solids
  { bg: "#8B2E18" },
  { bg: "#C0572D" },
  { bg: "#D4A017" },
  { bg: "#7A5008" },
  { bg: "#7A3040" },
  // Cool solids
  { bg: "#1A5858" },
  { bg: "#2E4818" },
  { bg: "#1E1E40" },
  // Light solids
  { bg: "#F0E0C8" },
  { bg: "#EED898" },
  { bg: "#D4E0C0" },
  { bg: "#F0D4CC" },
  // Warm patterned
  { bg: "#8B2E18", pattern: "dots",     pc: "rgba(240,220,180,0.40)" },
  { bg: "#C0572D", pattern: "stripes",  pc: "rgba(240,220,180,0.25)" },
  { bg: "#D4A017", pattern: "cross",    pc: "rgba(60,30,10,0.32)" },
  { bg: "#7A5008", pattern: "diagonal", pc: "rgba(240,220,180,0.25)" },
  { bg: "#7A3040", pattern: "floral",   pc: "rgba(240,180,168,0.45)" },
  // Cool patterned
  { bg: "#1A5858", pattern: "dots",     pc: "rgba(240,220,180,0.38)" },
  { bg: "#2E4818", pattern: "stripes",  pc: "rgba(240,220,180,0.22)" },
  { bg: "#1E1E40", pattern: "cross",    pc: "rgba(240,220,180,0.22)" },
  // Light patterned
  { bg: "#F0E0C8", pattern: "dots",     pc: "rgba(139,58,31,0.35)" },
  { bg: "#EED898", pattern: "cross",    pc: "rgba(180,130,10,0.3)"  },
  { bg: "#D4E0C0", pattern: "diagonal", pc: "rgba(91,124,61,0.30)" },
  { bg: "#F0D4CC", pattern: "floral",   pc: "rgba(139,58,31,0.32)" },
];

function swatchStyle(s: Swatch): CSSProperties {
  const style: CSSProperties = { background: s.bg };
  if (!s.pattern || s.pattern === "solid") return style;
  const c = s.pc ?? "rgba(255,255,255,0.2)";
  switch (s.pattern) {
    case "dots":
      style.backgroundImage = `radial-gradient(circle, ${c} 1px, transparent 1.5px)`;
      style.backgroundSize = "6px 6px";
      break;
    case "stripes":
      style.backgroundImage = `repeating-linear-gradient(90deg, transparent 0 3px, ${c} 3px 4px)`;
      break;
    case "diagonal":
      style.backgroundImage = `repeating-linear-gradient(45deg, transparent 0 4px, ${c} 4px 5px)`;
      break;
    case "cross":
      style.backgroundImage =
        `linear-gradient(to right, ${c} 1px, transparent 1px),` +
        `linear-gradient(to bottom, ${c} 1px, transparent 1px)`;
      style.backgroundSize = "8px 8px";
      break;
    case "floral":
      // 5-dot flower — a center with 4 petals
      style.backgroundImage =
        `radial-gradient(circle at 50% 25%, ${c} 1.3px, transparent 2px),` +
        `radial-gradient(circle at 25% 50%, ${c} 1.3px, transparent 2px),` +
        `radial-gradient(circle at 75% 50%, ${c} 1.3px, transparent 2px),` +
        `radial-gradient(circle at 50% 75%, ${c} 1.3px, transparent 2px),` +
        `radial-gradient(circle at 50% 50%, ${c} 1.5px, transparent 2.2px)`;
      style.backgroundSize = "16px 16px";
      break;
  }
  return style;
}

// Deterministic pseudo-random per seed — same card always renders the same quilt
function seeded(seed: number) {
  return (i: number) => {
    const x = Math.sin(seed * 9999 + i * 127) * 10000;
    return x - Math.floor(x);
  };
}

// Pick an index at least a few steps away from the current one so the
// hover-swap feels distinctly different, not a tiny tweak.
function jumpNext(cur: number) {
  const jump = 3 + Math.floor(Math.random() * 8);
  return (cur + jump) % swatches.length;
}

// ── Individual interactive patch ────────────────────────────
// Each patch is its own tiny piece of the quilt with its own state.
// Hover-enter swaps it to a new swatch (and it stays) so the user
// literally paints the card as they move across it.
function Patch({
  initialIdx,
  flexGrow,
  borderRight,
}: {
  initialIdx: number;
  flexGrow: number;
  borderRight: boolean;
}) {
  const [idx, setIdx] = useState(initialIdx);
  const [flash, setFlash] = useState(false);

  const onEnter = () => {
    setIdx((cur) => jumpNext(cur));
    setFlash(true);
    // release the flash state on next frame so CSS transition runs
    requestAnimationFrame(() => requestAnimationFrame(() => setFlash(false)));
  };

  return (
    <div
      onMouseEnter={onEnter}
      onFocus={onEnter}
      tabIndex={-1}
      style={{
        ...swatchStyle(swatches[idx]),
        flexGrow,
        flexShrink: 1,
        flexBasis: 0,
        borderRight: borderRight ? "1px dashed rgba(0,0,0,0.32)" : "none",
        transition: "transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease",
        transform: flash ? "scale(1.04)" : "scale(1)",
        filter: flash ? "brightness(1.12)" : "brightness(1)",
        cursor: "pointer",
        position: "relative",
      }}
    />
  );
}

interface QuiltCardProps {
  children: ReactNode;
  seed?: number;
  variant?: PatchVariant;
  className?: string;
  /** Wider quilt header — more patches per row so density stays right at
   *  full-container widths (e.g. the post page header). */
  wide?: boolean;
  /** If provided, wraps the card in a React <ViewTransition> with this name
   *  so the browser morphs between matching names across routes
   *  (writing grid card ↔ post page header). */
  transitionName?: string;
}

export default function QuiltCard({
  children,
  seed = 0,
  variant = "parchment",
  className = "",
  wide = false,
  transitionName,
}: QuiltCardProps) {
  const p = patches[variant];
  const rand = seeded(seed + 1);
  const stitchId = `stitch-${seed}-${variant}-${wide ? "w" : "n"}`;

  // Two asymmetric rows. Narrow cards: 5 + 6 = 11 patches.
  // Wide (post header): 7 + 8 = 15 patches so the weave doesn't look stretched.
  const row1 = wide ? 7 : 5;
  const row2 = wide ? 8 : 6;
  const total = row1 + row2;
  const row1H = wide ? 64 : 56;
  const row2H = wide ? 58 : 52;
  const contentPad = wide ? "2.25rem 2.25rem 2.5rem" : "1.75rem 1.75rem 2rem";

  // Pick initial swatch indices avoiding immediate neighbour repeats
  const initialIdxs: number[] = [];
  for (let i = 0; i < total; i++) {
    let pickIdx = 0;
    for (let a = 0; a < 4; a++) {
      pickIdx = Math.floor(rand(i + a * 1000) * swatches.length);
      if (i === 0 || swatches[initialIdxs[i - 1]].bg !== swatches[pickIdx].bg) break;
    }
    initialIdxs.push(pickIdx);
  }
  const widths = Array.from({ length: total }, (_, i) => 0.7 + rand(i + 200) * 0.9);

  const card = (
    <div
      className={className}
      style={{
        background: p.bg,
        borderRadius: "22px 16px 20px 18px",
        border: `1px solid ${p.border}44`,
        boxShadow: "0 6px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.14) inset",
        overflow: "hidden",
        color: p.text,
        position: "relative",
      }}
    >
      {/* ── Patchwork header ──────────────────────────────────── */}
      <div style={{ position: "relative" }} aria-hidden="true">
        <div style={{ display: "flex", height: `${row1H}px` }}>
          {initialIdxs.slice(0, row1).map((idx, i) => (
            <Patch
              key={`r1-${i}`}
              initialIdx={idx}
              flexGrow={widths[i]}
              borderRight={i < row1 - 1}
            />
          ))}
        </div>
        <div style={{
          display: "flex",
          height: `${row2H}px`,
          borderTop: "1px dashed rgba(0,0,0,0.34)",
        }}>
          {initialIdxs.slice(row1, total).map((idx, i) => (
            <Patch
              key={`r2-${i}`}
              initialIdx={idx}
              flexGrow={widths[i + row1]}
              borderRight={i < row2 - 1}
            />
          ))}
        </div>
      </div>

      {/* ── Cross-stitch seam ─────────────────────────────────── */}
      <svg
        style={{ width: "100%", height: "12px", display: "block", background: p.bg }}
        aria-hidden="true"
      >
        <defs>
          <pattern id={stitchId} x="0" y="0" width="14" height="12" patternUnits="userSpaceOnUse">
            <line x1="2" y1="2.5" x2="10" y2="9.5" stroke={p.border} strokeWidth="1.1" strokeLinecap="round" />
            <line x1="2" y1="9.5" x2="10" y2="2.5" stroke={p.border} strokeWidth="1.1" strokeLinecap="round" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${stitchId})`} />
      </svg>

      {/* ── Content area ──────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          padding: contentPad,
          backgroundImage:
            `repeating-linear-gradient(45deg, ${p.grain} 0 1px, transparent 1px 4px),` +
            `repeating-linear-gradient(-45deg, ${p.grain} 0 1px, transparent 1px 6px)`,
        }}
      >
        {children}
      </div>
    </div>
  );

  if (!transitionName) return card;
  return <ViewTransition name={transitionName}>{card}</ViewTransition>;
}
