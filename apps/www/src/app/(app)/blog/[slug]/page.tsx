import * as React from "react";
import { notFound } from "next/navigation";
import { getMdxContent, postMetaData } from "@/lib/mdx";
import { Content } from "@/components/blog";
import { Meta } from "@/components/blog/Meta";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = postMetaData.find((post) => post.slug === params.slug);
  return {
    title: post?.title,
    description: post?.excerpt,
    keywords: post?.tags,
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      type: "article",
      url: `https://vesper.rubiks.cloud/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.excerpt,
    },
  };
};

export default async function Page({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<React.JSX.Element> {
  const post = postMetaData.find((post) => post.slug === params.slug);
  if (!post) {
    return notFound();
  }
  const { content, frontmatter } = await getMdxContent(params.slug);
  return (
    <main className="my-10">
      <Meta
        article={{
          author: {
            avatar: frontmatter.authorAvatarUrl,
            name: frontmatter.authorName,
            url: frontmatter.authorUrl,
          },
          date: frontmatter.date,
          excerpt: frontmatter.excerpt,
          image: frontmatter.image,
          tags: frontmatter.tags.split(","),
          slug: params.slug,
          title: frontmatter.title,
        }}
      />
      <Content content={content} />
    </main>
  );
}
