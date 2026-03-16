"use client";

import Link from "next/link";
import { RetroWindow } from "@/components/common/RetroWindow";
import { BlogPost } from "@/constants/blog";

export function BlogPostReader({ post }: { post: BlogPost }) {
  return (
    <main className="w-full px-6 py-8 flex justify-center min-h-screen animate-in fade-in duration-500">
      <div className="w-full max-w-4xl flex flex-col gap-6">
        <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-sm font-bold tracking-widest uppercase hover:underline underline-offset-4 w-fit mb-4">
          &lt; Return to Directory
        </Link>
        <RetroWindow title={`Reading: ${post.slug}.txt`} noPadding>
          <div className="border-b-2 border-border p-6 md:p-10 bg-muted/30">
            <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <span className="bg-foreground text-background px-2 py-0.5">{post.category}</span>
              <span className="text-muted-foreground">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
            <p className="font-mono text-sm uppercase text-muted-foreground opacity-70">
              AUTHOR: Chimairel
            </p>
          </div>
          <article className="p-6 md:p-10 prose prose-neutral dark:prose-invert max-w-none font-mono text-sm md:text-base leading-relaxed">
            <p className="text-lg font-bold">{post.excerpt}</p>
            <br />
            <p className="text-muted-foreground border-l-2 border-border pl-4 opacity-70">
              &gt; SYSTEM NOTE: Full transmission data is currently pending upload. End of file.
            </p>
          </article>
        </RetroWindow>
      </div>
    </main>
  );
}