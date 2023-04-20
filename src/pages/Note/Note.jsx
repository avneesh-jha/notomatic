import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { NoteForm } from "../../components/NoteForm/NoteForm";
import { useState } from "react";

export function Note() {
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );
  const [isEditable, setIsEditable] = useState();
  function editIt() {
    setIsEditable(!isEditable);
  }
  const submit = () => {
    alert("yes");
  };
  return (
    <div>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit the note" : note.title}
          note={note}
          onCLickEdit={editIt}
          onClickDelete={() => alert("deleted")}
          onSubmit={isEditable && submit}
        />
      )}
    </div>
  );
}
