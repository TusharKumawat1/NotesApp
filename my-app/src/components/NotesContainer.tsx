"use client";
import React, { useEffect, useState } from "react";
import Styles from "../styles/NotesContainer.module.css";
import Notes from "./Notes";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "@/Redux/store";
import { updateNotes } from "@/Redux/Notes/notesSlice";
type NoteType = {
  _id: string;
  color: string;
  content: string;
  updatedAt: Date;
};
export default function NotesContainer() {
  const noteColor = useSelector((state: RootState) => state.Buttons.noteColor);
  const AllNotes=useSelector((state:RootState)=>state.AllNotes.Notes)
  const refetch=useSelector((state:RootState)=>state.AllNotes.refetch)
  const [allNotes, setAllNotes] = useState<NoteType[]>([]);
  const dispatch=useDispatch()
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
      // setAllNotes(data.allNotes)
     dispatch(updateNotes(data.allNotes))
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAll();
  },[refetch]);
  const currentDate = new Date();
  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>Notes</h1>
      <div className={Styles.allNotes}>
        {AllNotes?.length === 0 ? (
          <Notes
            color={noteColor}
            content="Empty Note,Edit Needed."
            updatedAt={currentDate}
          />
        ) : (
          Array.isArray(allNotes) &&
          AllNotes?.map((data,index) => {
            return (
              <Notes
                color={data._id==="1"?noteColor:data.color}
                content={data.content}
                updatedAt={data.updatedAt!}
                _id={data._id}
                index={index}
                key={data._id}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
