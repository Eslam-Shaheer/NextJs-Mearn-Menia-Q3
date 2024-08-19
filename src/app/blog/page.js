import React from "react";
import Card from "./components/Card";
import styles from "./blog.module.css";

const Blog = async () => {
  const postsJson = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await postsJson.json();
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <div className={styles.container}>
      {posts.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          body={item.body}
          userId={item.userId}
        />
      ))}
    </div>
  );
};

export default Blog;
