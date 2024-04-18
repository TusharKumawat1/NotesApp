"use client";
import React, { useEffect, useState } from "react";
import Styles from "../styles/NotesContainer.module.css";
import Notes from "./Notes";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
type NoteType = {
  _id: string;
  color: string;
  content: string;
  updatedAt: Date;
};
export default function NotesContainer() {
  const noteColor = useSelector((state: RootState) => state.Buttons.noteColor);
  const [allNotes, setAllNotes] = useState<NoteType[]>([]);
  const fetchAll = async () => {
    try {
      const res = await fetch("/api/crud/fetchAll", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token")!,
        },
      });
      let data = await res.json();
      setAllNotes(data.allNotes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAll();
  }, []);
  const currentDate = new Date();
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Notes</h1>
      <div className={Styles.allNotes}>
        {allNotes?.length === 0 ? (
          <Notes
            color={noteColor}
            content="Empty Note,Edit Needed."
            updatedAt={currentDate}
          />
        ) : (
          Array.isArray(allNotes) &&
          allNotes?.map((data) => {
            return (
              <Notes
                color={data.color}
                content={data.content}
                updatedAt={data.updatedAt}
                _id={data._id}
                key={data._id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
