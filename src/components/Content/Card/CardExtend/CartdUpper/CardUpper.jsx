import React, { useEffect, useState } from "react";
import styles from "./CardUpper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addActiveItem } from "../../../../../store/Items/ItemsSlice";
import AddToCart from "../../../../../UI/BUTTONS/AddToCart";
import Sizes from "./Sizes/Sizes";
import Gallery from "./Gallery/Gallery";

export default function CardUpper() {
  const item = useSelector((state) => state.items.activeItem);

  return (
    <div className={styles.upper}>
      <div className={styles.images}>
        <div className={styles.bigImg}>
          <img src={item.img} alt="Img" />
        </div>
        <Gallery gallery={item.gallery} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.price}>{item.price}$</div>
        <div className={styles.color}>Color : <span>{item.color}</span></div>
        <Sizes sizes={item.sizes} />
        <div className={styles.descr}>{item.descr}</div>
        <div className={styles.buttons}>
          <AddToCart item={item}>Add to cart</AddToCart>
        </div>
      </div>
    </div>
  );
}
