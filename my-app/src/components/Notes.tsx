import React from 'react'
import Styles from "../styles/Notes.module.css"

export default function Notes({ color }: { color: string }) {
  return (
    <div className={Styles.container} style={{ backgroundColor: color }}>
      <p>The greatest glory in living lies not in never falling, but in rising every time we fall.</p>
      <div className={Styles.details}>
        <span>April 12,2024</span>
        <span className={Styles.pen}><i className="fa-solid fa-pen"></i></span>
      </div>
    </div>
  )
}
