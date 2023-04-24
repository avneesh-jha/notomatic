import { configureStore } from "@reduxjs/toolkit";
import { notesReducer } from "./notes/notes-slice";
import { authReducer } from "./auth/auth-slice";

export const store = configureStore({
  reducer: {
    noteSlice: notesReducer,
    authSlice: authReducer,
  },
});
