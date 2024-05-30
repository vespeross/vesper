import { sora } from "@/lib/fonts";
import * as React from "react";

type Props = {
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
export const Content: React.FC<Props> = React.memo(({ content }) => {
  return (
    <div
      className={`${sora.className} px-4 my-10 prose-img:w-full prose-img:rounded-lg prose-lg`}
    >
      {content}
    </div>
  );
});

Content.displayName = "Content";
