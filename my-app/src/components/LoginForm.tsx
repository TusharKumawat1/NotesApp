"use client"
import React from "react";
import { useForm } from "react-hook-form";
import Styles from "../styles/LoginForm.module.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
type Inputs = {
  email: string;
  password: string;
};
export default function LoginForm() {
  const router=useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const login=async(data:Inputs)=>{
    let res:any=await fetch(`api/auth/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    res =await res.json()
   if (res.success){
     localStorage.setItem("token",res.token)
     router.push("/")
     toast(`Wellcome back 😊`)
   }
  }
  return (
    <form className={Styles.container} onSubmit={handleSubmit(login)}>
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
