import React from "react";

type User = {
  avatar_url: string;
  followers: string;
  following: string;
  public_repos: string;
  url: string;
  name: string;
  login: string;
  created_at: string;
};
export default function User({ user }: { user: User }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    created_at,
  } = user;
  const createedDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="user" />
        <p>
          User join on{" "}
          {`${createedDate.getDate()} ${createedDate.toLocaleDateString(
            "en-us"
          )}`}
        </p>
      </div>
      <div></div>
    </div>
  );
}
