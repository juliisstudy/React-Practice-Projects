import { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData({ param }) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.open.org/data/2.5/weather?q=${param}&appid={apiKey}`
      );
      const data = await response.json();
      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchWeatherData("Beijing");
  });
  function handleSearch() {
    fetchWeatherData(search);
  }
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>loading..</div>
      ) : (
        <div className="city-name">
          <h2>
            {weatherData?.name},<span>{weatherData?.sys?.country}</span>
          </h2>
          <p>{getCurrentDate()}</p>
          <p>
            {weatherData && weatherData.Weather && weatherData.Weather[0]
              ? weatherData.Weather[0].description
              : ""}
          </p>
        </div>
      )}
    </div>
  );
}
