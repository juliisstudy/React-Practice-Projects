import { useRef } from "react";
export default function ScrollToSection() {
  const ref = useRef();
  const data = [
    {
      label: "First card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "second card",
      style: {
        width: "100%",
        height: "600px",
        background: "black",
      },
    },
    {
      label: "third card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "fourth card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <button onClick={handleScrollToSection}>click to scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 3 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
