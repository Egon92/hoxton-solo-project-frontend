import "./Sign-up.css";

function Signup() {
  return (
    <div id="signup-wrapper">
      <form id="signup-form" action="">
        <input type="text" placeholder="Enter your firstname" />
        <input type="text" placeholder="Enter your lastname" />
        <input type="text" placeholder="Enter your username" required />
        <input type="text" placeholder="Enter your country" />
        <input type="password" placeholder="Enter your password" required />
        <input type="email" placeholder="Enter your email" required />
        <input type="button" name="" id="signup-button" value="Sign-up" />
      </form>
      <span id="signup-label">
        Sign up <span>if</span> you <span>don't</span> have an
        <span>account!</span>
      </span>
    </div>
  );
}
export default Signup;
