import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
interface NotesType{
    color: string;
    content: string;
    updatedAt?: Date;
    _id?:string
}
type AllNotes={
    Notes:NotesType[];
    refetch:boolean
}
const initialState : AllNotes={
    Notes:[],
    refetch:false
}
const date=new Date()
export const NotesSlice=createSlice({
    name:"AllNotes",
    initialState,
    reducers:{
        updateNotes:(state,action:PayloadAction<NotesType[]>)=>{
            state.Notes=action.payload
        },
        createNote:(state,action:PayloadAction<string>)=>{
            state.Notes.unshift({
                content:"Empty Note,Edit Needed.",
                color:action.payload,
                updatedAt:date,
                _id:"1"
            })
        },
        toggleRefetch:(state)=>{
            state.refetch=!state.refetch
        }
   
    }
})
export const {updateNotes,createNote,toggleRefetch}=NotesSlice.actions
export default NotesSlice.reducer