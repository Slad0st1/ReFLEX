import React from 'react'
import styles from './Cart.module.css'
import SideBar from './SideBar/SideBar'
export default function Cart() {
  
  return (
    <div className={styles.wrapper}>
    <div className={styles.cart}>
          <img src="/cart.svg" />
        </div>
    <SideBar/>
    </div>
  )
}
