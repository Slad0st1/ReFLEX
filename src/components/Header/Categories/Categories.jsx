import React, { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../store/Items/ItemsSlice";
export default function Categories() {
  const categories = useSelector((state) => state.items.categories);
  const dispatch = useDispatch()
  const [category  , setCategory] = useState('tshirts')
  const location = useLocation()
  const path = location.pathname.replace(/\//gi,'').replace(/[0-9]/gi,'')

  useEffect(() =>{
    dispatch(getItems(`/${path}`))
},[])

useEffect(() =>{
  dispatch(getItems(`/${category}`))
},[category])

  return (
    <div className={styles.categories}>
      <nav>
        <ul>
          {categories.map((item) => (
            <li key={item.path} onClick={() => setCategory(item.path)}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`${item.path}`}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
