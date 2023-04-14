import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { useEffect } from "react";
import { NoteAPI } from "./assets/api/note-api";
import { useDispatch } from "react-redux";
import { setNoteList } from "./store/notes/notes-slice";

export function App() {
  const dispatch = useDispatch();
  async function fetchNoteList() {
    const noteslist = await NoteAPI.fetchAll();
    console.log(noteslist);
    dispatch(setNoteList(noteslist));
  }

  useEffect(() => {
    fetchNoteList();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
