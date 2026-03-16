// app/(portfolio)/blog/page.tsx

// Look here! We changed BlogList to BlogFeed to match the file we created.
import { BlogFeed } from "@/components/features/blog/BlogFeed";

export default function BlogPage() {
  return <BlogFeed />;
}