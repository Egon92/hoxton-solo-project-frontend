import { Link } from "react-router-dom";
import Login from "../../Components/Log-in/Log-in";
import Signup from "../../Components/Sign-up/Sign-up";
import "./Login-and-Signup-page.css";

function LogInAndSignUpPage(props) {
  return (
    <div id="login-and-signup-page-wrapper">
      <div id="login-and-signup-page-header-wrapper">
        <div id="login-and-signup-page-header">
          <Link to={"/"}>
            <span id="login-and-signup-page-h1-wrapper">
              <h1>RideCAST</h1>
            </span>
          </Link>
        </div>
      </div>
      <div id="login-and-signup-main-wrapper">
        <Signup setUser={props.setUser} />
        <Login />
      </div>
    </div>
  );
}

export default LogInAndSignUpPage;
