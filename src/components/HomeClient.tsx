"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import FabricBackground from "@/components/FabricBackground";
import PatchSection from "@/components/PatchSection";
import PatchStripSeparator from "@/components/PatchStripSeparator";
import MughalTree from "@/components/MughalTree";
import BotanicalCorner from "@/components/BotanicalCorner";
import { PostMeta } from "@/lib/posts";

// Quiet centered text between sections — feels like a passing thought
function NarrativeBridge({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.42 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      style={{
        fontFamily: "var(--font-lora), Georgia, serif",
        fontSize: "0.9375rem",
        lineHeight: 1.8,
        color: "#6B4C35",
        fontStyle: "italic",
        textAlign: "center",
        maxWidth: "44ch",
        margin: "0 auto 3rem",
        letterSpacing: "0.01em",
      }}
    >
      {children}
    </motion.p>
  );
}

export default function HomeClient({ posts }: { posts: PostMeta[] }) {
  const recent = posts.slice(0, 3);

  return (
    <main style={{ minHeight: "100vh", color: "#2C1A0E" }}>
      <FabricBackground />

      {/* ── SECTION 1: HERO — two-column, tree on right ─────── */}
      <section style={{ padding: "5rem 0 4rem" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left — typography */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.68rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#C0572D",
                marginBottom: "1.5rem",
              }}>
                khushi sharma
              </p>

              <h1 style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 400,
                color: "#2C1A0E",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "1.25rem",
              }}>
                AI engineer.<br />Writer.<br />Both.
              </h1>

              <p style={{
                fontFamily: "var(--font-lora), Georgia, serif",
                fontSize: "1.0625rem",
                lineHeight: 1.8,
                color: "#6B4C35",
                maxWidth: "38ch",
                marginBottom: "2.5rem",
              }}>
                Building systems that think and words that feel.
                This is where those two live together.
              </p>

              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <Link href="/writing" style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#FDF6EC",
                  background: "#C0572D",
                  padding: "0.7em 1.75em",
                  borderRadius: "2px",
                  textDecoration: "none",
                }}>
                  read the writing
                </Link>
                <Link href="/about" style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#8B5E3C",
                  textDecoration: "none",
                  borderBottom: "1px solid #C0572D44",
                  paddingBottom: "2px",
                }}>
                  about
                </Link>
              </div>
            </motion.div>

            {/* Right — Mughal tree */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center md:justify-end"
            >
              <MughalTree className="w-56 md:w-72 lg:w-80" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SEPARATOR + BRIDGE ────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <PatchStripSeparator />
      </div>

      {/* ── SECTION 2: WRITING ──────────────────────────────── */}
      <section style={{ padding: "1rem 0 4rem" }}>
        <div className="max-w-6xl mx-auto px-6">

          <NarrativeBridge>
            Some things I write when I can&apos;t explain them.
          </NarrativeBridge>

          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#A8886E",
            marginBottom: "2rem",
          }}>
            recent writing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recent.map((post, i) => {
              const variants = ["rust", "indigo", "mehendi"] as const;
              const cornerColors = ["#D4A017", "#A0A0E0", "#A0C060"] as const;
              const date = post.date
                ? new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric", month: "short", year: "numeric",
                  })
                : "";
              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 380, damping: 22 } }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{ cursor: "pointer" }}
                >
                  <Link href={`/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <PatchSection variant={variants[i % variants.length]}>
                      {/* One botanical corner per card — top right only */}
                      <BotanicalCorner
                        color={cornerColors[i % cornerColors.length]}
                        opacity={0.2}
                        corner="tr"
                      />
                      {post.type && (
                        <p style={{
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          fontSize: "0.6rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "rgba(243,233,220,0.5)",
                          marginBottom: "0.75rem",
                        }}>
                          {post.type}
                        </p>
                      )}
                      <h2 style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: "1.1875rem",
                        fontWeight: 400,
                        lineHeight: 1.35,
                        color: "#F3E9DC",
                        marginBottom: "0.75rem",
                      }}>
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p style={{
                          fontFamily: "var(--font-lora), Georgia, serif",
                          fontSize: "0.875rem",
                          lineHeight: 1.7,
                          color: "rgba(243,233,220,0.65)",
                          marginBottom: "1.25rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}>
                          {post.excerpt}
                        </p>
                      )}
                      <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "0.65rem",
                        color: "rgba(243,233,220,0.4)",
                        letterSpacing: "0.06em",
                      }}>
                        {date}
                      </p>
                    </PatchSection>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {posts.length > 3 && (
            <div style={{ marginTop: "2rem", textAlign: "right" }}>
              <Link href="/writing" style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: "#C0572D",
                textDecoration: "none",
                borderBottom: "1px solid #C0572D44",
                paddingBottom: "2px",
              }}>
                all writing →
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* ── SEPARATOR + BRIDGE ────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6">
        <PatchStripSeparator />
      </div>

      {/* ── SECTION 3: CURRENTLY ─────────────────────────────── */}
      <section style={{ padding: "1rem 0 6rem" }}>
        <div className="max-w-6xl mx-auto px-6">

          <NarrativeBridge>
            Some things I build when words are not enough.
          </NarrativeBridge>

          <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#A8886E",
            marginBottom: "2rem",
          }}>
            currently
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { variant: "gold",  label: "building",       text: "Agentic systems that reason across context. Evaluation frameworks for open-ended AI outputs." },
              { variant: "rose",  label: "reading",        text: "Maggie Nelson. Research papers. Old journals. Anything at the edge of feeling and knowing." },
              { variant: "sage",  label: "thinking about", text: "What it means to accept the life you didn't plan for — and find it still has warmth." },
            ].map(({ variant, label, text }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <PatchSection variant={variant as "gold" | "rose" | "sage"}>
                  <BotanicalCorner color="#8B5E3C" opacity={0.14} corner="tr" />
                  <p style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#8B5E3C",
                    marginBottom: "0.75rem",
                  }}>
                    {label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.75,
                    color: "#2C1A0E",
                  }}>
                    {text}
                  </p>
                </PatchSection>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
