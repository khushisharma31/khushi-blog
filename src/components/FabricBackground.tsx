"use client";
import { motion } from "framer-motion";

export default function FabricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Layer 1: Warm parchment base — very slightly uneven */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(148deg, #FEF2E4 0%, #F3E4CC 30%, #F8ECD8 55%, #F0E2CE 78%, #FBF1E6 100%)",
      }} />

      {/* Layer 2: Woven thread texture — horizontal + vertical */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          repeating-linear-gradient(0deg,   rgba(160,90,50,0.04) 0px, rgba(160,90,50,0.04) 1px, transparent 1px, transparent 5px),
          repeating-linear-gradient(90deg,  rgba(160,90,50,0.04) 0px, rgba(160,90,50,0.04) 1px, transparent 1px, transparent 5px),
          repeating-linear-gradient(45deg,  rgba(160,90,50,0.018) 0px, rgba(160,90,50,0.018) 1px, transparent 1px, transparent 12px),
          repeating-linear-gradient(-45deg, rgba(160,90,50,0.018) 0px, rgba(160,90,50,0.018) 1px, transparent 1px, transparent 12px)
        `,
      }} />

      {/* Layer 3: Diagonal paper grain — adds warmth and slight imperfection */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          repeating-linear-gradient(135deg, rgba(160,90,50,0.024) 0px, rgba(160,90,50,0.024) 1px, transparent 1px, transparent 9px)
        `,
      }} />

      {/* Layer 4: Colour pools — slow breathing orbs */}
      <motion.div
        animate={{ scale: [1, 1.14, 1], opacity: [0.07, 0.15, 0.07] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", top: "3%", left: "-2%",
          width: "58vw", height: "58vw", borderRadius: "50%",
          background: "radial-gradient(circle, #C0572D 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.09, 1], opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          position: "absolute", top: "38%", right: "-2%",
          width: "46vw", height: "46vw", borderRadius: "50%",
          background: "radial-gradient(circle, #2E8B8B 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.11, 1], opacity: [0.05, 0.11, 0.05] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        style={{
          position: "absolute", bottom: "8%", left: "28%",
          width: "42vw", height: "42vw", borderRadius: "50%",
          background: "radial-gradient(circle, #D4A017 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
      {/* Small accent orb — breaks the 3-point symmetry */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        style={{
          position: "absolute", top: "18%", right: "22%",
          width: "24vw", height: "24vw", borderRadius: "50%",
          background: "radial-gradient(circle, #5B7C3D 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Layer 5: Very faint edge vignette — depth without darkness */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 120% 90% at 50% 45%, transparent 38%, rgba(140,80,40,0.07) 100%)",
      }} />

    </div>
  );
}
