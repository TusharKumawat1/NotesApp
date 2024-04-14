import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface formState{
  value: boolean,
  emoji:boolean
}

const initialState: formState = {
  value: false,
  emoji:true,
}

export const formSlice = createSlice({
  name: 'isLoginForm',
  initialState,
  reducers: {
     signUpForm:(state)=>{
      state.emoji=false
      state.value=true
     },
     loginForm:(state)=>{
      state.emoji=false
      state.value=false
     }
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { signUpForm, loginForm, } = formSlice.actions

export default formSlice.reducer