"use client";
import React from "react";
import Tabs from "./tab";
import "./tabs.css";
interface Tab {
  label: string;
  content: React.ReactNode; // or ReactElement
}
export default function TabTest() {
  const tabs: Tab[] = [
    {
      label: "Tab1",
      content: <div>content1</div>,
    },
    {
      label: "Tab2",
      content: <div>content2</div>,
    },
    {
      label: "Tab3",
      content: <div>content3</div>,
    },
  ];
  return <Tabs tabsContent={tabs} />;
}
