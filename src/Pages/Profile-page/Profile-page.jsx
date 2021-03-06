import { Link } from "react-router-dom";
import "./Profile-page.css";

function ProfilePage(props) {
  return (
    <div id="profile-page-wrapper">
      <div id="profile-page-header-wrapper">
        <div id="profile-page-header">
          <Link to={"/profile/home"}>
            <span id="profile-page-h1-wrapper">
              <h1>RideCAST</h1>
            </span>
          </Link>
        </div>
      </div>
      <div id="profile-page-main-wrapper">
        <div id="profile-page-main-profile-items-section">
          <div id="profile-page-main-profile-pic-and-username">
            <div id="profile-page-main-profile-pic">
              <img
                id="profile-page-profile-pic"
                src="/public/assets/account_circle_white_36dp.svg"
                alt="Profile-pic"
              />
            </div>
            <span id="profile-page-main-profile-username">Profile</span>
          </div>
          <Link to={"/selected"}>
            <div id="profile-page-main-profile-shows-wrapper">
              <span>your shows</span>
            </div>
          </Link>
          <Link to={"/selected"}>
            <div id="profile-page-main-profile-episodes-wrapper">
              <span>your episodes</span>
            </div>
          </Link>
          <Link to={"/selected"}>
            <div id="profile-page-main-profile-likes-wrapper">
              <span>your preferences</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
