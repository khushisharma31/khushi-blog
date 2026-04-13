"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const patches = {
  rust:    { bg: "#8B2E18", text: "#F3E9DC", border: "#C0572D", stitch: "rgba(212,160,23,0.35)",  label: "#D4A017", grain: "rgba(255,255,255,0.055)" },
  amber:   { bg: "#7A5008", text: "#F3E9DC", border: "#D4A017", stitch: "rgba(192,87,45,0.35)",   label: "#F0C060", grain: "rgba(255,255,255,0.05)"  },
  teal:    { bg: "#1A5858", text: "#F3E9DC", border: "#2E8B8B", stitch: "rgba(46,139,139,0.4)",   label: "#70D0C8", grain: "rgba(255,255,255,0.05)"  },
  mehendi: { bg: "#2E4818", text: "#F3E9DC", border: "#5B7C3D", stitch: "rgba(91,124,61,0.4)",    label: "#A0C060", grain: "rgba(255,255,255,0.05)"  },
  pink:    { bg: "#7A3040", text: "#F3E9DC", border: "#C97B84", stitch: "rgba(201,123,132,0.4)",  label: "#F0A0A8", grain: "rgba(255,255,255,0.05)"  },
  indigo:  { bg: "#1E1E40", text: "#F3E9DC", border: "#6060B0", stitch: "rgba(96,96,176,0.4)",    label: "#A0A0E0", grain: "rgba(255,255,255,0.045)" },
  parchment: { bg: "#F0E0C8", text: "#2C1A0E", border: "#C0572D", stitch: "rgba(192,87,45,0.2)", label: "#8B3A1F", grain: "rgba(100,60,20,0.065)"   },
  rose:    { bg: "#F0D4CC", text: "#2C1A0E", border: "#C97B84", stitch: "rgba(201,123,132,0.25)",label: "#9B4858", grain: "rgba(100,50,40,0.06)"    },
  sage:    { bg: "#D4E0C0", text: "#1A2810", border: "#5B7C3D", stitch: "rgba(91,124,61,0.3)",    label: "#2E4818", grain: "rgba(40,80,20,0.065)"    },
  gold:    { bg: "#EED898", text: "#2C1A0E", border: "#D4A017", stitch: "rgba(180,130,10,0.3)",   label: "#6B4800", grain: "rgba(100,70,10,0.065)"   },
} as const;

export type PatchVariant = keyof typeof patches;

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
