import * as React from "react";
import Image from "next/image";
import moment from "moment";
import { sora } from "@/lib/fonts";
import { Article } from "@/lib/mdx";
import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "../ui/badge";

export const Meta: React.FC<{ article: Article }> = React.memo(
  ({ article }) => {
    return (
      <div className="px-4">
        <AspectRatio ratio={16 / 4} className="max-w-7xl mx-auto w-full overflow-clip rounded-xl">
          <Image
            src={article.image}
            width={800}
            height={200}
            alt={`${article.slug}_image`}
            className="rounded-xl object-cover w-full overflow-hidden"
          />
        </AspectRatio>
        <div className="px-4 py-2 my-5">
          <h1 className={`text-2xl ${sora.className}`}>{article.title}</h1>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={article.author.avatar}
              width={25}
              height={25}
              className="rounded-full"
              alt={article.author.name}
            />
            <span>{article.author.name}</span>
            <span>•</span>
            <span>{moment(article.date).format("MMMM Do YYYY")}</span>
          </div>
          <div className="mt-5 gap-2 flex flex-wrap flex-row">
            {article.tags.map((tag, key) => (
              <Badge key={key} variant="outline">{`#${tag}`}</Badge>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

Meta.displayName = "Blog_Meta";
