import { bricolage } from "@/lib/fonts";
import { getMdxContent, postMetaData } from "@/lib/mdx";
import { notFound } from "next/navigation";
import * as React from "react";
import moment from "moment";
import { Content } from "@/components/blog";
import Image from "next/image";

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
      <h1 className={`${bricolage.className} text-4xl`}>{frontmatter.title}</h1>
      <p>
        {frontmatter.authorName}{" "}
        <Image
          src={frontmatter.authorAvatarUrl}
          width={24}
          height={24}
          alt={frontmatter.authorName}
        />
      </p>
      <p className="text-xs text-[#cecece] my-4">
        {moment(frontmatter.date).format("MMMM D, YYYY")} (
        {moment(frontmatter.date).fromNow()})
      </p>
      <Content content={content} />
    </main>
  );
}
