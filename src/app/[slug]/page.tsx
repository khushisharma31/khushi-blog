import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import FabricBackground from "@/components/FabricBackground";
import PatchStripSeparator from "@/components/PatchStripSeparator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

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

  return (
    <div style={{ minHeight: "100vh", color: "#2C1A0E" }}>
      <FabricBackground />

      {/* ── POST HEADER ─────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6" style={{ paddingTop: "3.5rem", paddingBottom: "2rem" }}>

        {/* Type badge + date */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {post.type && (
            <span style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8B3A1F",
              background: "#F0E0C8",
              padding: "0.35em 1em",
              borderRadius: "2px",
              border: "1px solid #C0572D33",
            }}>
              {post.type}
            </span>
          )}
          <span style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "0.7rem",
            color: "#A8886E",
            letterSpacing: "0.04em",
          }}>
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: "var(--font-lora), Georgia, serif",
          fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "#2C1A0E",
          marginBottom: 0,
        }}>
          {post.title}
        </h1>

      </div>

      <div className="max-w-3xl mx-auto px-6">
        <PatchStripSeparator />
      </div>

      {/* ── POST CONTENT ────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6" style={{ paddingBottom: "6rem" }}>
        <article className="prose-khushi" style={{ marginTop: "2.5rem", marginBottom: "4rem" }}>
          <MDXRemote source={post.content} />
        </article>

        <PatchStripSeparator />

        {/* Back link */}
        <div style={{ marginTop: "2.5rem" }}>
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
