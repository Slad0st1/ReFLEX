import React from 'react'
import styles from './Categories.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Categories() {
  const items = useSelector( state => state.items.categories)
  return (
    <div className={styles.categories}>
        <nav>
          <ul>
          {items.map( item => 
            <li  key={item.name} >
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to={`${item.name}`}>
              {item.title}
            </NavLink>
            </li>
          )}
          </ul>
        </nav>
    </div>
  )
}
