import { ButtonPrimary } from "../../components/buttonPrimary/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { Input } from "../../components/Input/Input";
import { AuthLayout } from "../../layouts/AuthLayout/AuthLayout";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthApi } from "../../api/auth";
import { setUser } from "../../store/auth/auth-slice";
import { toast } from "../../Utils/sweet-alert";

export function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onSubmitButton = async (e) => {
    e.preventDefault();
    try {
      const user = await AuthApi.signIn(email, password);

      dispatch(setUser(user));
      await toast("success", "Logged In Successfully");
      navigate("/");
    } catch (err) {
      console.log("Auth -Failed");
      toast("error", err.message);
    }
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
