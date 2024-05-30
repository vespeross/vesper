import * as fs from "fs";
import * as path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import type { Pluggable } from "unified";

export const postsDir = path.join(process.cwd(), "../../content/posts");

export const postPaths = fs
  .readdirSync(postsDir)
  .filter((path) => /\.mdx?$/.test(path));

export type Article = {
  author: {
    url: string;
    name: string;
    avatar: string;
  };
  title: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  slug: string;
};

export const postMetaData: Article[] = postPaths.map((postPath) => {
  const source = fs.readFileSync(path.join(postsDir, postPath), "utf8");
  const { data } = matter(source);
  return {
    author: {
      url: data.authorUrl,
      name: data.authorName,
      avatar: data.authorAvatarUrl,
    },
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    image: data.image,
    tags: data.tags.split(","),
    slug: postPath.replace(/\.mdx?$/, ""),
  };
});

const prettyCodeOptions: RehypePrettyCodeOptions = {
  theme: "vitesse-dark",
};

export const getMdxContent = async (slug: string) => {
  const source = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf8");
  const mdx = await compileMDX<{
    authorName: string;
    authorUrl: string;
    authorAvatarUrl: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    tags: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, prettyCodeOptions],
          //@ts-ignore
        ] as unknown as Pluggable<any[]>[],
      },
    },
  });
  return mdx;
};
