import * as React from "react";
import { QuickAlert, Header , Footer} from "@/components";

export default function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const quickAlertEnabled = false;
  return (
    <>
      {!!quickAlertEnabled && (
        <QuickAlert
          heading='Check out "rubiks"'
          href="https://rubiks.cloud"
          tab="new"
        />
      )}
      <Header />
      <main className="max-w-7xl mx-auto min-h-screen">{children}</main>
      <Footer />
    </>
  );
}