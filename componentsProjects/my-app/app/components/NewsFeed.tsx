"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type Article = {
  title: string;
  description: string;
};

export default function NewsFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY"
        );
        setArticles(response.data.articles);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(new Error(err.message));
        } else {
          setError(new Error("an unexpected error"));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);
  if (loading) return <p>loading</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      NewsFeed
      <ul>
        {articles.map((articles, index) => (
          <li key={index}>
            <h2>{articles.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
