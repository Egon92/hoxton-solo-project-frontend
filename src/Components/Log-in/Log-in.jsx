import "./Log-in.css";

function Login() {
  return (
    <div id="login-wrapper">
      <span id="login-label">
        <span>Log in</span> and enjoy <span>your experience</span> with us!
      </span>
      <form id="login-form" action="">
        <input type="text" placeholder="Enter your username" />
        <input type="password" placeholder="Enter your password" />
        <input type="button" id="login-button" value="Log-in" />
        <input type="button" value="Don't have an account? Sign up now!" />
      </form>
    </div>
  );
}

export default Login;
