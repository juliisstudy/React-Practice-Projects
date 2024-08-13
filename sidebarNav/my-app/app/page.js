import Image from "next/image";
import SiderBar from "@/app/component/SiderBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SiderBar />
    </main>
  );
}
