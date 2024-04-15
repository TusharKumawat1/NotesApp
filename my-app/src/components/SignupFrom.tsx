"use client"
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import Styles from "../styles/LoginForm.module.css";
type Inputs = {
  username:string;
  email: string;
  password: string;
};
export default function SignupFrom() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const signUp=async(data:Inputs)=>{
    let res:any=await fetch(`api/auth/signup`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    res =await res.json()
    console.log(res.token)
  }
  return (
    <form className={Styles.container} onSubmit={handleSubmit(signUp)}>
      <div className={Styles.inputContainer}>
        <input
          type="username"
          id="username"
          {...register("username")}
          required={true}
          placeholder=""
          className={Styles.input}
        />
        <label htmlFor="username" className={Styles.lable}>
          <i className="fa-regular fa-user"></i> Username
        </label>
      </div>
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

      <button type="submit">Signup</button>
    </form>
  );
}
