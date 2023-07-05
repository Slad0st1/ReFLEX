import React from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem/SideBarItem";
import { useSelector } from "react-redux";

export default function SideBar() {
  const cartItems = useSelector((state) => state.items.cart);
  console.log(cartItems);
  return (
    <div className={styles.wrapper}>
    <div className={styles.sideBar}>
      <h3>Cart</h3>
      {cartItems.map((item) => (
        <SideBarItem
          key={[item.id, item.type]}
          categori={item.type}
          id={item.id}
          title={item.title}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
    </div>
  );
}
