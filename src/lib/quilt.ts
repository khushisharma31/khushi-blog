import { patches, type PatchVariant } from "@/lib/patches";

// Type → variant mapping. Mix of light + dark so the grid reads as a real quilt.
// Shared between the writing index, home recent-writing strip, and the post reader
// so a given post always "shows up" in the same fabric colour wherever it appears.
export function typeToVariant(type: string | undefined, index: number): PatchVariant {
  const map: Record<string, PatchVariant> = {
    poem: "rose",
    essay: "amber",
    "thinking out loud": "mehendi",
  };
  const fallbacks: PatchVariant[] = ["rust", "teal", "gold", "indigo", "sage", "pink"];
  const key = type?.toLowerCase() ?? "";
  return map[key] ?? fallbacks[index % fallbacks.length];
}

// Stable hash from slug → integer seed. Same post → same quilt, always.
export function slugSeed(slug: string) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) - h) + slug.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h) || 1;
}

// Does this variant use dark ink on a light fabric? (affects text colour choice)
export function isLight(v: PatchVariant) {
  return patches[v].text === "#2C1A0E" || patches[v].text === "#1A2810";
}
