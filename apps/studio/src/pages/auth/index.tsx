import * as React from "react";
import { Register } from "./register";
import { useNewQuery } from "@/store/slices/general";
import { Login } from "./login";
import { Icons } from "@/components/ui/icons";

export const Auth: React.FC = () => {
  const { data, isFetching, isLoading } = useNewQuery();
  const loading = isFetching || isLoading;
  return (
    <>
      <div className="container relative hidden min-h-screen h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-2xl font-semibold  select-none animate-shine bg-[linear-gradient(110deg,#939393,45%,#fff,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text">
            vesper
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <Icons.spinner className="w-6 h-6 animate-spin" />
          </div>
        ) : data?.body.isNewInstall ? (
          <Register />
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};
