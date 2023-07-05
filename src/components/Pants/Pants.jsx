import React from 'react'
import styles from './Pants.module.css'
import Content from '../Content/Content'
import { useSelector } from 'react-redux';

export default function Pants() {
  const pants = useSelector(state => state.items.pants)
  return (
    <div><Content items={pants} categori={"pants"}/></div>
  )
}
