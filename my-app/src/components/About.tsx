"use client"
import React from 'react'
import Styles from "../styles/About.module.css"
export default function About() {
  return (
    <div className={Styles.container}>
      <div className={Styles.aboutBox}>
        <h2>Hii Tushar 👋</h2>
        <div>Your Notes</div>
        <div>Stared Notes</div>
        <div>About Us</div>
      </div>
      <button className={Styles.aboutBtn}>?</button>
    </div>
  )
}
