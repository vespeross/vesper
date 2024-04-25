import * as React from "react";
import { cn } from "@/lib/utils";
import { redditMono } from "@/lib/fonts";

type WindowProps = {
  title: string;
  children: React.ReactNode;
  className?: HTMLElement["className"];
};
export const Window: React.FC<WindowProps> = React.memo(
  ({ title, children, className }) => {
    return (
      <div
        className={cn("bg-white dark:bg-[#181818] rounded-lg shadow-md", className)}
      >
        <div className="flex justify-between items-center p-2">
          <div className="flex flex-row gap-1">
            <div className="bg-[#ff2424] w-2 h-2 rounded-full" />
            <div className="bg-[#ffcc00] w-2 h-2 rounded-full" />
            <div className="bg-[#00c853] w-2 h-2 rounded-full" />
          </div>
          <h1 className={`${redditMono.className} text-xs text-[#5a5a5a]`}>
            {title}
          </h1>
          <div className="w-6"/>
        </div>
        <div className="p-4">{children}</div>
      </div>
    );
  }
);

Window.displayName = "Common_Window";
