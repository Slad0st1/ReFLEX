import React from "react";
import styles from './Logo.module.css'
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <NavLink
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ""}`
        }
        to="/"
      >
        Re<span className={styles.logoUpperCase}>FLEX</span>
      </NavLink>
    </div>
  );
}
