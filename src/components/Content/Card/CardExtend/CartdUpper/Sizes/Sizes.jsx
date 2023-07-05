import React from 'react'
import styles from './Sizes.module.css'
export default function Sizes({sizes}) {
  return (
    <div className={styles.sizes}>
    Sizes :  <ul>{sizes.map((item, index) => (<li key={index}>{item}</li>))}</ul>
  </div>
  )
}
