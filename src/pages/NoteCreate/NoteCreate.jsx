import { NoteForm } from "../../components/NoteForm/NoteForm";
import { NoteAPI } from "../../api/note-api";
import { useDispatch } from "react-redux";
import { addNoteList } from "../../store/notes/notes-slice";
export function NoteCreate() {
  const dispatch = useDispatch();
  const onClickSubmit = async (formValues) => {
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch(addNoteList(createdNote));
  };
  return (
    <div>
      <NoteForm title="New Note" onSubmit={onClickSubmit} />
    </div>
  );
}
