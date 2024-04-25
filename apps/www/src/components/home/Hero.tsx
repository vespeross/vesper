import * as React from "react";
import { bricolage, sora } from "@/lib/fonts";
import { Window } from "../common";
import Image from "next/image";

export const Hero: React.FC = React.memo(() => {
  return (
    <Window title="app.vesper.rest" isBrowser className="m-2 select-none">
      {/* <Image src="/dashboard.png" alt="dashboard" className="select-none" width={1600} height={1600} /> */}
      <div className="h-[60vh] bg-black flex justify-center items-center">
        <p>
          Add Screenshot here
        </p>
      </div>
    </Window>
  );
});

Hero.displayName = "Home_Hero";
