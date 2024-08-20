"use client";

import React from "react";
import { menuItems } from "./menuItem";
import { usePathname } from "next/navigation";
import styles from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Menu = () => {
  const path = usePathname();
  const router = useRouter();
  const handleRouting = (e) => {
    router.push(e.target.value);
  };
  const login = () => {
    //api logic
    router.push("/account");
  };
  return (
    <section className={styles.nav}>
      {/* <select onChange={handleRouting}>
        {menuItems.map((item) => (
          <option value={item.href}>{item.label}</option>
        ))}
      </select> */}

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
