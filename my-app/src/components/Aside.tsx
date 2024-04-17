"use client"
import React, { useState } from 'react'
import Styles from "../styles/Aside.module.css"
import { useDispatch } from "react-redux";
import { changeNoteColor } from '@/Redux/Buttons/buttonSlice';
export default function Aside() {
    const [active, setActive] = useState(false)
    const dispatch=useDispatch()
    const availableColors:string[]=["#F5972C","#F3542A","#7049F0","#0AA4F6","#C6D947",]
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
                    {availableColors.map((color, index) => (
                        <span key={index} className={`${Styles.color} ${active ? Styles.animate : Styles.animateRev}`} style={{ animationDelay: `${index * 0.1}s` ,background:color }} onClick={()=>dispatch(changeNoteColor(color))}></span>
                    ))}
                </div>
            </div>
        </div>
    )
}
