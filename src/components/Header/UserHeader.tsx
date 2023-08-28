import "./UserHeader.css";
import dioLogo from "../../assets/images/logo.svg";
import Button from "../Button/Button";
import { useContext } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";
const UserHeader = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({
      login: false,
    });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="user__header">
      <div className="dio__logo">
        <img src={dioLogo} alt="bank logo" />
        <h1>Banks</h1>
      </div>
      <div className="header__buttons">
        <Button onClick={logout} className="logout__btn" text="Sair" />
      </div>
    </header>
  );
};

export default UserHeader;
