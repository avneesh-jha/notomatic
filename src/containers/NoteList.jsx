import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextCard } from "../components/TextCard/TextCard";
import s from "./style.module.css";

export function NoteList() {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const navigate = useNavigate();

  return (
    <div className="row justify-content-cneter">
      {noteList.map((note) => {
        return (
          <div className={s.card_container}>
            <TextCard
              title={note.title}
              subtitle={note.subtitle}
              content={note.content}
              onClick={() => navigate("note/" + note.id)}
              onClickTrash={() => alert("onClickTrash()")}
            />
          </div>
        );
      })}
    </div>
  );
}
