"use client"
import Aside from '@/components/Aside'
import React from 'react'
import Styles from "./page.module.css"
export default function page() {
  return (
    <div className={Styles.container}>
      <Aside />
      <div className={Styles.header}>
      <div className={Styles.inputContainer}>
      <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder={'search'} />
      </div>
      <button className={Styles.logOutBtn}>Logout</button>
      </div>
    </div>
  )
}
