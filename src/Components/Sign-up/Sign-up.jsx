import { useNavigate } from "react-router-dom";
import "./Sign-up.css";

function Signup(props) {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      username: event.target.username.value,
      country: event.target.country.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    fetch("http://localhost:4000/signup", {
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
    <div id="signup-wrapper">
      <form onSubmit={handleSubmit} id="signup-form" action="">
        <input
          name="firstname"
          type="text"
          placeholder="Enter your firstname"
        />
        <input name="lastname" type="text" placeholder="Enter your lastname" />
        <input
          name="username"
          type="text"
          placeholder="Enter your username"
          required
        />
        <input name="country" type="text" placeholder="Enter your country" />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input type="submit" id="signup-button" value="Sign-up" />
      </form>
      <span id="signup-label">
        Sign up <span>if</span> you <span>don't</span> have an
        <span>account!</span>
      </span>
    </div>
  );
}
export default Signup;
