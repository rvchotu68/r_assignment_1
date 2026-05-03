import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <section>
      <div>BookStore</div>
      <Outlet />
    </section>
  );
}

export default Auth;
