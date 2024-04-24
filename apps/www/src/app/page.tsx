import { bricolage, sora } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="h-screen">
      <section className={`flex flex-col h-screen justify-center items-center`}>
        <h1 className={`text-7xl ${bricolage.className}`}>Database</h1>
        <h2 className={`text-sm ${sora.className}`}>
          coming soon
        </h2>
      </section>
      <footer
        className={`fixed bottom-0 text-xs text-white p-2 ${sora.className} w-full`}
      >
        <p className="text-center">
          Brought to you by <a href="https://jabed.dev">jabed</a> 🚀
        </p>
      </footer>
    </main>
  );
}
