import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Header.style.css";
import Profile from "./Profile.Component.jsx";
import userContext from "../utils/context";

function Header() {
  const { userInfo } = useContext(userContext);

  const authBtns = (
    <div className="header__btns">
      <Link to="/auth/signup" className="btn signup">
        Register
      </Link>
      <Link to="/auth/login" className="btn login">
        Login
      </Link>
    </div>
  );

  const component = userInfo.isUserLoggedIn ? <Profile /> : authBtns;

  return <header className="header">{component}</header>;
}

export default Header;
