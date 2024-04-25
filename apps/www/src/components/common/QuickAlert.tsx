"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRightIcon, Cross2Icon } from "@radix-ui/react-icons";
import { sora } from "@/lib/fonts";

type QuickAlertProps = {
  heading: string;
  href: string;
  tab: "new" | "same";
};
export const QuickAlert: React.FC<QuickAlertProps> = React.memo(
  ({ heading, href, tab }) => {
    const [isDissmissed, SetIsDissmissed] = React.useState<boolean>(false);
    if (isDissmissed) return null;
    return (
      <div
        className="border-b-[0.5px] dark:border-b-[#505050] py-3 flex items-center justify-between px-2"
      >
        <span />
        <Link
          href={href}
          passHref
          prefetch={false}
          target={tab === "new" ? "_blank" : "_self"}
          rel="noreferrer"
        >
          <span
            className={`${sora.className} dark:text-[#838383] text-xs  cursor-pointer transition-all duration-200 dark:hover:text-[#cecece]`}
          >
            {heading} <ArrowRightIcon className="inline mx-2" />
          </span>
        </Link>
        <Cross2Icon
          onClick={() => {
            SetIsDissmissed(true);
          }}
          className="dark:text-[#838383] dark:hover:text-[#cecece] hover:cursor-pointer"
        />
      </div>
    );
  }
);

QuickAlert.displayName = "Common_QuickAlert";
QuickAlert.defaultProps = {
  heading: 'Also Check out "rubiks"',
  href: "https://rubiks.cloud",
  tab: "new",
};
