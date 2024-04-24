import { CommonProvider } from "@/providers";
import "@/styles/globals.css";
export { metadata } from "@/config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CommonProvider>{children}</CommonProvider>
      </body>
    </html>
  );
}
