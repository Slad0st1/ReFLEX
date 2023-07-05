import React, { useEffect, useState } from "react";
import styles from "./CardUpper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addActiveItem } from "../../../../../store/Items/ItemsSlice";
import AddToCart from "../../../../../UI/BUTTONS/AddToCart";
import Sizes from "./Sizes/Sizes";
import Gallery from "./Gallery/Gallery";

export default function CardUpper() {
  const [gallery, setGallery] = useState([]);
  const [sizes, setSizes] = useState([]);
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const path = location.pathname.replace(/\//gi, "").replace(/[0-9]/gi, "");
  const item = useSelector((state) => state.items.activeItem);
  const tshirts = useSelector((state) => state.items.tshirts);
  const shoes = useSelector((state) => state.items.shoes);
  const pants = useSelector((state) => state.items.pants);

  useEffect(() => {
    if (path === "shoes") {
      dispatch(addActiveItem(shoes[params.id - 1]));
    } else if (path === "tshirts") {
      dispatch(addActiveItem(tshirts[params.id - 1]));
    } else if (path === "pants") {
      dispatch(addActiveItem(pants[params.id - 1]));
    }
    setGallery(item.gallery);
    setSizes(item.sizes);
  });

  return (
    <div className={styles.upper}>
      <div className={styles.images}>
        <div className={styles.bigImg}>
          <img src={item.img} alt="Img" />
        </div>
        <Gallery gallery={gallery} />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.price}>{item.price}$</div>
        <div className={styles.color}>Color : <span>{item.color}</span></div>
        <Sizes sizes={sizes} />
        <div className={styles.descr}>{item.descr}</div>
        <div className={styles.buttons}>
          <AddToCart item={item}>Add to cart</AddToCart>
        </div>
      </div>
    </div>
  );
}
