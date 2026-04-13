import { getAllPosts } from "@/lib/posts";
import WritingClient from "@/components/WritingClient";

export const metadata = {
  title: "Writing — Khushi Sharma",
  description: "Poems, essays, and thoughts from an AI engineer who writes.",
};

export default function WritingPage() {
  const posts = getAllPosts();
  return <WritingClient posts={posts} />;
}
