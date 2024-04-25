import * as React from "react";
import Link from "next/link";
import { sora } from "@/lib/fonts";

type Entry = {
  title: string;
  href: string;
};

type Section = {
  title: string;
  entries: Entry[];
};

const legalEntries: Entry[] = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
];

const companyEntries: Entry[] = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const developerEntries: Entry[] = [
  { title: "Documentation", href: "/docs" },
  { title: "CLI", href: "/cli" },
  { title: "Benchmarks", href: "/benchmarks" },
];

const entries: Section[] = [
  { title: "Developers", entries: developerEntries },
  { title: "Legal", entries: legalEntries },
  { title: "Company", entries: companyEntries },
];

export const Footer: React.FC = React.memo(() => {
  return (
    <footer className="my-5 border-t-[0.5px] py-10 border-t-[#272727]">
      <div className="max-w-7xl mx-auto px-4 flex flex-row justify-between items-stretch">
        <div>
          <Link href={"/"} className={`${sora.className} text-2xl select-none`}>
            vesper
          </Link>
        </div>
        <nav className="flex-row md:inline-flex hidden justify-around w-full">
          {entries.map((entry, key) => (
            <div key={key} className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold text-[#b1b1b1]">
                {entry.title}
              </h2>
              {entry.entries.map((entry, key) => (
                <Link
                  key={key}
                  href={entry.href}
                  className="text-sm text-[#5e5e5e]"
                >
                  {entry.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
});

Footer.displayName = "Common_Footer";
