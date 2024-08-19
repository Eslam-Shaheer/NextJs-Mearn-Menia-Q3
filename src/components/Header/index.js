import React from "react";
import styles from "./header.module.css";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1>MEARN Menia</h1>

      <Menu />

      {/* <Link href="/" className={path == "/" ? styles.active : ""}>
          Home
        </Link>
        <Link href="/blog" className={path == "/blog" ? styles.active : ""}>
          Blog
        </Link>
        <Link
          href="/contact"
          className={path == "/contact" ? styles.active : ""}
        >
          Contact
        </Link>
        <Link href="/about" className={path == "/about" ? styles.active : ""}>
          About
        </Link>
        <Link
          href="/dashboard"
          className={path == "/dashboard" ? styles.active : ""}
        >
          Dashboard
        </Link>
        <Link href="/login" className={path == "/login" ? styles.active : ""}>
          Login
        </Link> */}
    </header>
  );
};

export default Header;
