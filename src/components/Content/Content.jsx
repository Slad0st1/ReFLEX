import React, { useEffect, useState } from "react";
import styles from "./Content.module.css";
import Card from "./Card/Card";
import { useSelector } from "react-redux";
import NoItems from '../../UI/NOITEMS/NoItems'

export default function Content({ path }) {
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);
  const allItems = useSelector((state) => state.items);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      allItems[path].filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())))},[path , searchQuery]);

  return (
    <div className={styles.content}>
      {items.length ?  items.map((item) => (
          <Card
            key={item.id}
            categori={item.type}
            item={item}
            id={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
            gallery={item.gallery}
            sizes={item.sizes}
          />
        )) : <NoItems/>}
    </div>
  );
}
