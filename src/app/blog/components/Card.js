import React from "react";
import styles from "../blog.module.css";
const Card = ({ title, body, userId }) => {
  return (
    <div className={styles.card}>
      <span>{userId}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
