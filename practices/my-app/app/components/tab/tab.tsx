import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}
export default function Tab({ tabsContent }: { tabsContent: Tab[] }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnClick(getCurrentIndex: number) {
    setCurrentTabIndex(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div>
        {tabsContent.map((tabItem: Tab, index: number) => (
          <div
            key={tabItem.label}
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
