import * as React from "react";
import { Share2Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { redditMono } from "@/lib/fonts";

type WindowProps = {
  title: string;
  children: React.ReactNode;
  isBrowser?: boolean;
  className?: HTMLElement["className"];
};
export const Window: React.FC<WindowProps> = React.memo(
  ({ title, children, className, isBrowser = false }) => {
    return (
      <div
        className={cn(
          "bg-white dark:bg-[#181818] rounded-lg shadow-md",
          className
        )}
      >
        <div className="flex justify-between items-center p-2">
          <div className="flex flex-row gap-1">
            <div className="bg-[#ff2424] w-1 h-1 md:w-2 md:h-2 rounded-full" />
            <div className="bg-[#ffcc00] w-1 h-1 md:w-2 md:h-2 rounded-full" />
            <div className="bg-[#00c853] w-1 h-1 md:w-2 md:h-2 rounded-full" />
          </div>
          <div
            className={`${isBrowser && `border-[0.05px] w-full mx-2 max-w-xs text-center rounded-md border-[#303030]`}`}
          >
            <h1 className={`${redditMono.className} text-xs text-[#5a5a5a]`}>
              {title}
            </h1>
          </div>
          {isBrowser ? (
            <Share2Icon className="w-4 h-4 text-[#5a5a5a]" />
          ) : (
            <div className="w-4 h-4" />
          )}
        </div>
        <div>{children}</div>
      </div>
    );
  }
);

Window.displayName = "Common_Window";
