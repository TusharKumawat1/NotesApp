"use client"
import React, { useEffect, useState } from 'react'
import Styles from "../styles/Aside.module.css"
import { useDispatch, useSelector } from "react-redux";
import { changeNoteColor } from '@/Redux/Buttons/buttonSlice';
import { createNote } from '@/Redux/Notes/notesSlice';
import { RootState } from '@/Redux/store';
export default function Aside() {
    const AllNotes=useSelector((state:RootState)=>state.AllNotes.Notes)
    const noteColor = useSelector((state: RootState) => state.Buttons.noteColor);
    const [active, setActive] = useState(false)
    const dispatch=useDispatch()
    const availableColors:string[]=["#F5972C","#F3542A","#7049F0","#0AA4F6","#C6D947",]
    const toggleClass = () => {
        setActive(p => !p)
        if (!active && AllNotes.length!==0 && AllNotes[0]._id!=="1") {
            dispatch(createNote(noteColor))
        }
    }
    return (
        <div className={Styles.container}>
            <h3>Notes App</h3>
            <div className={Styles.btnContainer}>
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
