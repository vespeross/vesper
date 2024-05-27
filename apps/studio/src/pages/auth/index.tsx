import * as React from "react";
import { Register } from "./register";
import { useNewQuery } from "@/store/slices/general";
import { Login } from "./login";
import { Icons } from "@/components/ui/icons";
import { useUser } from "@/hooks";
import { useNavigate } from "react-router-dom";

export const Auth: React.FC = () => {
  const { data, isFetching, isLoading } = useNewQuery();
  const { isAuthenticated } = useUser();
  const loading = isFetching || isLoading;
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-2xl font-semibold  select-none animate-shine bg-[linear-gradient(110deg,#939393,45%,#fff,55%,#939393)] bg-[length:200%_100%] text-transparent bg-clip-text">
            vesper
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo; Set Up Your Database in Seconds, Let Us Handle the Rest
                --{" "}
                <span className="font-thin">
                  Cause your primary focus should be on building your app, not
                  managing database!! Easy to setup, Cheap to maintain, and
                  Easiliy Scalable
                </span>
                &rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen">
          {loading ? (
            <Icons.spinner className="w-6 h-6 animate-spin" />
          ) : data?.body.isNewInstall ? (
            <Register />
          ) : (
            <Login />
          )}
        </div>
      </div>
    </>
  );
};
