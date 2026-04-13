"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import FabricBackground from "@/components/FabricBackground";
import QuiltCard from "@/components/QuiltCard";
import PatchStripSeparator from "@/components/PatchStripSeparator";
import { PostMeta } from "@/lib/posts";
import { typeToVariant, slugSeed, isLight } from "@/lib/quilt";

export default function WritingClient({ posts }: { posts: PostMeta[] }) {
  const [featured, ...rest] = posts;

  return (
    <main style={{ minHeight: "100vh", color: "#2C1A0E" }}>
      <FabricBackground />

      {/* ── HEADER ────────────────────────────────────────────── */}
      <section style={{ padding: "4rem 0 2rem" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#A8886E",
              marginBottom: "1rem",
            }}>
              all writing
            </p>
            <p style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "1.25rem",
              lineHeight: 1.7,
              color: "#6B4C35",
              maxWidth: "46ch",
            }}>
              Poems, essays, technical reflections, the in-between.
              No categories — everything lives here together.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <PatchStripSeparator />
      </div>

      <div className="max-w-5xl mx-auto px-6" style={{ paddingBottom: "6rem" }}>

        {/* ── FEATURED ──────────────────────────────────────────── */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: "2rem" }}
          >
            <p style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#A8886E",
              marginBottom: "0.75rem",
            }}>
              latest
            </p>
            <Link href={`/${featured.slug}`} style={{ textDecoration: "none", display: "block" }}>
              <motion.div whileHover={{ y: -4, transition: { type: "spring", stiffness: 380, damping: 22 } }}>
                <QuiltCard variant="parchment" seed={slugSeed(featured.slug)}>
                  {featured.type && (
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#8B3A1F",
                      marginBottom: "0.75rem",
                    }}>
                      {featured.type}
                    </p>
                  )}
                  <h2 style={{
                    fontFamily: "var(--font-lora), Georgia, serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    fontWeight: 400,
                    color: "#2C1A0E",
                    lineHeight: 1.25,
                    marginBottom: "0.875rem",
                  }}>
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p style={{
                      fontFamily: "var(--font-lora), Georgia, serif",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "#6B4C35",
                      maxWidth: "60ch",
                      marginBottom: "1.25rem",
                    }}>
                      {featured.excerpt}
                    </p>
                  )}
                  {featured.date && (
                    <p style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: "0.65rem",
                      color: "#A8886E",
                      letterSpacing: "0.06em",
                    }}>
                      {new Date(featured.date).toLocaleDateString("en-IN", {
                        day: "numeric", month: "long", year: "numeric",
                      })}
                    </p>
                  )}
                </QuiltCard>
              </motion.div>
            </Link>
          </motion.div>
        )}

        {/* ── GRID ──────────────────────────────────────────────── */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post, i) => {
              const variant = typeToVariant(post.type, i);
              const light = isLight(variant);
              const date = post.date
                ? new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric", month: "short", year: "numeric",
                  })
                : "";
              return (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 380, damping: 22 } }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ cursor: "pointer" }}
                >
                  <Link href={`/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <QuiltCard variant={variant} seed={slugSeed(post.slug)}>
                      {post.type && (
                        <p style={{
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          fontSize: "0.6rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: light ? "rgba(44,26,14,0.55)" : "rgba(243,233,220,0.55)",
                          marginBottom: "0.6rem",
                        }}>
                          {post.type}
                        </p>
                      )}
                      <h2 style={{
                        fontFamily: "var(--font-lora), Georgia, serif",
                        fontSize: "1.125rem",
                        fontWeight: 400,
                        lineHeight: 1.35,
                        color: light ? "#2C1A0E" : "#F3E9DC",
                        marginBottom: "0.6rem",
                      }}>
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p style={{
                          fontFamily: "var(--font-lora), Georgia, serif",
                          fontSize: "0.875rem",
                          lineHeight: 1.65,
                          color: light ? "rgba(44,26,14,0.68)" : "rgba(243,233,220,0.65)",
                          marginBottom: "1rem",
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
                        color: light ? "rgba(44,26,14,0.45)" : "rgba(243,233,220,0.4)",
                        letterSpacing: "0.06em",
                      }}>
                        {date}
                      </p>
                    </QuiltCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}

        {posts.length === 0 && (
          <p style={{
            padding: "5rem 0",
            textAlign: "center",
            fontFamily: "var(--font-lora), Georgia, serif",
            fontStyle: "italic",
            color: "#A8886E",
          }}>
            Nothing here yet. Come back soon.
          </p>
        )}
      </div>
    </main>
  );
}
