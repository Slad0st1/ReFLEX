import React from "react";
import styles from "./SideBarItem.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import CloseBtn from '../../../../../UI/BUTTONS/CloseBtn'
import { removeItem } from "../../../../../store/Cart/CartSlice";
import Soldout from "../../../../Content/Card/Soldout/Soldout";

export default function SideBarItem({target ,categori , id , sold}) {
 const {title, price, img } = target
 const dispatch = useDispatch()
  return (
    <div className={styles.card}>
       {sold ? <Soldout/> : false }
      <NavLink style={{color : 'black' , textDecoration : 'none'}} to={`/${categori}/${id}`}>
      <div className={styles.cardImg}>
        <img src={img} />
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
      </div>
      </NavLink>
      <div className={styles.bottom}>
          <div className={styles.price}>{price}$</div>
          <CloseBtn  onClick={() => dispatch(removeItem(target)) } />
        </div>
    </div>
  );
}
