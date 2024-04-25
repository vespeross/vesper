import { sora } from "@/lib/fonts";
import Link from "next/link";
import * as React from "react";

type Entry = {
  title: string;
  href: string;
};

const entries: Entry[] = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const Header: React.FC = React.memo(() => {
  return (
    <header className="my-5">
      <Link href={"/"} className={`${sora.className} select-none`}>
        vesper
      </Link>
      <nav className="flex justify-end">
        {entries.map((entry) => (
          <Link key={entry.title} href={entry.href} className="mx-2">
            {entry.title}
          </Link>
        ))}
      </nav>
    </header>
  );
});

Header.displayName = "Common_Header";
