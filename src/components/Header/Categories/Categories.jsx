import React, { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../store/Items/ItemsSlice";
import CloseBtn from "../../../UI/BUTTONS/CloseBtn";
export default function Categories() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const categories = useSelector((state) => state.items.categories);
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.replace(/\//gi, "").replace(/[0-9]/gi, "");
  const [category, setCategory] = useState(path);
  const [openMenu, setOpenMenu] = useState(false);

  const changeCategory = (category) => {
    setCategory(category);
  };

  const detectSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  useEffect(() => {
    dispatch(getItems(category));
  }, [category]);

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowWidth]);

  return (
    <div className={styles.categories}>
      {windowWidth <= 420 ? (
        <div onClick={toggleMenu} className={styles.burgerBtn}>
          <img src="/menu.png" />
        </div>
      ) : (
        false
      )}
      <nav>
        <ul
          className={
            openMenu
              ? `${styles.navBar} ${styles.active}`
              : `${styles.navBar} ${styles.active}  ${styles.hidden}`
          }
        >
          <div onClick={toggleMenu}>
            <img src="/w-close.svg" />
          </div>
          {categories.map((item) => (
            <li
              key={item.path}
              onClick={() => changeCategory(item.path)}
              className={styles.linkWrapper}
            >
              <NavLink
                onClick={toggleMenu}
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
