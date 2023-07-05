import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
import Card from "./Card/Card";
import {  useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Content({path}) {
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);
  const [items, setItems] = useState([]);
  const tshirts = useSelector((state) => state.items.tshirts);
  const shoes = useSelector((state) => state.items.shoes);
  const pants = useSelector((state) => state.items.pants);

  useEffect(() => {
    switch (path) {
      case "shoes":
        setItems(shoes);
        break;
      case "tshirts":
        setItems(tshirts);
        break;
      case "pants":
        setItems(pants);
        break;
    }
  });
    
  return (
    <div className={styles.content}>
      {items
        .filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((item) => (
          <Card
            key={item.id}
            categori={item.type}
            item={item}
            id={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
          />
        ))}
    </div>
  );
}
