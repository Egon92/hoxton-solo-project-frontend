import "./Profile-page.css";

function ProfilePage() {
  return (
    <div id="profile-page-wrapper">
      <div id="profile-page-header-wrapper">
        <div id="profile-page-header">
          <span id="profile-page-h1-wrapper">
            <h1>RideCAST</h1>
          </span>
        </div>
      </div>
      <div id="profile-page-main-wrapper">
        <div id="profile-page-main-profile-items-section">
          <div id="profile-page-main-profile-pic-and-username">
            <div id="profile-page-main-profile-pic">
              <img id="profile-page-profile-pic" src="" alt="Profile-pic" />
            </div>
            <span id="profile-page-main-profile-username">Profile</span>
          </div>
          <div id="profile-page-main-profile-shows-wrapper">
            <span>your shows</span>
          </div>
          <div id="profile-page-main-profile-episodes-wrapper">
            <span>your episodes</span>
          </div>
          <div id="profile-page-main-profile-likes-wrapper">
            <span>your preferences</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
