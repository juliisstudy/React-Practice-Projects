"use client";
import React, { useState, useEffect } from "react";
import Suggestion from "./suggestion";
type User = {
  firstName: string;
};
export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilterUsers] = useState([]);

  function handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData: User[] | any =
        users && users.length
          ? users.filter(
              (item: User) =>
                item &&
                typeof item.firstName === "string" &&
                item.firstName.toLowerCase().includes(query.toLowerCase())
            )
          : [];
      setFilterUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }
  async function fetchListOfUsers() {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem: User) => userItem.firstName));
        setLoading(false);
        setError(null);
        console.log(data);
      }
    } catch (err) {
      setLoading(false);
      setError(error);
    }
  }
  function handleClick(event: any) {
    console.log(event.target.innerText);
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilterUsers([]);
  }
  useEffect(() => {
    fetchListOfUsers();
  }, []);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <div>loading data</div>
      ) : (
        <input
          value={searchParam}
          name="seasrch-users"
          placeholder="Search users here"
          onChange={handleChange}
        />
      )}

      {showDropdown && (
        <Suggestion data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
}
