"use client"
import Aside from '@/components/Aside'
import React, { useEffect } from 'react'
import Styles from "./page.module.css"
import Header from '@/components/Header'
import NotesContainer from '@/components/NotesContainer'
import About from '@/components/About'
import { useRouter } from 'next/navigation'
export default function Page() {
  const router=useRouter()
  useEffect(()=>{
    if (!localStorage.getItem("token")) {
      router.push("/auth")
    }
  },[])
  return (
    <div className={Styles.container}>
      <Aside />
      <Header/>
      <NotesContainer/>
      <About/>
    </div>
  )
}
