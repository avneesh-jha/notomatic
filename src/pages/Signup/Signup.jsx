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

export function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [secondPassword, setSecondPassword] = useState();
  const onSubmitButton = async (e) => {
    e.preventDefault();
    if (secondPassword === password) {
      try {
        const user = await AuthApi.signUp(email, password);

        dispatch(setUser(user));
        await toast("Sign up done", "Logged In Successfully");
        navigate("/");
      } catch (err) {
        toast("error", err.message);
      }
    } else {
      toast("error", "Password doesn't match");
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
        <Input
          type="password"
          placeholder="Password(repeat)"
          onTextChange={setSecondPassword}
        />
        {secondPassword === password && (
          <ButtonPrimary type="submit" className={s.button}>
            SignUp
          </ButtonPrimary>
        )}

        <span>
          Already have an account <Link to="/signin">log in</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
