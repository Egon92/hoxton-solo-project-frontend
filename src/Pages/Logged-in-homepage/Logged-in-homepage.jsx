import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Logged-in-homepage.css";

function LoggedInHomepage(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.user) {
      navigate("/");
    }
  }, [props.user]);
  return (
    <div className="loggedin-homepage-wrapper">
      <div id="loggedin-header-wrapper">
        <div id="loggedin-header">
          <div id="loggedin-search-section-wrapper">
            <input
              type="search"
              id="loggedin-search-input"
              placeholder="Search Topics, Shows or Episodes"
            />
            <button id="mag-glasss-button">
              <img id="mag-glass-icon" src="" alt="" />
            </button>
          </div>

          <div id="loggedin-lower-header">
            <Link to={"/profile/home"}>
              <span id="loggedin-h1-wrapper">
                <h1>RideCAST</h1>
              </span>
            </Link>
            <Link to={"/profile"}>
              <div id="loggedin-profile-wrapper">
                <span id="loggedin-username">Profile</span>
                <img
                  src="public/assets/account_circle_white_36dp.svg"
                  alt=""
                  id="loggedin-pic"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="loggedin-main-wrapper">
        <div className="loggedin-main-left-wrapper">
          <Link to={"/selected"}>
            <div className="loggedin-main-left-center-wrapper">
              <div className="loggedin-main-left-center">
                <span>yours selected</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="loggedin-main-right-wrapper">
          <Link to={"/topics"}>
            <div className="loggedin-main-top-right-wrapper">
              <div className="loggedin-main-top-right">
                <span>topics</span>
              </div>
            </div>
          </Link>
          <Link to={"/best"}>
            <div className="loggedin-main-top-bottom-wrapper">
              <div className="loggedin-main-top-bottom">
                <span>what's the best now</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoggedInHomepage;
