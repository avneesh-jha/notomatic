import { NoteList } from "../../containers/NoteList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function NoteBrowse() {
  const noteList = useSelector((store) => store.noteSlice.noteList);

  return (
    <div>
      <SearchBar onTextChange={() => console.log("yes")} placeholder="" />
      {noteList?.length === 0 && (
        <div className="d-flex justify">
          <span>
            {" "}
            there is no notes to be displayed{" "}
            <Link to="note/new"> create a new one</Link>
          </span>
        </div>
      )}
      <NoteList />
    </div>
  );
}
