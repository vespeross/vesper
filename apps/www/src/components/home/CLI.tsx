import * as React from "react";
import { redditMono, sora } from "@/lib/fonts";
import { Window } from "../common";

export const CLI: React.FC = React.memo(() => {
  return (
    <div className="flex md:flex-row flex-col justify-center my-10">
      <div className="flex flex-col items-center justify-center mx-auto">
        <h2
          className={`${sora.className} lg:text-3xl md:text-2xl text-xl font-bold`}
        >
          Command Line Interface
        </h2>
        <h3
          className={`${sora.className} text-xs max-w-xs text-center text-[#6d6d6d]`}
        >
          we have got you covered with our CLI tool to quickly create, manage
          and deploy your databases
        </h3>
      </div>
      <div className="flex flex-row gap-10 mx-auto my-10 md:w-1/2 w-full">
        <Window title="vesper-cli" className="h-96 w-full">
          <p
            className={`${redditMono.className} p-2 text-xs text-[#9c9c9c] flex-wrap flex flex-col gap-2`}
          >
            <span>~ curl -fsSL https://vesper.rest/install.sh | sh</span>
            <span>~ vesper create mysql mydb</span>
            <span className="text-4xl ml-2">
              vesper
            </span>
            <span className="ml-2">
              db created successfully
            </span>
            <span className="ml-2 text-wrap">
              connection string: mysql://user:aubird@sjhsj.vesper.rest:3306/mydb
            </span>
            <span>
              ~ |
            </span>
          </p>
        </Window>
      </div>
    </div>
  );
});

CLI.displayName = "Home_CLI";
