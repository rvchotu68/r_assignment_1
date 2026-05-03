import { createContext, useState, useMemo } from "react";

const userContext = createContext({
  userInfo: {},
  setUserInfo: () => {},
});

export const ContextProvider = ({ children }) => {
  const initData = {
    isUserLoggedIn: false,
    username: "",
    role: "",
    avatar: "",
  };

  const [userInfo, setUserInfo] = useState(initData);

  const state = useMemo(() => ({ userInfo, setUserInfo }), [userInfo]);

  return <userContext.Provider value={state}>{children}</userContext.Provider>;
};

export default userContext;
