import React from "react";
import styles from "./SideBarItem.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../../../store/Items/ItemsSlice";

export default function SideBarItem(target) {
  const { id, categori, title, price, img } = target;
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <NavLink
        style={{ color: "black", textDecoration: "none" }}
        to={`/${categori}/${id}`}
      >
        <div className={styles.cardImg}>
          <img src={img} />
        </div>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
        </div>
      </NavLink>
      <div className={styles.bottom}>
        <div className={styles.price}>{price}$</div>
        <img
          onClick={() => dispatch(removeItem(target))}
          src="/close.svg"
          alt="Close"
        />
      </div>
    </div>
  );
}
