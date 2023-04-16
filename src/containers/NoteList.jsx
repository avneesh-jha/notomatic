import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TextCard } from "../components/TextCard/TextCard";

export function NoteList() {
  const noteList = useSelector((store) => store.noteSlice.noteList);
  const navigate = useNavigate();

  return (
    <div>
      {noteList.map((note) => {
        return (
          <TextCard
            title={note.title}
            subtitle={note.subtitle}
            content={note.content}
            onClick={() => navigate("note/" + note.id)}
            onClickTrash={() => alert("onClickTrash()")}
          />
        );
      })}
    </div>
  );
}
