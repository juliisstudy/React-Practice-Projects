import Game from "@/app/components/Game";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800 text-slate-300">
      <Game />
    </main>
  );
}
