import React from 'react'
import Styles from "../styles/NotesContainer.module.css"
import Notes from './Notes'
export default function NotesContainer() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Notes</h1>
      <div className={Styles.allNotes}>
      <Notes color="#F3542A"/>
      </div>
    </div>
  )
}
