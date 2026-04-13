import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import FabricBackground from "@/components/FabricBackground";
import PatchStripSeparator from "@/components/PatchStripSeparator";
import EndMotif from "@/components/EndMotif";
import PullQuote from "@/components/PullQuote";
import QuiltCard from "@/components/QuiltCard";
import { patches } from "@/lib/patches";
import { typeToVariant, slugSeed, isLight } from "@/lib/quilt";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// MDX custom components — authors can use these in their .mdx files
const mdxComponents = {
  PullQuote,
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Khushi Sharma`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  // ── Per-type layout settings ─────────────────────────────
  const type = post.type?.toLowerCase() ?? "";
  const isPoem     = type === "poem";
  const isEssay    = type === "essay";
  const isThinking = type === "thinking out loud";

  const proseClass = isPoem
    ? "prose-poem"
    : isEssay
    ? "prose-essay"
    : isThinking
    ? "prose-thinking"
    : "";

  const centered = isPoem;

  // Poems get a tighter container; essays/thinking get a roomier one
  const containerClass = isPoem ? "max-w-2xl" : "max-w-3xl";

  // ── Quilt continuity — same variant + seed as the grid card,
  //    so opening a post "zooms into" the same quilt you clicked.
  const variant = typeToVariant(post.type, 0);
  const seed    = slugSeed(post.slug);
  const light   = isLight(variant);
  const p       = patches[variant];

  // Text colours adapt to whether the quilt fabric is light or dark
  const headerTitleColor  = light ? "#2C1A0E" : "#F3E9DC";
  const headerBadgeColor  = p.label;
  const headerBadgeBg     = light ? "rgba(255,255,255,0.38)" : "rgba(0,0,0,0.22)";
  const headerBadgeBorder = light ? `${p.border}33` : `${p.border}55`;
  const headerDateColor   = light ? "rgba(44,26,14,0.55)" : "rgba(243,233,220,0.55)";

  return (
    <div style={{ minHeight: "100vh", color: "#2C1A0E" }}>
      <FabricBackground />

      {/* ── POST HEADER QUILT ──────────────────────────────────
           Wrapping title + type + date inside a wide QuiltCard
           makes the post reader feel continuous with the writing
           grid — clicking a card literally opens into that same
           quilt, just seen from the inside. */}
      <div
        className={`${containerClass} mx-auto px-6`}
        style={{ paddingTop: "3rem", paddingBottom: "2rem" }}
      >
        <QuiltCard variant={variant} seed={seed} wide transitionName={`quilt-${slug}`}>
          <div style={{ textAlign: centered ? "center" : "left" }}>
            {/* Type badge + date row */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              justifyContent: centered ? "center" : "flex-start",
            }}>
              {post.type && (
                <span style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: headerBadgeColor,
                  background: headerBadgeBg,
                  padding: "0.35em 1em",
                  borderRadius: "2px",
                  border: `1px solid ${headerBadgeBorder}`,
                }}>
                  {post.type}
                </span>
              )}
              <span style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "0.7rem",
                color: headerDateColor,
                letterSpacing: "0.04em",
              }}>
                {formattedDate}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: "var(--font-lora), Georgia, serif",
              fontSize: isPoem
                ? "clamp(1.75rem, 3.5vw, 2.5rem)"
                : "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: headerTitleColor,
              marginBottom: 0,
              fontStyle: isPoem ? "italic" : "normal",
            }}>
              {post.title}
            </h1>
          </div>
        </QuiltCard>
      </div>

      <div className={`${containerClass} mx-auto px-6`}>
        <PatchStripSeparator />
      </div>

      {/* ── POST CONTENT ────────────────────────────────────── */}
      <div className={`${containerClass} mx-auto px-6`} style={{ paddingBottom: "2rem" }}>
        <article
          className={`prose-khushi ${proseClass}`}
          style={{
            marginTop: "2.5rem",
            marginLeft: centered ? "auto" : undefined,
            marginRight: centered ? "auto" : undefined,
          }}
        >
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>

        {/* End-of-post motif */}
        <EndMotif />

        {/* Back link */}
        <div style={{
          marginTop: "1rem",
          marginBottom: "2rem",
          textAlign: centered ? "center" : "left",
        }}>
          <Link href="/writing" style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#8B5E3C",
            textDecoration: "none",
            borderBottom: "1px solid #C0572D44",
            paddingBottom: "2px",
          }}>
            ← back to writing
          </Link>
        </div>
      </div>

    </div>
  );
}
