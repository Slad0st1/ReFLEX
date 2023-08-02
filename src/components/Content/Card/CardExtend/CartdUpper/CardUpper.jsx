import React, { useEffect, useState } from "react";
import styles from "./CardUpper.module.css";
import { useSelector } from "react-redux";
import AddToCart from "../../../../../UI/BUTTONS/AddToCart";
import Sizes from "./Sizes/Sizes";
import Gallery from "./Gallery/Gallery";
import { useParams } from "react-router-dom";

export default function CardUpper() {
  const [item, setItem] = useState({});
  const [gallery ,setGallery] = useState([])
  const [isLoading , setIsLoading] = useState(true);
  const params = useParams();
  const allItems = useSelector((state) => state.items.itemsArray);
  

  useEffect(() => {
    if(allItems.length > 0){
      setItem(allItems[params.id - 1])
      setIsLoading(false)
    }else{
      setIsLoading(true)
    }

    if(item.gallery != '' && item.gallery != null){
      setGallery(item.gallery)
    }
  },[allItems ,params])

  useEffect(()=>{
    if(item.gallery != '' && item.gallery != null){
      setGallery(item.gallery)
    }
  },[item])
  

  return (
    <>
 {isLoading ? <div>Loading</div> : <div className={styles.upper}>
    <div className={styles.images}>
      <div className={styles.bigImg}>
        <img src={item.img} alt="Img" />
      </div>
      <Gallery gallery={gallery} />
    </div>
    <div className={styles.content}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.price}>{item.price}$</div>
      <div className={styles.color}>
        Color : <span>{item.color}</span>
      </div>
      <Sizes sizes={item.sizes} />
      <div className={styles.descr}>{item.descr}</div>
      <div className={styles.buttons}>
        <AddToCart item={item}>Add to cart</AddToCart>
      </div>
    </div>
  </div>}
  </>
  )
}
