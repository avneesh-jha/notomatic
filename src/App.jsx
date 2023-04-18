import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { useEffect } from "react";
import { NoteAPI } from "./api/note-api";
import { useDispatch } from "react-redux";
import { setNoteList } from "./store/notes/notes-slice";
import s from "./style.module.css";

export function App() {
  const dispatch = useDispatch();
  async function fetchNoteList() {
    const noteslist = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteslist));
  }
  useEffect(() => {
    fetchNoteList();
  }, []);

  return (
    <div>
      <Header />
      <div className={s.workspace}>
        <Outlet />
      </div>
    </div>
  );
}
