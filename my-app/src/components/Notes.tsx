"use client";
import React, { useRef, useState } from "react";
import Styles from "../styles/Notes.module.css";

export default function Notes({ color }: { color: string }) {
  const [noteContent, setnoteContent] = useState("Empty note, edit needed.");
  const [isEditable, setisEditable] = useState(true);
  const noteRef = useRef<HTMLDivElement | null>(null);
  const date = new Date();
  const editNote = () => {
    if (noteRef.current) {
      setisEditable((p) => false);
      noteRef.current.focus();
    }
  };
  const savetNote = () => {
    if (noteRef.current) {
      if (!noteContent.length) setnoteContent("Empty note, edit needed.");
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
        <span>{date.toLocaleDateString()}</span>
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
