import React, { useEffect } from "react";
import styles from "./SideBar.module.css";
import SideBarItem from "./SideBarItem/SideBarItem";
import { useDispatch, useSelector } from "react-redux";
import CloseBtn from "../../../../UI/BUTTONS/CloseBtn";
import NoItems from "../../../../UI/NOITEMS/NoItems";
import { openOrHideCart } from "../../../../store/Cart/CartSlice";
export default function SideBar() {
  const cartItems = useSelector((state) => state.cart.cart);
  const isOpen = useSelector((state) => state.cart.isOpen)
  const dispatch = useDispatch();
  const showSidebar = () => {
    dispatch(openOrHideCart())
  };

  return (
    <div className={isOpen ?  styles.wrapper : undefined }>
    <div className={isOpen ? `${styles.sideBar} ${ styles.active }` : styles.sideBar}>
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
          sold = {item.sold}
        />
      )) : <NoItems/>}
    </div>
    </div>
    </div>
  );
}
