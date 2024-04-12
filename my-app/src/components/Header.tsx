import React from 'react'
import Styles from "../styles/Header.module.css"
export default function Header() {
  return (
    <div className={Styles.header}>
    <div className={Styles.inputContainer}>
    <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder={'search'} />
    </div>
    <button className={Styles.logOutBtn}>Logout</button>
    </div>
  )
}
