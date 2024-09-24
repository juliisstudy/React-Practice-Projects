import React from "react";
type User = {
  firstName: string;
};
export default function Suggestion({
  data,
  handleClick,
}: {
  data: User[] | any;
  handleClick: React.MouseEventHandler<HTMLLIElement>;
}) {
  return (
    <div>
      {data && data.length
        ? data.map((item: User, index: number) => (
            <li key={index} onClick={handleClick}>
              {item.firstName}
            </li>
          ))
        : null}
    </div>
  );
}
