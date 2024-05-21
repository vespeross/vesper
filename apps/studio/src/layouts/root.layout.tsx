import * as React from "react";

type RootLayoutProps = {
  children: React.ReactNode;
};
export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <div className="min-h-screen bg-gray-100">{children}</div>;
};
