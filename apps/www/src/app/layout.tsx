import "@/styles/globals.css";
export { metadata } from "@/config";
import { CommonProvider } from "@/providers";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0c0c0c]">
        <CommonProvider>
          {children}
          <Toaster />
        </CommonProvider>
      </body>
    </html>
  );
}
