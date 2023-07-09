import React from "react";
import styles from "./Gallery.module.css";
export default function Gallery({ gallery }) {

  
  return (
    <div className={styles.gallery}>
      {gallery.map((item, index) => (
        <img key={index} src={item.link} />
      ))}
    </div>
  );
}
