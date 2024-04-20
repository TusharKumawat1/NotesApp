import { configureStore } from '@reduxjs/toolkit'
import formReduser from "./FormToggle/formToggleSlice"
import buttonsReduser from "./Buttons/buttonSlice"
import NotesReduser from "./Notes/notesSlice"
export const store = configureStore({
  reducer: {
    formState:formReduser,
    Buttons:buttonsReduser,
    AllNotes:NotesReduser,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch