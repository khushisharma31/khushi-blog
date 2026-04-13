"use client";

import Link from "next/link";
import { PostMeta } from "@/lib/posts";

type PatchStyle = {
  bg: string;
  bgHover: string;
  pattern: string;
  patternSize: string;
  border: string;
  accentText: string;
  labelColor: string;
};

const typeStyles: Record<string, PatchStyle> = {
  poem: {
    bg: "#FAE8E0",
    bgHover: "#F5DDD4",
    pattern: "radial-gradient(circle, rgba(196,98,45,0.25) 1.5px, transparent 1.5px)",
    patternSize: "16px 16px",
    border: "#C4622D",
    accentText: "#8B3A1F",
    labelColor: "#C4622D",
  },
  essay: {
    bg: "#FBF0D8",
    bgHover: "#F5E6C8",
    pattern: "linear-gradient(45deg, rgba(139,90,31,0.18) 1px, transparent 1px), linear-gradient(-45deg, rgba(139,90,31,0.18) 1px, transparent 1px)",
    patternSize: "20px 20px",
    border: "#B8862A",
    accentText: "#7A5A10",
    labelColor: "#B8862A",
  },
  "thinking out loud": {
    bg: "#E6EDDA",
    bgHover: "#DCE4CE",
    pattern: "repeating-linear-gradient(-45deg, transparent, transparent 7px, rgba(90,107,53,0.18) 7px, rgba(90,107,53,0.18) 8px)",
    patternSize: "auto",
    border: "#5A6B35",
    accentText: "#3A4A20",
    labelColor: "#5A6B35",
  },
};

const fallbackPatches: PatchStyle[] = [
  {
    bg: "#FAE8E0",
    bgHover: "#F5DDD4",
    pattern: "radial-gradient(circle, rgba(196,98,45,0.22) 1.5px, transparent 1.5px)",
    patternSize: "16px 16px",
    border: "#C4622D",
    accentText: "#8B3A1F",
    labelColor: "#C4622D",
  },
  {
    bg: "#FBF0D8",
    bgHover: "#F5E6C8",
    pattern: "linear-gradient(45deg, rgba(139,90,31,0.18) 1px, transparent 1px), linear-gradient(-45deg, rgba(139,90,31,0.18) 1px, transparent 1px)",
    patternSize: "20px 20px",
    border: "#B8862A",
    accentText: "#7A5A10",
    labelColor: "#B8862A",
  },
  {
    bg: "#E6EDDA",
    bgHover: "#DCE4CE",
    pattern: "repeating-linear-gradient(-45deg, transparent, transparent 7px, rgba(90,107,53,0.18) 7px, rgba(90,107,53,0.18) 8px)",
    patternSize: "auto",
    border: "#5A6B35",
    accentText: "#3A4A20",
    labelColor: "#5A6B35",
  },
];

interface PostCardProps {
  post: PostMeta;
  index: number;
  featured?: boolean;
}

export default function PostCard({ post, index, featured = false }: PostCardProps) {
  const patch =
    (post.type && typeStyles[post.type.toLowerCase()]) ||
    fallbackPatches[index % fallbackPatches.length];

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <Link href={`/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        style={{
          background: patch.bg,
          backgroundImage: patch.pattern,
          backgroundSize: patch.patternSize,
          border: `1px solid`,
          borderColor: `${patch.border}55`,
          borderLeft: `5px solid ${patch.border}`,
          borderRadius: "2px",
          padding: featured ? "2rem 1.75rem" : "1.4rem 1.4rem",
          cursor: "pointer",
          transition: "box-shadow 0.2s, background-color 0.2s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = patch.bgHover;
          el.style.boxShadow = `3px 4px 16px rgba(0,0,0,0.08)`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.backgroundColor = patch.bg;
          el.style.boxShadow = "none";
        }}
      >
        {/* Type label */}
        {post.type && (
          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.675rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: patch.labelColor,
            marginBottom: "0.5rem",
          }}>
            {post.type}
          </p>
        )}

        {/* Title */}
        <h2 style={{
          fontFamily: "var(--font-lora), Georgia, serif",
          fontSize: featured ? "1.375rem" : "1.125rem",
          fontWeight: 400,
          color: "#2C1A0E",
          lineHeight: 1.4,
          marginBottom: post.excerpt ? "0.5rem" : "0.75rem",
        }}>
          {post.title}
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p style={{
            fontFamily: "var(--font-lora), Georgia, serif",
            fontSize: "0.9rem",
            lineHeight: 1.65,
            color: "#6B4C35",
            marginBottom: "0.85rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {post.excerpt}
          </p>
        )}

        {/* Date */}
        <span style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: "0.7rem",
          color: patch.accentText,
          opacity: 0.75,
        }}>
          {formattedDate}
        </span>
      </article>
    </Link>
  );
}
