"use client";
import { useState, useEffect } from "react";
import User from "./user";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("juli");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  function handleSubmit() {
    fetchGithubUserData();
  }
  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
    console.log(data);
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  if (loading) {
    return <h1>loading data</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="search for username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
