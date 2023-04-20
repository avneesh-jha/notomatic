import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextCard } from "../components/TextCard/TextCard";
import s from "./style.module.css";
import { NoteAPI } from "../api/note-api";
import { deleteNoteList } from "../store/notes/notes-slice";

export function NoteList({ noteList }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteNote = async (note) => {
    if (
      window.confirm("are you sure want to delete this? it is irreversible")
    ) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNoteList(note));
    }
  };

  return (
    <div className="row justify-content-cneter">
      {noteList.map((note) => {
        return (
          <div className={s.card_container} key={note.title + "" + note.id}>
            <TextCard
              title={note.title}
              subtitle={note.subtitle}
              content={note.content}
              onClick={() => navigate("note/" + note.id)}
              onClickTrash={() => deleteNote(note)}
            />
          </div>
        );
      })}
    </div>
  );
}
