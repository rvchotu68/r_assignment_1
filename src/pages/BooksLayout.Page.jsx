import { Outlet, Navigate } from "react-router-dom";

import { useContext } from "react";
import userContext from "../utils/context";

function BooksLayout() {
  const { userInfo } = useContext(userContext);

  if (!userInfo.isUserLoggedIn) return <Navigate to="/auth/login" />;

  return <Outlet />;
}

export default BooksLayout;
