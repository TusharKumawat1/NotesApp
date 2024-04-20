"use client";
import React, { useEffect, useRef, useState } from "react";
import Styles from "../styles/Notes.module.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { toggleRefetch } from "@/Redux/Notes/notesSlice";
import { RootState } from "@/Redux/store";
type NotesPropsType = {
  _id?: string;
  index?: number;
  color: string;
  content: string;
  updatedAt: Date;
};

export default function Notes({
  color,
  content,
  updatedAt,
  _id,
  index,
}: NotesPropsType) {
  const AllNotes = useSelector((state: RootState) => state.AllNotes.Notes);
  const dispetch = useDispatch();
  const [noteContent, setnoteContent] = useState(content);
  const [isEditable, setisEditable] = useState(true);
  const noteRef = useRef<HTMLDivElement | null>(null);
  const date = new Date(updatedAt);

  const addNote = async (content: string, color: string) => {
    toast("New Note Added");
    const res = await fetch("/api/crud/createNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token")!,
      },
      body: JSON.stringify({ content, color }),
    });
    let data = await res.json();
    if (data.success) {
      dispetch(toggleRefetch());
    }
  };
  const updateNote = async (content: string, color: string, _id: string) => {
    toast("Note Updated 😊");
    const res = await fetch("/api/crud/editNote", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token")!,
      },
      body: JSON.stringify({ content, color, _id }),
    });
    let data = await res.json();
    if (data.success) {
      dispetch(toggleRefetch());
    }
  };
  const deleteNote = async () => {
    toast("Note deleted 😊");
    const res = await fetch("/api/crud/deleteNote", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token")!,
      },
      body: JSON.stringify({ _id }),
    });
    let data = await res.json();
    if (data.success) {
      dispetch(toggleRefetch());
    }
  };
  const editNote = () => {
    if (noteRef.current) {
      setisEditable((p) => false);
      noteRef.current.focus();
    }
  };
  const savetNote = () => {
    if (noteRef.current) {
      if (!noteContent.length) setnoteContent(content);
      else if (
        (noteContent !== "Empty Note,Edit Needed." && _id === "1")
      ) {
        addNote(noteContent, color);
      } else if (_id !== "1"&& AllNotes[index!]  && AllNotes[index!].content  && AllNotes[index!].content !== noteContent) {
        updateNote(noteContent, color, _id!);
      } else if( AllNotes.length === 0 && noteContent !== "Empty Note,Edit Needed."){
        addNote(noteContent, color);

      }
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
        {isEditable ? (
          <span>
            {date &&
              date?.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
          </span>
        ) : (
          <span className={Styles.trash}>
            {_id !== "1" && AllNotes.length !== 0 ? (
              <i className={`fa-solid fa-trash`} onClick={deleteNote}></i>
            ) : (
              "😊"
            )}
          </span>
        )}
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
