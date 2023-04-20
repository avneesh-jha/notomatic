import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (state, action) => {
      state.noteList = action.payload;
    },
    addNoteList: (state, action) => {
      state.noteList.push(action.payload);
    },
    updateNoteList: (state, action) => {
      const indexToUpdate = state.noteList.findIndex(
        (note) => note.id === action.payload.id
      );
      state.noteList[indexToUpdate] = action.payload;
    },
  },
});

export const { setNoteList, addNoteList, updateNoteList } = noteSlice.actions;
export const notesReducer = noteSlice.reducer;
