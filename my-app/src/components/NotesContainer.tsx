"use client";
import React from "react";
import Styles from "../styles/NotesContainer.module.css";
import Notes from "./Notes";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
export default function NotesContainer() {
  const noteColor = useSelector((state: RootState) => state.Buttons.noteColor);
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Notes</h1>
      <div className={Styles.allNotes}>
        <Notes color={noteColor} />
      </div>
    </div>
  );
}
