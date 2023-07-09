import React,  from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemInCart,
  removeItem,
} from "../../../store/Items/ItemsSlice";
import CloseBtn from "../../../UI/BUTTONS/CloseBtn";

export default function Card({ item, id, categori, title, price, img}) {
  const cartItems = useSelector((state) => state.items.cart);
  const dispatch = useDispatch();
  const addInCart = (target) => {
    if (cartItems.includes(target)) {
      dispatch(removeItem(target));
    } else {
      dispatch(addItemInCart(target));
    }
  };

  return (
    <div className={styles.card}>
      <Link
        style={{ color: "black", textDecoration: "none" }}
        to={`/${categori}/${id}`}
      >
        <div className={styles.cardImg}>
          <img src={img} />
        </div>
        <div className={styles.text}>
          <div className={styles.title}>{title}</div>
        </div>
      </Link>
      <div className={styles.bottom}>
        <div className={styles.price}>{price}$</div>
        <div className={styles.add} onClick={() => addInCart(item)}>
          {cartItems.includes(item) ? <CloseBtn /> : <div>Add to cart</div>}
        </div>
      </div>
    </div>
  );
}
