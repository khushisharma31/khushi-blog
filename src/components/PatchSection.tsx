"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { patches, type PatchVariant } from "@/lib/patches";

// Re-export so existing imports from "@/components/PatchSection" continue to work
export { patches };
export type { PatchVariant };

interface PatchSectionProps {
  children: ReactNode;
  variant?: PatchVariant;
  float?: boolean;
  className?: string;
}

export default function PatchSection({
  children,
  variant = "parchment",
  float = false,
  className = "",
}: PatchSectionProps) {
  const p = patches[variant];

  const inner = (
    <div
      className={className}
      style={{
        background: p.bg,
        borderRadius: "22px 16px 20px 18px",
        padding: "2.25rem 2rem 2.25rem 2.75rem",
        border: `1px solid ${p.border}44`,
        boxShadow: `
          0 6px 32px rgba(0,0,0,0.12),
          0 1px 0 rgba(255,255,255,0.14) inset
        `,
        position: "relative",
        overflow: "hidden",
        color: p.text,
      }}
    >
      {/* Left edge — a sliver of different fabric stitched on */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, bottom: 0,
        width: "20px",
        background: `${p.border}2E`,
        borderRadius: "22px 0 0 18px",
        overflow: "hidden",
      }}>
        {/* Vertical thread grain inside the strip */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(0deg, ${p.stitch} 0px, ${p.stitch} 1px, transparent 1px, transparent 5px)`,
        }} />
        {/* Stitch seam where strip meets card body */}
        <div style={{
          position: "absolute",
          top: "6%", bottom: "6%",
          right: "1px",
          borderRight: `1.5px dashed ${p.stitch}`,
        }} />
      </div>

      {/* Diagonal weave grain — the fabric texture you feel, barely see */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          repeating-linear-gradient(45deg, ${p.grain} 0px, ${p.grain} 1px, transparent 1px, transparent 4px),
          repeating-linear-gradient(-45deg, ${p.grain} 0px, ${p.grain} 1px, transparent 1px, transparent 6px)
        `,
        pointerEvents: "none",
      }} />

      {/* Top thread-colour accent line */}
      <div style={{
        position: "absolute",
        top: 0, left: "12%", right: "12%",
        height: "2px",
        background: `linear-gradient(90deg, transparent, ${p.border}70, transparent)`,
        borderRadius: "0 0 2px 2px",
      }} />

      {children}
    </div>
  );

  if (!float) return inner;

  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {inner}
    </motion.div>
  );
}
