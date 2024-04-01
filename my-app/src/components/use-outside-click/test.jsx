import { useState, useRef } from "react";
import useOutsideClick from ".";
export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);

  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>content</h1>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>show content</button>
      )}
    </div>
  );
}
