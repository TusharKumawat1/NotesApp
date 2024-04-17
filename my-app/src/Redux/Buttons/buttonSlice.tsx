import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Buttons{
  aboutBtn: boolean,
  noteColor:string
}

const initialState: Buttons = {
    aboutBtn: false,
    noteColor:"#F3542A"
}

export const buttonSlice = createSlice({
  name: 'isActive',
  initialState,
  reducers: {
    toggle:(state)=>{
        state.aboutBtn=!state.aboutBtn
    },
    changeNoteColor:(state,action:PayloadAction<string>)=>{
        state.noteColor=action.payload
    }
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { toggle,changeNoteColor } = buttonSlice.actions

export default buttonSlice.reducer