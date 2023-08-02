import React, { useEffect, useState } from "react";
import styles from "./CartBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { openOrHideCart } from "../../../store/Cart/CartSlice";

export default function CartBtn() {
  const dispatch = useDispatch();
  const showSidebar = () => {
    dispatch(openOrHideCart())
  };

  return (
    <div onClick={showSidebar} className={styles.cart}>
      <img src="/cart.svg" />
    </div>
  );
}
