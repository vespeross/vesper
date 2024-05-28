import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { postMetaData } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "blog",
};

export default function Page(): React.JSX.Element {
  return (
    <main className="m-10">
      <h1>
        Welcome to the blog page! This is a placeholder for the blog page.
      </h1>
      <div className="flex flex-col gap-5">
        {postMetaData.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <p className="text-blue-500 hover:underline">{post.title}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
