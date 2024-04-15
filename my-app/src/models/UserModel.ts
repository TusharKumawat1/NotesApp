import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
 username:{
    require:true,
    type:String,
 },
 password:{
    require:true,
    type:String,
 },
 email:{
    unique:true,
    require:true,
    type:String,
 },
});
const User=mongoose.models.userSchema || mongoose.model("User",userSchema)
export default User;