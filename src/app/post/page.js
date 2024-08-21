import clientPromise from "@/lib/mongodb";
import React from "react";
import Card from "../blog/components/Card";
import styles from "../blog/blog.module.css";

const Post = async () => {
  const client = await clientPromise;
  const db = client.db();
  const posts = await db.collection("posts").find({}).toArray();

  return (
    <div className={styles.container}>
      {posts.reverse().map((item) => (
        <Card
          image={item.imageSrc}
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Post;
