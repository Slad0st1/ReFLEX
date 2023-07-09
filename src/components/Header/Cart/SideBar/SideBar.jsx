import React from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem/SideBarItem";
import { useSelector } from "react-redux";
import CloseBtn from "../../../../UI/BUTTONS/CloseBtn";
import NoItems from "../../../../UI/NOITEMS/NoItems";

export default function SideBar({showSidebar}) {
  const cartItems = useSelector((state) => state.items.cart);
  return (
    <div className={styles.wrapper}>
    <div className={styles.sideBar}>
    <div className={styles.sideBarHeader}>
    <h3>Cart</h3>
    <CloseBtn onClick={showSidebar}/>
    </div>
    <div className={styles.sideBarContent}>
    {cartItems.length ? cartItems.map((item) => (
        <SideBarItem
          key={[item.id, item.type]}
          target={item}
          id={item.id}
          categori={item.type}
        />
      )) : <NoItems/>}
    </div>
    </div>
    </div>
  );
}
