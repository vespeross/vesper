import * as React from "react";
import { Heading } from "./Heading";
import { Hero } from "./Hero";
import { Choices } from "./Choices";
import { CLI } from "./CLI";

export const Grid: React.FC = React.memo(() => {
  return (
    <section className={`my-5 w-full flex flex-col`}>
      {/* heading */}
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

      {/* hero */}
      <div className="border-x-[0.05px] mx-4 h-10 border-[#272727]" />
      <div className="w-full flex flex-row mx-auto">
        <div className="border-y-[0.05px] border-[#272727] p-2" />
        <div className="border-[0.05px] w-full border-[#272727] p-2">
          <Hero />
        </div>
        <div className="border-y-[0.05px] border-[#272727] p-2" />
      </div>

      {/* choices */}
      <div className="border-x-[0.05px] mx-4 h-10 border-[#272727]" />
      <div className="w-full flex flex-row mx-auto">
        <div className="border-y-[0.05px] border-[#272727] p-2" />
        <div className="border-[0.05px] w-full border-[#272727] p-2">
          <Choices />
        </div>
        <div className="border-y-[0.05px] border-[#272727] p-2" />
      </div>

      {/* cli */}
      <div className="border-x-[0.05px] mx-4 h-10 border-[#272727]" />
      <div className="w-full flex flex-row mx-auto">
        <div className="border-y-[0.05px] border-[#272727] p-2" />
        <div className="border-[0.05px] w-full border-[#272727] p-2">
          <CLI />
        </div>
        <div className="border-y-[0.05px] border-[#272727] p-2" />
      </div>

      {/* end */}
      <div className="border-x-[0.05px] mx-4 h-10 border-[#272727]" />
    </section>
  );
});

Grid.displayName = "Home_Grid";
