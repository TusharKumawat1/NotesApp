import validator from "validator"
export type FormData ={
    username:string;
    email:string;
    password:string;
}
export const validateData=(data:FormData)=>{
   const validationSchema=[
    {
        isValid:validator.isEmail(data.email),
        errorMessage:"Not a valid email"
    },
    {
        isValid:validator.isLength(data.username,{min:1}),
        errorMessage:"Not valid username"
    },
    {
        isValid:validator.isLength(data.password,{min:6}),
        errorMessage:"Password must contain 6 characters"
    },
   ]
   let errors=validationSchema.filter(check=>{
    if (!check.isValid) {
        return check.errorMessage
    }
   })
   if (errors.length>0) {
    return {
        isvalid:false,
        errors:errors
    }
   }else{
    return {
        isvalid:true
    }
   }
}