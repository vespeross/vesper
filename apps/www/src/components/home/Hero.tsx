import * as React from "react";
import { bricolage, sora } from "@/lib/fonts";
import { Create } from "./Create";
import { Window } from "../common";
import Image from "next/image";

type HeadingProps = {
  Heading: string;
  SubHeading: string;
};
const Heading: React.FC<HeadingProps> = React.memo(
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

export const Hero: React.FC = React.memo(() => {
  return (
    <section className={`my-10 w-full flex flex-col`}>
      <div className="border-x-[0.05px] mx-4 h-10 border-[#272727]" />
      <div className="w-full flex flex-row mx-auto">
        <div className="border-y-[0.05px] border-[#272727] p-2" />
        <div className="border-[0.05px] w-full border-[#272727] p-2 py-20">
          <Heading
            Heading="Set Up Your Database in Seconds, Let Us Handle the Rest"
            SubHeading="Cause your primary focus should be on building your app, not managing database!! Easy to setup, Cheap to maintain, and  Easiliy Scalable."
          />
        </div>
        <div className="border-y-[0.05px] border-[#272727] p-2" />
      </div>
      <div className="border-x-[0.05px] mx-4 h-10 border-[#272727]" />
      <div className="w-full flex flex-row mx-auto">
        <div className="border-y-[0.05px] border-[#272727] p-2" />
        <div className="border-[0.05px] w-full border-[#272727] p-2">
          <Window title="app.vesper.rest" isBrowser className="m-2">
            <Image src="/dashboard.png" alt="hero" width={1600} height={1600} />
          </Window>
        </div>
        <div className="border-y-[0.05px] border-[#272727] p-2" />
      </div>
      <div className="border-x-[0.05px] mx-4 h-10 border-[#272727]" />
    </section>
  );
});

Hero.displayName = "Home_Hero";
