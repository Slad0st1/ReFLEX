import React from "react";
import styles from './CardExtend.module.css'
import CardUpper from "./CartdUpper/CardUpper";
import CardBottom from "./CardBottom/CardBottom";

export default function CardExtend({path}) {

  return (
    <div className={styles.cardExtend}>
    <CardUpper path={path}/>
    <CardBottom path={path}/>
    </div>
  );
}
