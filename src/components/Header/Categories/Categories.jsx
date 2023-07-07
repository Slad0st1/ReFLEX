import React from 'react'
import styles from './Categories.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Categories() {
  const categories = useSelector( state => state.items.categories)
  return (
    <div className={styles.categories}>
        <nav>
          <ul>
          {categories.map( item => 
            <li  key={item.path} >
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to={`${item.path}`}>
              {item.title}
            </NavLink>
            </li>
          )}
          </ul>
        </nav>
    </div>
  )
}
