"use client";

import * as React from "react";
import { toast } from "sonner";
import { redditMono } from "@/lib/fonts";
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { copyToClipboard } from "@/lib/utils";

export const Create: React.FC = React.memo(() => {
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const onClick = React.useCallback(() => {
    setIsCopied(true);
    copyToClipboard("vesper create mysql");
    toast.success("Copied to clipboard", {
      dismissible: true,
    });
  }, []);
  return (
    <div className={`${redditMono.className} dark:text-[#cecece]`}>
      <span>~ npx vesper create mysql</span>
      {isCopied ? (
        <CheckIcon className="inline mx-2" onClick={onClick} />
      ) : (
        <ClipboardIcon className="inline mx-2" onClick={onClick} />
      )}
    </div>
  );
});

Create.displayName = "Home_Create";
