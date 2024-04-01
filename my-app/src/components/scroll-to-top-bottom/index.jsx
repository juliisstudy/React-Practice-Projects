import useFetch from "../use-fetch";
import { useRef } from "react";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  function handleScrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const bottomRef = useRef(null);

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>Error occured</h1>;
  }
  if (pending) {
    return <h1>loading !please wait</h1>;
  }

  return (
    <div>
      <h1>scroll to top and bottom</h1>
      <button onClick={handleScrollToBottom}> scroll to bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <div ref={bottomRef}></div>
      <h1>scroll to bottom</h1>
    </div>
  );
}
