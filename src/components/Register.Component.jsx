import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const initialData = {
    email: "",
    password: "",
    role: "ADMIN",
    username: "",
  };

  const [userData, setUserData] = useState(initialData);

  const navigate = useNavigate();

  const authUser = async () => {
    console.log(JSON.stringify(userData));
    const url = "https://api.freeapi.app/api/v1/users/register";
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
      const data = await authUser();
      console.log(data);
      //   setIsUserLoggedIn((s) => ({ ...s, isUserLoggedIn: true }));
      navigate("/auth/login");
    } catch (err) {
      console.log(`Error: ${err.message}`);
      navigate("/");
    }
  };

  const onChangeHandler = (e) => {
    setUserData((u) => ({ ...u, [e.target.name]: e.target.value }));
  };

  const onCancelHandler = () => {
    navigate("/");
  };

  return (
    <section>
      <h2>User Sign up</h2>

      <div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={onChangeHandler}
            name="email"
          />
          <input
            type="password"
            placeholder="password"
            value={userData.password}
            onChange={onChangeHandler}
            name="password"
          />
          <input
            type="text"
            placeholder="username"
            value={userData.username}
            onChange={onChangeHandler}
            name="username"
          />
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={onCancelHandler}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
