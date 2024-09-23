import React, { useEffect, useState } from "react";
import "./scroll.css";
export default function ScrollIndicator({ url }: { url: string }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e: any) {
      console.log(e);
      setErrorMessage(e.message);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  if (errorMessage) {
    return <div>Error {errorMessage}</div>;
  }
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <div className="top-container"></div>
      <div className="scroll-propress-tracing-container">
        <div
          className="current-progress-bar"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
