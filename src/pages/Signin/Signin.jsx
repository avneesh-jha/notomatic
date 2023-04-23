import { ButtonPrimary } from "../../components/ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { Input } from "../../components/Input/Input";
import { AuthLayout } from "../../layouts/AuthLayout/AuthLayout";
import { useState } from "react";

export function Signin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onSubmitButton = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        SignIn
        <br />
        to acces your notes
      </h2>
      <form onSubmit={onSubmitButton} className={s.formGroup}>
        <Input placeholder="Userid/Email" onTextChange={setEmail} />
        <Input
          type="password"
          placeholder="Password"
          onTextChange={setPassword}
        />

        <ButtonPrimary type="submit" className={s.button}>
          Signin
        </ButtonPrimary>
        <span>
          Don't have an account yet <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
