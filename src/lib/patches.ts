// Fabric palette for patchwork components.
// Kept in a plain module (not under a "use client" file) so that both
// server components (the post reader) and client components (the writing
// grid, home hero) can import without crossing the RSC boundary awkwardly.

export const patches = {
  rust:      { bg: "#8B2E18", text: "#F3E9DC", border: "#C0572D", stitch: "rgba(212,160,23,0.35)",  label: "#D4A017", grain: "rgba(255,255,255,0.055)" },
  amber:     { bg: "#7A5008", text: "#F3E9DC", border: "#D4A017", stitch: "rgba(192,87,45,0.35)",   label: "#F0C060", grain: "rgba(255,255,255,0.05)"  },
  teal:      { bg: "#1A5858", text: "#F3E9DC", border: "#2E8B8B", stitch: "rgba(46,139,139,0.4)",   label: "#70D0C8", grain: "rgba(255,255,255,0.05)"  },
  mehendi:   { bg: "#2E4818", text: "#F3E9DC", border: "#5B7C3D", stitch: "rgba(91,124,61,0.4)",    label: "#A0C060", grain: "rgba(255,255,255,0.05)"  },
  pink:      { bg: "#7A3040", text: "#F3E9DC", border: "#C97B84", stitch: "rgba(201,123,132,0.4)",  label: "#F0A0A8", grain: "rgba(255,255,255,0.05)"  },
  indigo:    { bg: "#1E1E40", text: "#F3E9DC", border: "#6060B0", stitch: "rgba(96,96,176,0.4)",    label: "#A0A0E0", grain: "rgba(255,255,255,0.045)" },
  parchment: { bg: "#F0E0C8", text: "#2C1A0E", border: "#C0572D", stitch: "rgba(192,87,45,0.2)",   label: "#8B3A1F", grain: "rgba(100,60,20,0.065)"   },
  rose:      { bg: "#F0D4CC", text: "#2C1A0E", border: "#C97B84", stitch: "rgba(201,123,132,0.25)",label: "#9B4858", grain: "rgba(100,50,40,0.06)"    },
  sage:      { bg: "#D4E0C0", text: "#1A2810", border: "#5B7C3D", stitch: "rgba(91,124,61,0.3)",    label: "#2E4818", grain: "rgba(40,80,20,0.065)"    },
  gold:      { bg: "#EED898", text: "#2C1A0E", border: "#D4A017", stitch: "rgba(180,130,10,0.3)",   label: "#6B4800", grain: "rgba(100,70,10,0.065)"   },
} as const;

export type PatchVariant = keyof typeof patches;
