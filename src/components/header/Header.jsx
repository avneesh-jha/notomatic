import { Logo } from "../Logo/index";
import logoSrc from "../../assets/images/logo.png";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import s from "./style.module.css";
import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();
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
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary
          onClick={() => {
            navigate("/note/new");
          }}
        >
          Add Note +
        </ButtonPrimary>
      </div>
    </div>
  );
}
