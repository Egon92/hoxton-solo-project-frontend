import { useNavigate } from "react-router-dom";
import "./Log-in.css";

function Login(props) {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((resp) => resp.json())
      .then((user) => {
        props.setUser(user);
        event.target.reset();
        navigate("/profile/home");
      });
  }
  return (
    <div id="login-wrapper">
      <span id="login-label">
        <span>Log in</span> and enjoy <span>your experience</span> with us!
      </span>
      <form onSubmit={handleSubmit} id="login-form" action="">
        <input name="username" type="text" placeholder="Enter your username" />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <input type="submit" id="login-button" value="Log-in" />
        <input type="button" value="Don't have an account? Sign up now!" />
      </form>
    </div>
  );
}

export default Login;
