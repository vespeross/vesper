import * as React from "react";
import { bricolage, sora } from "@/lib/fonts";
import { Create } from "./Create";
import { Window } from "../common";

type HeadingProps = {
  Heading: string;
  SubHeading: string;
};
const Heading: React.FC<HeadingProps> = React.memo(
  ({ Heading, SubHeading }) => {
    return (
      <div>
        <h1 className={`text-6xl my-2 font-bold ${bricolage.className}`}>
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
    <section
      className={`flex flex-col max-w-4xl justify-center items-center my-10`}
    >
      <Heading
        Heading="Set Up Your Database in Seconds, and Let Us Handle the Rest"
        SubHeading="Cause your primary focus should be on building your app, not managing database!! Easy to setup, Cheap to maintain, and  Easiliy Scalable"
      />
      <div className="flex flex-row justify-center items-center space-x-5]"></div>
      <Window title="vesper" className="mr-auto my-10">
        <Create />
      </Window>
    </section>
  );
});

Hero.displayName = "Home_Hero";
