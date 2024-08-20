import React from "react";
import styles from "../blog.module.css";
import Image from "next/image";
const Card = ({ title, content, image, description, publishedAt }) => {
  return (
    <div className={styles.card}>
      <span>{new Date(publishedAt).toLocaleString()}</span>
      <div style={{ position: "relative", width: "100%", height: 500 }}>
        <Image quality={100} alt="Picture of the car" fill src={image} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{content}</p>
    </div>
  );
};

export default Card;
