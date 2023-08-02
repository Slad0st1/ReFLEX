import React, { useState } from "react";
import styles from "./Cart.module.css";
import SideBar from "./SideBar/SideBar";
export default function Cart() {
  return (
    <div className={styles.wrapper}>
      <SideBar/> 
    </div>
  );
}
