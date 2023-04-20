import { NoteList } from "../../containers/NoteList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export function NoteBrowse() {
  const noteList = useSelector((store) => store.noteSlice.noteList);

  return (
    <div>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">
          <SearchBar
            onTextChange={() => console.log("yes")}
            placeholder="search the notes by title"
          />
        </div>
      </div>
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
