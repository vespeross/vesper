import { sora } from "@/lib/fonts";
import Link from "next/link";
import * as React from "react";

type Entry = {
  title: string;
  href: string;
};

const entries: Entry[] = [
  { title: "Blogs", href: "/blogs" },
  { title: "Documentation", href: "/docs" },
  { title: "CLI", href: "/cli" },
  { title: "Benchmarks", href: "/benchmarks" },
];

export const Header: React.FC = React.memo(() => {
  return (
    <header className="my-2 max-w-7xl mx-auto px-2 items-baseline flex flex-row">
      <div>
        <Link href={"/"} className={`${sora.className} text-2xl select-none`}>
          vesper
        </Link>
      </div>
      <nav className="mx-10 flex flex-row gap-5">
        {entries.map((entry, key) => (
          <Link key={key} href={entry.href} className={`${sora.className} text-[#a8a8a8] text-sm`}>
            {entry.title}
          </Link>
        ))}
      </nav>
    </header>
  );
});

Header.displayName = "Common_Header";
