import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { NoteForm } from "../../components/NoteForm/NoteForm";
import { useState } from "react";
import { deleteNoteList, setNoteList } from "../../store/notes/notes-slice";
import { NoteAPI } from "../../api/note-api";

export function Note() {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );
  const [isEditable, setIsEditable] = useState(false);
  function editIt() {
    setIsEditable(!isEditable);
  }
  const dispatch = useDispatch();
  const submit = async (formValues) => {
    const updatedNote = await NoteAPI.updateById(note.id, formValues);
    dispatch(setNoteList(updatedNote));
    setIsEditable(false);
  };
  const deleteNote = async () => {
    if (
      window.confirm("are you sure want to delete this? it is irreversible")
    ) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNoteList(note));
      navigate("/");
    }
  };
  return (
    <div>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit the note" : note.title}
          note={note}
          onCLickEdit={editIt}
          onClickDelete={deleteNote}
          onSubmit={isEditable && submit}
        />
      )}
    </div>
  );
}
