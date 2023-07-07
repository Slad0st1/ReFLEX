import React from 'react'
import styles from './Buttons.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItemInCart, removeItem } from '../../store/Items/ItemsSlice';

export default function AddToCart({children , item}) {
  const cartItems = useSelector((state) => state.items.cart);
  const dispatch = useDispatch();
  const addInCart = (target) => {
    if (cartItems.includes(target)) {
      dispatch(removeItem(target))
    } else {
      dispatch(addItemInCart(target));
    }
  };

  return (
    <button onClick={() => addInCart(item)} className={styles.addToCart}>
      {cartItems.includes(item) ? 'Remove from cart' : 'Add to cart'}
    </button>
  )
}

