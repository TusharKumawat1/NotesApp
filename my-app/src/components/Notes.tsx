"use client";
import React, { useRef, useState } from "react";
import Styles from "../styles/Notes.module.css";
type NotesPropsType = {
  _id?:string;
  color: string;
  content: string;
  updatedAt: Date;
};
const addNote=async(content:string,color:string)=>{
      const res=await fetch("/api/crud/createNote",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({content,color})
      })
}
export default function Notes({ color, content, updatedAt ,_id}: NotesPropsType) {
  const [noteContent, setnoteContent] = useState(content);
  const [isEditable, setisEditable] = useState(true);
  const noteRef = useRef<HTMLDivElement | null>(null);
  const editNote = () => {
    if (noteRef.current) {
      setisEditable((p) => false);
      noteRef.current.focus();
    }
  };
  const savetNote = () => {
    if (noteRef.current) {
      if (!noteContent.length) setnoteContent(content);
      setisEditable((p) => true);
    }
  };
  const handleOnchane = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setnoteContent(e.target.value);
  };
  return (
    <div
      className={Styles.container}
      style={{ backgroundColor: color }}
      ref={noteRef}
    >
      <textarea
        name=""
        id=""
        value={noteContent}
        readOnly={isEditable}
        onChange={handleOnchane}
      ></textarea>
      <div className={Styles.details}>
        <span>{updatedAt.toLocaleDateString()}</span>
        <span className={Styles.pen}>
          {isEditable ? (
            <i className="fa-solid fa-pen" onClick={editNote}></i>
          ) : (
            <i className="fa-solid fa-check" onClick={savetNote}></i>
          )}
        </span>
      </div>
    </div>
  );
}
