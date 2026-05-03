import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../utils/context";

function Login() {
  const { setUserInfo } = useContext(userContext);
  const initData = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const [userData, setUserData] = useState(initData);

  const onChangeHandler = (e) => {
    setUserData((u) => ({ ...u, [e.target.name]: e.target.value }));
  };

  const loginUser = async () => {
    const url = "https://api.freeapi.app/api/v1/users/login";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    return data;
  };

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const {
        data: { user },
      } = await loginUser();

      setUserInfo((u) => ({
        ...u,
        isUserLoggedIn: true,
        username: user.username,
        role: user.role,
        avatar: user.avatar,
      }));

      navigate("/books");
    } catch (err) {
      console.log(err.message);
      navigate("/");
    }
  };

  const onCancelHandler = () => {
    navigate("/");
  };

  return (
    <section>
      <h2>Login</h2>

      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userData.username}
          onChange={onChangeHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={onChangeHandler}
        />

        <div>
          <button type="submit">Login</button>
          <button type="button" onClick={onCancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
