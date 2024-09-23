import React from "react";
import MenuItem from "./menu-item";
export default function MenuList({ list = [] }) {
  return (
    <div>
      {list && list.length
        ? list.map((listItem) => <MenuItem menus={listItem} key={listItem} />)
        : null}
      ;
    </div>
  );
}
