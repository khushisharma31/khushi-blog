"use client";
import { motion } from "framer-motion";
import FabricBackground from "@/components/FabricBackground";
import PatchSection from "@/components/PatchSection";
import PatchStripSeparator from "@/components/PatchStripSeparator";
import BotanicalCorner from "@/components/BotanicalCorner";

export default function AboutClient() {
  return (
    <main style={{ minHeight: "100vh", color: "#2C1A0E" }}>
      <FabricBackground />

      {/* ── HEADER ────────────────────────────────────────────── */}
      <section style={{ padding: "4rem 0 3rem" }}>
        <div className="max-w-3xl mx-auto px-6">
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
              about
            </p>
            <h1 style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "#2C1A0E",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 0,
            }}>
              Khushi Sharma
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <PatchStripSeparator />
      </div>

      {/* ── BIO ───────────────────────────────────────────────── */}
      <section style={{ padding: "1rem 0 3rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: "1.0625rem",
              lineHeight: 1.85,
              color: "#2C1A0E",
            }}
          >
            <p style={{ marginBottom: "1.5em" }}>
              I build things that think. During the day, that means designing and
              engineering agentic AI systems — the kind that reason, plan, and act across
              complex tasks. I&apos;ve been doing this since before it was a job title.
            </p>
            <p style={{ marginBottom: "1.5em" }}>
              But I have always, before anything else, been a writer.
            </p>
            <p style={{ marginBottom: "1.5em" }}>
              I wrote my first poem about a maple tree and the people who leave pieces
              of themselves with you. I&apos;ve been writing since — journals, poems, fragments,
              ideas that live between a line of code and a line of verse.
            </p>

            {/* ── MAPLE-TREE POEM EXCERPT ────────────────────────────
                 Placeholder — replace these four lines with the actual
                 first-poem excerpt when ready. */}
            <blockquote style={{
              margin: "2em 0 2.25em",
              padding: "0.25em 0 0.25em 1.5em",
              borderLeft: "2px solid #C0572D66",
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 2,
              color: "#6B4C35",
              fontFamily: "var(--font-lora), Georgia, serif",
            }}>
              A maple tree holds what it cannot keep —<br />
              the red leaves, the gold ones, the ones still green.<br />
              Some people leave pieces of themselves behind<br />
              and call it love. Or autumn. Or the wind.
              <span style={{
                display: "block",
                marginTop: "0.75em",
                fontSize: "0.65rem",
                fontStyle: "normal",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#A8886E",
              }}>
                — from the first poem
              </span>
            </blockquote>
            <p style={{ marginBottom: "1.5em" }}>
              For a long time I kept these two selves separate. The engineer and the poet.
              The one who builds systems and the one who breaks open feelings.
              I don&apos;t do that anymore.
            </p>
            <p style={{ marginBottom: "1.5em", color: "#6B4C35" }}>
              This space exists because I believe the same mind that designs a reasoning
              architecture can write a poem about loss. That precision and tenderness
              are not opposites. That you can debug a production system at 2am and cry
              over a song an hour later and both of those things are true and neither
              cancels the other out.
            </p>
            <p style={{ marginBottom: "1.5em", color: "#6B4C35" }}>
              I&apos;m also, right now, in a season of recalibration. Plans I built carefully
              fell through — not from failure, but from circumstance. I&apos;m learning
              to hold that without making it mean something it doesn&apos;t. I&apos;m
              following a faint spark and trusting it knows something I don&apos;t.
            </p>
            <p style={{ marginBottom: "1.5em", color: "#6B4C35" }}>
              This blog is part of that.
            </p>
            <p style={{ color: "#6B4C35" }}>
              Everything here is honest. Some of it will be technical. Some of it will be
              tender. Most of it will be both. You&apos;re welcome to stay.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <PatchStripSeparator />
      </div>

      {/* ── INFO CARDS ────────────────────────────────────────── */}
      <section style={{ padding: "1rem 0 6rem" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <PatchSection variant="gold">
                <BotanicalCorner color="#D4A017" opacity={0.2} corner="tr" />
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#6B4800",
                  marginBottom: "1.25rem",
                }}>
                  what I do
                </p>
                <ul style={{
                  fontFamily: "var(--font-lora), Georgia, serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: "#2C1A0E",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}>
                  {[
                    "Agentic AI systems",
                    "Generative AI applications",
                    "AI system design & architecture",
                    "Writing — poems, essays, the in-between",
                  ].map((item) => (
                    <li key={item} style={{ marginBottom: "0.5em", paddingLeft: "1.1em", position: "relative" }}>
                      <span style={{
                        position: "absolute", left: 0, top: "0.55em",
                        width: "5px", height: "5px", borderRadius: "50%",
                        background: "#D4A017", display: "block",
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </PatchSection>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <PatchSection variant="parchment">
                <BotanicalCorner color="#C0572D" opacity={0.18} corner="tr" />
                <p style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#8B3A1F",
                  marginBottom: "1.25rem",
                }}>
                  find me
                </p>
                <ul style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}>
                  <li style={{ marginBottom: "0.75em" }}>
                    <a
                      href="mailto:hello@khushi-sharma.com"
                      style={{
                        color: "#C0572D",
                        textDecoration: "underline",
                        textDecorationColor: "#C0572D44",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      hello@khushi-sharma.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/khushi-sharma"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#C0572D",
                        textDecoration: "underline",
                        textDecorationColor: "#C0572D44",
                        textUnderlineOffset: "3px",
                      }}
                    >
                      github
                    </a>
                  </li>
                </ul>
              </PatchSection>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
