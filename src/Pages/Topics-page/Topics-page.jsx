import "./Topics-page.css";

function Topics() {
  return (
    <div className="topics-homepage-wrapper">
      <div id="topics-header-wrapper">
        <div id="topics-header">
          <div id="topics-search-section-wrapper">
            <input
              type="search"
              id="topics-search-input"
              placeholder="Search Topics, Shows or Episodes"
            />
            <button id="mag-glasss-button">
              <img id="mag-glass-icon" src="" alt="" />
            </button>
          </div>

          <div id="topics-lower-header">
            <span id="topics-h1-wrapper">
              <h1>RideCAST</h1>
            </span>

            <div id="topics-profile-wrapper">
              <span id="topics-username">Profile</span>
              <img
                src=".../assets/account_circle_white_36dp.svg"
                alt=""
                id="topics-pic"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="topics-main-wrapper">
        <div className="topics-main-left-wrapper">
          <span>topics</span>
        </div>
        <div className="topics-main-right-wrapper">
          <span className="topic-name">topic Name</span>
          <span className="topic-name">topic Name</span>
          <span className="topic-name">topic Name</span>
          <span className="topic-name">topic Name</span>
          <span className="topic-name">topic Name</span>
          <span className="topic-name">topic Name</span>
          <span className="topic-name">topic Name</span>
          <span className="topic-name">topic Name</span>
          <span className="topic-name">topic Name</span>
          <span className="topic-name">topic Name</span>
        </div>
      </div>
    </div>
  );
}

export default Topics;
