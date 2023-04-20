import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NoteForm } from "../../components/NoteForm/NoteForm";

export function Note() {
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );
  return (
    <div>
      {note && (
        <NoteForm
          isEditable={false}
          title={note.title}
          note={note}
          onCLickEdit={() => alert("edited")}
          onClickDelete={() => alert("deleted")}
        />
      )}
    </div>
  );
}
