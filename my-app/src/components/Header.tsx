"use client"
import React from 'react'
import Styles from "../styles/Header.module.css"
import { useRouter } from 'next/navigation'
export default function Header() {
  const router=useRouter()
  const logOut=()=>{
    localStorage.removeItem('token')
    router.push("/auth")
  }
  return (
    <div className={Styles.header}>
    <div className={Styles.inputContainer}>
    <i className="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder={'search'} />
    </div>
    <button className={Styles.logOutBtn} type='button' onClick={logOut}>Logout</button>
    </div>
  )
}
