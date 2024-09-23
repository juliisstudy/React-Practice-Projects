import React, { useState } from "react";

type Tab = {
  label: string;
  content: string;
};
export default function Tab({
  tabsContent,
  onChange,
}: {
  tabsContent: Tab[];
  onChange: Function;
}) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="wrapper">
      <div>
        {tabsContent.map((tabItem: Tab) => (
          <div key={tabItem.label}>
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
