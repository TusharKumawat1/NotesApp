"use client"
import React from "react";
import { useForm } from "react-hook-form";
import Styles from "../styles/LoginForm.module.css";
import { loginGif } from "@/assets";
type Inputs = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <form className={Styles.container}>
      <img src={loginGif.src} alt="loginGif" />
      <div className={Styles.inputContainer}>
        <input
          type="email"
          id="email"
          {...register("email")}
          required={true}
          placeholder=""
          className={Styles.input}
        />
        <label htmlFor="email" className={Styles.lable}>
          <i className="fa-regular fa-envelope"></i> Email
        </label>
      </div>
      <div className={Styles.inputContainer}>
        <input
          className={Styles.input}
          type="password"
          id="password"
          {...register("password")}
          required={true}
          placeholder=""
        />
        <label htmlFor="password" className={Styles.lable}>
          <i className="fa-solid fa-lock"></i> ********
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
