import React from "react";
import Card from "./components/Card";
import styles from "./blog.module.css";
import clientPromise from "@/lib/mongodb";

const Blog = async () => {
  // const client = await clientPromise;
  // const db = client.db();
  // const news = await db.collection("news").find({}).toArray();

  const newsJson = await fetch("http://localhost:3000/api/posts");
  const news = await newsJson.json();

  return (
    <div className={styles.container}>
      {news.slice(0, 2).map((item) => (
        <Card
          key={item.id}
          title={item.title}
          image={item.image}
          publishedAt={item.publishedAt}
          content={item.content}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Blog;
