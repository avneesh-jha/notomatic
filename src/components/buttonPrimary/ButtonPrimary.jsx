import s from "./style.module.css";

export function ButtonPrimary({ type, children, onClick, isDisabled }) {
  return (
    <div>
      <button
        disabled={isDisabled}
        onClick={onClick}
        type={type}
        className={`btn btn-primary ${s.button}`}
      >
        {children}
      </button>
    </div>
  );
}
