import { Logo } from "../Logo/index";
import logoSrc from "../../assets/images/logo.png";
import s from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthApi } from "../../api/auth";
import { setUser } from "../../store/auth/auth-slice";
export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.authSlice.auth.user);
  const signOut = () => {
    AuthApi.signOut();
    dispatch(setUser(null));
  };
  const renderAuthProfile = () => {
    return (
      <div>
        <img
          src={`https://api.dicebear.com/5.x/bottts/svg?seed=${user.email}`}
          style={{ width: 40 }}
          className="rounded-circle"
        />
        <div>Hello {user.email}</div>
        <Link to="#" onClick={signOut}>
          SignOut
        </Link>
      </div>
    );
  };
  return (
    <div className={`row ${s.conatiner}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => {
            navigate("/");
          }}
          title={"Notomatic"}
          subtitle={"Manage your notes"}
          image={logoSrc}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">{renderAuthProfile()}</div>
    </div>
  );
}
