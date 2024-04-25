import * as React from "react";
import { bricolage, sora } from "@/lib/fonts";

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
        <h2 className={`${sora.className}`}>{SubHeading}</h2>
      </div>
    );
  }
);
Heading.displayName = "Home_Heading";

export const Hero: React.FC = React.memo(() => {
  return (
    <section className={`flex flex-col justify-center items-center my-10`}>
      <Heading
        Heading="Set Up Your Database in Seconds, and Let Us Handle the Rest"
        SubHeading="Cause your primary focus should be on building your app, not managing database!! Easy to setup, Cheap to maintain, and  Easiliy Scalable"
      />
    </section>
  );
});

Hero.displayName = "Home_Hero";
