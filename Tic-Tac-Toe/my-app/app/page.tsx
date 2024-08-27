import Game from "@/app/components/Game";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800 text-slate-300">
      <Game />
    </main>
  );
}
