import React from "react";
import styles from "./Gallery.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addActiveImg } from "../../../../../../store/Items/ItemsSlice";
export default function Gallery({ gallery }) {
  const item = useSelector((state) => state.items.activeItem);
  const dispatch = useDispatch()
  
  return (
    <div className={styles.gallery}>
      {gallery.map((item, index) => (
        <img key={index} src={item.link} />
      ))}
    </div>
  );
}
