import { Link } from "react-router-dom";
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
          <button id="mag-glass-button">
            <img
              id="mag-glass-icon"
              src="/public/assets/search_black_36dp.svg"
              alt=""
            />
          </button>
        </div>

        <div id="lower-header">
          <span id="h1-wrapper">
            <h1>RideCAST</h1>
          </span>
          <Link to={"/login"}>
            <span id="login-signup-wrapper-homepage">
              <span id="login-link-homepage">Log in</span>
              <span id="slash">/</span>
              <span id="signup-link-homepage">Sign up</span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
