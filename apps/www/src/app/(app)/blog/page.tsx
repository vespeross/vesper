import * as React from "react";
import type { Metadata } from "next";
import { List } from "@/components/blog";

export const metadata: Metadata = {
  title: "blog",
  description:
    "Learn about vesper and how it can help you save time with your database setup by reading our blog posts.",
};

export default function Page(): React.JSX.Element {
  return (
    <>
      <List />
    </>
  );
}
