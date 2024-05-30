import * as React from "react";
import { sora } from "@/lib/fonts";
import Image from "next/image";
import { postMetaData } from "@/lib/mdx";
import Link from "next/link";
import moment from "moment";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const List: React.FC = React.memo(() => {
  return (
    <div className="flex flex-col justify-center px-4 my-10">
      <div>
        <h1 className={`${sora.className} text-4xl`}>Blog Posts</h1>
        <h2 className="text-[#979797]">
          Learn about vesper and how it can help you save time with your
          database setup by reading our blog posts.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-5">
        {postMetaData.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            className="max-w-4xl w-full rounded-xl border border-[#181818]"
            key={post.slug}
          >
            <AspectRatio
              ratio={16 / 9}
              className="relative overflow-hidden bg-cover bg-no-repeat rounded-t-xl"
            >
              <Image
                src={post.image}
                width={800}
                height={300}
                alt={`${post.slug}_image`}
                className="rounded-t-xl object-cover hover:scale-110 duration-100 ease-in-out transform transition-all"
              />
            </AspectRatio>
            <div className="px-4 py-2">
              <div className="my-4">
                <h1 className={`text-2xl ${sora.className}`}>{post.title}</h1>
                <h2 className="text-[#a8a8a8]">{post.excerpt}</h2>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src={post.author.avatar}
                  width={25}
                  height={25}
                  className="rounded-full"
                  alt={post.author.name}
                />
                <span>{post.author.name}</span>
                <span>•</span>
                <span>{moment(post.date).format("MMMM Do YYYY")}</span>
              </div>
              <div className="mt-5 gap-2 flex flex-wrap flex-row">
                {post.tags.map((tag, key) => (
                  <Badge key={key} variant="outline">{`#${tag}`}</Badge>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

List.displayName = "Blog_List";
