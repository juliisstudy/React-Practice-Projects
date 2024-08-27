import Image from "next/image";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import RemoveFromList from "./components/RemoveFromList";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Gallery />
      <Form />
      <CheckList />
      <RemoveFromList />
      <Counter />
    </main>
  );
}
