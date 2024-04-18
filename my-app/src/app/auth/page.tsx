"use client";
import React, { useEffect } from "react";
import Styles from "./page.module.css";
import { IoSparkles } from "react-icons/io5";
import { HiSparkles } from "react-icons/hi2";
// import gif from '@/assets';
import LoginForm from "@/components/LoginForm";
import SignupFrom from "@/components/SignupFrom";
import { useSelector, useDispatch } from "react-redux";
import { signUpForm, loginForm } from "../../Redux/FormToggle/formToggleSlice";
import { RootState } from "@/Redux/store";
import { gif, loginGif, logo } from "@/assets";
import { useRouter } from "next/navigation";
export default function page() {
  const formState = useSelector((state: RootState) => state.formState.value);
  const emoji = useSelector((state: RootState) => state.formState.emoji);
  const dispatch = useDispatch();
  const router=useRouter()
  useEffect(()=>{
    if(localStorage.getItem("token")) router.push("/")
  },[])
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h2>
          Notes App <img src={logo.src} alt="logo" />
        </h2>
        <div className={Styles.btnContainer}>
          <button
            className={Styles.loginBtn}
            onClick={() => dispatch(loginForm())}
          >
            Login
          </button>
          <button
            className={Styles.signupBtn}
            onClick={() => dispatch(signUpForm())}
          >
            Signup
          </button>
        </div>
      </div>
      <div className={Styles.hero}>
        <div className={Styles.leftSection}>
          <p className={Styles.heading}>
            Bring all <br />
            your thought together
          </p>
          <p className={Styles.subHeading}>
            Empower Your Thoughts: Unlock Creativity and Productivity <br />
            With Our Notes-Making Website. Your Ideas Effortlessly
            <br /> Captured and Orgnaized
          </p>
          <button className={Styles.btn2} onClick={() => dispatch(loginForm())}>
            Get Started
          </button>
          <IoSparkles className={Styles.i1} />
          <HiSparkles className={Styles.i2} />
          <IoSparkles className={Styles.i3} />
        </div>
        <div className={Styles.rightSection}>
          {!emoji && <img src={loginGif.src} alt="loginGif" className={Styles.greet} />}
          {emoji ? (
            <img src={gif.src} alt="gifOfimage" />
          ) : formState ? (
            <SignupFrom />
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  );
}
