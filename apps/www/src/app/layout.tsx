import { Header } from "@/components";
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
      <body className="max-w-7xl mx-auto p-2">
        <CommonProvider>
          <Header />
          {children}
        </CommonProvider>
      </body>
    </html>
  );
}
