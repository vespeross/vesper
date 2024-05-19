"use client";

import * as React from "react";
import Link from "next/link";
import { sora } from "@/lib/fonts";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

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
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`py-4 sticky z-100 top-0 backdrop-saturate-[150%] transform transition-all duration-150 bg-[#0e0e0e88] border-b-[#272727]  border-b-[0.5px]  ${isScrolled ? `backdrop-blur-[5px]` : `backdrop-blur-[2px]`} transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-row justify-between items-center">
        <div>
          <Link href={"/"} className={`${sora.className} text-2xl font-semibold  select-none animate-shine bg-[linear-gradient(110deg,#939393,45%,#fff,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text`}>
            vesper
          </Link>
        </div>
        <nav className="mx-10 flex-row gap-5 md:inline-flex hidden ">
          {entries.map((entry, key) => (
            <Link
              key={key}
              href={entry.href}
              className={`${sora.className} text-[#a8a8a8] text-sm`}
            >
              {entry.title}
            </Link>
          ))}
        </nav>
        <GitHubLogoIcon className="w-6 h-6 text-[#a8a8a8]" />
      </div>
    </header>
  );
});

Header.displayName = "Common_Header";
