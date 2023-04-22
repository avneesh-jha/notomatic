import { Input } from "../Input/Input";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function SearchBar({ onTextChange, placeholder }) {
  return (
    <div>
      <SearchIcon size={25} className={s.icon} />
      <Input placeholder={placeholder} onTextChange={onTextChange} />
    </div>
  );
}
