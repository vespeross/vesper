import * as React from "react";
import { ThemeProvider } from "./theme.provider";
import { LenisProvider } from "./lenis.provider";
import { NProgressProvider } from "./nprogress.provider";

export const CommonProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NProgressProvider>
        <LenisProvider>{children}</LenisProvider>
      </NProgressProvider>
    </ThemeProvider>
  );
};
