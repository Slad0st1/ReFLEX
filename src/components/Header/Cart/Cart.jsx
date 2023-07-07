import React, { useState } from "react";
import styles from "./Cart.module.css";
import SideBar from "./SideBar/SideBar";
export default function Cart() {
  const [isHidden , setIsHidden] = useState(true)
  const showSidebar = () =>{
    setIsHidden(!isHidden)
  }
  return (
    <div className={styles.wrapper}>
      <div onClick={showSidebar} className={styles.cart}>
        <img src="/cart.svg" />
      </div>
      {isHidden ? '' : <SideBar showSidebar={showSidebar}/>}
    </div>
  );
}
