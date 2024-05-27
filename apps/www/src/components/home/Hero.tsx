import * as React from "react";
import Image from "next/image";

export const Hero: React.FC = React.memo(() => {
  return (
    <Image
      src="/dashboard.png"
      alt="dashboard"
      className="select-none"
      width={1600}
      height={1600}
    />
  );
});

Hero.displayName = "Home_Hero";
