"use client"
import Aside from '@/components/Aside'
import React from 'react'
import Styles from "./page.module.css"
import Header from '@/components/Header'
import NotesContainer from '@/components/NotesContainer'
export default function page() {
  return (
    <div className={Styles.container}>
      <Aside />
      <Header/>
      <NotesContainer/>
    </div>
  )
}
