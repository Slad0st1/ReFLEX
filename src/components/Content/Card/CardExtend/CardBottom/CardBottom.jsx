import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../Card";
import { useSelector } from "react-redux";
export default function CardBottom() {
  const location = useLocation();
  const path = location.pathname.replace(/\//gi, "").replace(/[0-9]/gi, "");
  console.log(path);
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
    <div>
      {items.map( item => (
        <Card
            key={item.id}
            categori={path}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
          />
      ))}
    </div>
  );
}
