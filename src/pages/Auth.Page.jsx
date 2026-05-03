import { Outlet } from "react-router-dom";

import "./Auth.Style.css";

function Auth() {
  return (
    <section className="auth">
      <div>BookStore</div>
      <Outlet />
    </section>
  );
}

export default Auth;
