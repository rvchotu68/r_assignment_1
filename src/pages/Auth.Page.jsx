import { Outlet } from "react-router-dom";

import "./Auth.Style.css";

function Auth() {
  return (
    <section className="auth">
      <div>BookStore</div>
      <h2 className="progress">Work in Progress....</h2>
      <Outlet />
    </section>
  );
}

export default Auth;
