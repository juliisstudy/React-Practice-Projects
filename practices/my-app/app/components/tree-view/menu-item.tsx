import React, { useState } from "react";
import MenuList from "./menu-list";
export default function MenuItem({ item }: any) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggleChildren(getCurrentLabel: any) {
    setDisplayCurrentChildren((prevState) => ({
      ...prevState,
      //   [getCurrentLabel]: !prevState[getCurrentLabel],
    }));
  }

  return (
    <div className="tree-view-container">
      <p>{item.label}</p>
      {item && item.children && item.children.length ? (
        <span onClick={() => handleToggleChildren(item.children)}>+</span>
      ) : null}
      {item && item.children && item.children.length > 0 ? (
        <MenuItem item={item.children} />
      ) : null}
    </div>
  );
}
