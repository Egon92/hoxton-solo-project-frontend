import "./Header.css";

function Header() {
  return (
    <header>
      <div id="header-wrapper">
        <div id="search-section-wrapper">
          <input
            type="search"
            id="search-input"
            placeholder="Search Topics, Shows or Episodes"
          />
          <button id="mag-glasss-button">
            <img id="mag-glass-icon" src="" alt="" />
          </button>
        </div>

        <div id="lower-header">
          <span id="h1-wrapper">
            <h1>RideCAST</h1>
          </span>

          <span id="login-signup-wrapper-homepage">
            <span id="login-link-homepage">Log in</span>
            <span id="slash">/</span>
            <span id="signup-link-homepage">Sign up</span>
          </span>
        </div>
      </div>
    </header>
  );
}
export default Header;
