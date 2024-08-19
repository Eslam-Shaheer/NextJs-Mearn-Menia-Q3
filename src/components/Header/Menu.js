"use client";

import React from "react";
import { menuItems } from "./menuItem";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";

const Menu = () => {
  const path = usePathname();

  return (
    <section className={styles.nav}>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={path == item.href ? styles.active : ""}
        >
          {item.label}
        </Link>
      ))}
    </section>
  );
};

export default Menu;
