import { PencilFill, TrashFill } from "react-bootstrap-icons";
// import { Button } from "react-bootstrap/Button";
import { FieldError } from "../FieldError/FieldError";
import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { useState } from "react";
import { ValidatorService } from "../../Utils/validator";
const VALIDATOR = {
  title: (value) => {
    return ValidatorService.min(value, 3) || ValidatorService.max(value, 20);
  },
  content: (value) => {
    return ValidatorService.min(value, 3);
  },
};
export function NoteForm({
  isEditable = true,
  title,
  note,
  onCLickEdit,
  onClickDelete,
  onSubmit,
}) {
  const [formValues, setFormValues] = useState({
    title: note?.title || "",
    content: note?.content || "",
  });
  const [formErrors, setFormErrors] = useState({
    title: note?.title ? undefined : true,
    content: note?.content ? undefined : true,
  });

  function onChangeFormValues(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  }

  const validate = (fieldName, fieldValue) => {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATOR[fieldName](fieldValue),
    });
  };

  const actionIcons = (
    <>
      <div className="col-1">
        {onCLickEdit && (
          <PencilFill onClick={onCLickEdit} className={s.icons} />
        )}
      </div>
      <div className="col-1">
        {onClickDelete && (
          <TrashFill onClick={onClickDelete} className={s.icons} />
        )}
      </div>
    </>
  );
  const titleInput = (
    <div className="mb-5">
      <label className="form-lable">Title</label>
      <input
        onChange={onChangeFormValues}
        type="text"
        name="title"
        className="form-control"
        value={formValues.title}
      />
      <FieldError msg={formErrors.title} />
    </div>
  );
  const contentInput = (
    <div className="mb-5">
      <label className="form-lable">Content</label>
      <textarea
        onChange={onChangeFormValues}
        type="text"
        name="content"
        className="form-control"
        row="5"
        value={formValues.content}
      />
      <FieldError msg={formErrors.content} />
    </div>
  );
  const hasError = () => {
    for (const fieldName in formErrors) {
      if (formErrors[fieldName]) {
        return true;
      }
    }
    return false;
  };
  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary
        isDisabled={hasError()}
        onClick={() => onSubmit(formValues)}
      >
        submit
      </ButtonPrimary>
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
      <div className={`mb-3${s.title_input_container}`}>
        {isEditable && titleInput}
      </div>
      <div className="mb-3">
        {isEditable ? contentInput : <pre>{note.content}</pre>}
      </div>
      {onSubmit && submitBtn}
    </div>
  );
}
