import { NoteForm } from "../../components/NoteForm/NoteForm";
import { NoteAPI } from "../../api/note-api";
import { useDispatch } from "react-redux";
import { addNoteList } from "../../store/notes/notes-slice";
import { useNavigate } from "react-router-dom";
import { withAuthRequired } from "../../hoc/withAuthRequired";
export function NoteCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickSubmit = async (formValues) => {
    const createdNote = await NoteAPI.create({
      ...formValues,
      created_at: new Date().toLocaleDateString(),
    });
    dispatch(addNoteList(createdNote));
    alert("new note has been created");
    navigate("/");
  };
  return (
    <div>
      <NoteForm title="New Note" onSubmit={onClickSubmit} />
    </div>
  );
}
export const ProtectedNoteCreate = withAuthRequired(NoteCreate);
