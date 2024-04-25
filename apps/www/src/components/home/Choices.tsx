import * as React from "react";
import { sora } from "@/lib/fonts";
import Image from "next/image";

export const Choices: React.FC = React.memo(() => {
  return (
    <div className="flex flex-col justify-center my-10">
      <div className="flex flex-col items-center">
        <h2
          className={`${sora.className} lg:text-3xl text-center md:text-2xl text-xl font-bold`}
        >
          Chose from your favourite engine
        </h2>
        <h3 className={`${sora.className} md:text-lg text-center text-sm text-[#6d6d6d]`}>
          we have a wide range of engines to choose from, be is relational or NoSQL
        </h3>
      </div>
      <div className="flex flex-row gap-10 mx-auto my-10">
        <Image src="/svgs/postgresql.png" width={500} height={500} className="h-10 w-10 md:h-24 md:w-24 select-none"  alt="postgresql"/>
        <Image src="/svgs/mysql.png" width={500} height={500} className="h-10 w-10 md:h-24 md:w-24 select-none"  alt="mysql"/>
        <Image src="/svgs/mongodb.png" width={500} height={500} className="h-10 w-10 md:h-24 md:w-24 select-none"  alt="mongodb"/>
        <Image src="/svgs/cassendra.png" width={500} height={500} className="h-10 w-10 md:h-24 md:w-24 select-none"  alt="cassendra"/>
      </div>
    </div>
  );
});

Choices.displayName = "Home_Choices";
