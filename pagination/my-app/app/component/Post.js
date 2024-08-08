import React from "react";

export default function Posts({ posts, loading }) {
  if (loading) {
    return <h2>loading</h2>;
  }
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
