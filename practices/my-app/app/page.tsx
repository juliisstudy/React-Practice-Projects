import Image from "next/image";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import RemoveFromList from "./components/RemoveFromList";
import Counter from "./components/Counter";
import Accordion from "./components/Accordion";
import AccordionII from "./components/AccordionII";

import CountersAndState from "./components/CountersAndState";
import CounterDestroysState from "./components/CounterDestroysState";
import CounterFancy from "./components/CounterFancy";
import PlayerCounter from "./components/PlayerCounter";
import App from "@/app/components/chat/App";
import Todo from "@/app/components/todoList/App";
import TaskApp from "@/app/components/todoReducer/TaskApp";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Gallery />
      <Form />
      <CheckList />
      <RemoveFromList />
      <Counter />
      <Accordion />
      <AccordionII />
      <CountersAndState />
      <CounterDestroysState />
      <CounterFancy />
      <PlayerCounter />
      <App />
      <Todo />
      <TaskApp />
    </main>
  );
}
