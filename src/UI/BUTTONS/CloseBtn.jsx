import React from 'react'
import styles from './Buttons.module.css'
export default function CloseBtn({...props}) {
  return (
    <div className={styles.closeBtn} {...props}>
        <img src='/close.svg'/>
    </div>
  )
}
