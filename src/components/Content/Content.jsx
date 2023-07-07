import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
import Card from "./Card/Card";
import {  useSelector } from "react-redux";

export default function Content({path}) {
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);
  const [items, setItems] = useState([]);
  const tshirts = useSelector((state) => state.items.tshirts);
  const shoes = useSelector((state) => state.items.shoes);
  const pants = useSelector((state) => state.items.pants);
  const jakets = useSelector((state) => state.items.jakets);

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
        case "jakets":
          setItems(jakets);
          break;
    }
  });
    
  return (
    <div className={styles.content}>
      {items
        .filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(item => (
          <Card
            key={item.id}
            categori={item.type}
            item={item}
            id={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
            gallery ={item.gallery}
            sizes ={item.sizes}
          />
        ))}
    </div>
  );
}
