import React from "react";
import styles from "./CardExtend.module.css";
import CardUpper from "./CartdUpper/CardUpper";
import CardBottom from "./CardBottom/CardBottom";

export default function CardExtend() {

  return (
    <div className={styles.cardExtend}>
      <CardUpper />
      <CardBottom />
    </div>
  );
}
