import * as React from "react";
import { bricolage, sora } from "@/lib/fonts";

type HeadingProps = {
  Heading: string;
  SubHeading: string;
};

export const Heading: React.FC<HeadingProps> = React.memo(
  ({ Heading, SubHeading }) => {
    return (
      <div>
        <h1
          className={`lg:text-6xl md:text-5xl sm:text-4xl text-2xl my-2 font-bold ${bricolage.className}`}
        >
          {Heading}
        </h1>
        <h2
          className={`${sora.className} text-sm text-[#181818] dark:text-[#a3a3a3] `}
        >
          {SubHeading}
        </h2>
      </div>
    );
  }
);
Heading.displayName = "Home_Heading";
