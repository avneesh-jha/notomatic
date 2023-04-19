import { PencilFill, TrashFill } from "react-bootstrap-icons";
// import { Button } from "react-bootstrap/Button";
import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { useState } from "react";

export function NoteForm({ title, onCLickEdit, onClickDelete, onSubmit }) {
  const [formValues, setFormValues] = useState({ title: "", content: "" });
  function onChangeFormValues(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  }
  const actionIcons = (
    <>
      <div className="col-1">
        {onCLickEdit && <PencilFill className={s.icons} />}
      </div>
      <div className="col-1">
        {onClickDelete && <TrashFill className={s.icons} />}
      </div>
    </>
  );
  const titleInput = (
    <>
      <label className="form-lable">Title</label>
      <input
        onChange={onChangeFormValues}
        type="text"
        name="title"
        className="form-control"
      ></input>
    </>
  );
  const contentInput = (
    <>
      <label className="form-lable">Content</label>
      <textarea
        onChange={onChangeFormValues}
        type="text"
        name="content"
        className="form-control"
        row="5"
      ></textarea>
    </>
  );
  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary onClick={() => onSubmit(formValues)}>submit</ButtonPrimary>
    </div>
  );
  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3${s.title_input_container}`}>{titleInput}</div>
      <div className="mb-3">{contentInput}</div>
      {onSubmit && submitBtn}
    </div>
  );
}
