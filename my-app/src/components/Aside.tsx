"use client"
import React, { useState } from 'react'
import Styles from "../styles/Aside.module.css"
export default function Aside() {
    const [active, setActive] = useState(false)
    const toggleClass = () => {
        setActive(p => !p)
    }
    return (
        <div className={Styles.container}>
            <h3>Notes App</h3>
            <div>
                <button className={`${Styles.createBtn} ${active ? Styles.spin : Styles.spinRev}`} onClick={toggleClass}>
                    <i className="fa-solid fa-plus"></i>
                </button>
                <div className={`${active ? Styles.show : Styles.hide} ${Styles.colors}`} >
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className={`${Styles.color} ${active ? Styles.animate : Styles.animateRev}`} style={{ animationDelay: `${index * 0.1}s` }}></span>
                    ))}
                </div>
            </div>
        </div>
    )
}
