import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components/header/Header";
import { useEffect } from "react";
import { NoteAPI } from "./api/note-api";
import { useDispatch } from "react-redux";
import { setNoteList } from "./store/notes/notes-slice";
import s from "./style.module.css";
import { withAuthRequired } from "./hoc/withAuthRequired";
import { ButtonPrimary } from "./components/buttonPrimary/ButtonPrimary";

export function App() {
  const navigate = useNavigate();
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
      <div className={s.buttonAdd}>
        <ButtonPrimary
          onClick={() => {
            navigate("/note/new");
          }}
        >
          Add+
        </ButtonPrimary>
      </div>

      <div className={s.workspace}>
        <Outlet />
      </div>
    </div>
  );
}
export const ProtectedApp = withAuthRequired(App);
