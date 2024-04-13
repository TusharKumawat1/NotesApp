"use client"
import React from 'react'
import Styles from './page.module.css'
import { IoSparkles } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
import gif from '@/assets';
import LoginForm from '@/components/LoginForm';
export default function page() {
    return (
        <div className={Styles.container}>
            <div className={Styles.header}>
                <h2>Notes App</h2>
                <div className={Styles.btnContainer}>
                    <button className={Styles.loginBtn}>Login</button>
                    <button className={Styles.signupBtn}>Signup</button>
                </div>
            </div>
            <div className={Styles.hero}>
                <div className={Styles.leftSection}>
                    <p className={Styles.heading}>Bring all <br />your thought together</p>
                    <p className={Styles.subHeading}>Empower Your Thoughts: Unlock Creativity and Productivity <br />With Our Notes-Making Website. Your Ideas Effortlessly<br /> Captured and Orgnaized</p>
                    <button className={Styles.btn2}>Get Started</button>
                    <IoSparkles className={Styles.i1} />
                    <HiSparkles className={Styles.i2} />
                    <IoSparkles className={Styles.i3} />
                </div>
                <div className={Styles.rightSection}>
                    {/* <img src={gif.src} alt="gifOfimage" /> */}
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}
