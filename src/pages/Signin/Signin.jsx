import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export function Signin() {
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        SignIn
        <br />
        to acces your notes
      </h2>
      <form className={s.formGroup}>
        <input />
        <input />
        <ButtonPrimary className={s.button}>Signin</ButtonPrimary>
        <span>
          Don't have an account yet{}
          <Link to="/signup"> Signup</Link>
        </span>
      </form>
    </div>
  );
  return <div>{form}</div>;
}
