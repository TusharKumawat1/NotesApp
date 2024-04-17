"use client";
import React from "react";
import Styles from "../styles/About.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/Redux/store";
import { toggle } from "@/Redux/Buttons/buttonSlice";
import ClickAwayListener from "react-click-away-listener";
export default function About() {
  const isActive = useSelector((state: RootState) => state.Buttons.aboutBtn);
  const dispatch = useDispatch();
  return (
    <div className={Styles.container}>
      {isActive && (
        <ClickAwayListener onClickAway={()=>dispatch(toggle())}>
          <div className={Styles.aboutBox}>
            <h2>Hii Tushar 👋</h2>
            <div>Your Notes</div>
            <div>Stared Notes</div>
            <div>About Us</div>
          </div>
        </ClickAwayListener>
      )}
      <button className={Styles.aboutBtn} onClick={() => dispatch(toggle())}>
        ?
      </button>
    </div>
  );
}
