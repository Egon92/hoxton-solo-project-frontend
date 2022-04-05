import { Link } from "react-router-dom";
import "./Episode-page.css";

function EpisodePage() {
  return (
    <div className="episode-homepage-wrapper">
      <div id="episode-header-wrapper">
        <div id="episode-header">
          <div id="episode-search-section-wrapper">
            <input
              type="search"
              id="episode-search-input"
              placeholder="Search Topics, Shows or Episodes"
            />
            <button id="mag-glasss-button">
              <img id="mag-glass-icon" src="" alt="" />
            </button>
          </div>

          <div id="episode-lower-header">
            <Link to={"/profile/home"}>
              <span id="episode-h1-wrapper">
                <h1>RideCAST</h1>
              </span>
            </Link>
            <Link to={"/profile"}>
              <div id="episode-profile-wrapper">
                <span id="episode-username">Profile</span>
                <img
                  src=".../assets/account_circle_white_36dp.svg"
                  alt=""
                  id="episode-pic"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="episode-main-wrapper">
        <div className="episode-main-left-wrapper">
          <span>show title</span>
        </div>
        <div className="episode-main-right-wrapper">
          <div className="episode-main-right-item-wrapper">
            <div className="episode-main-right-item">
              <div className="episode-main-right-item-number-title-and-audio">
                <div className="episode-number-and-title">
                  <span className="episode-number">1</span>
                  <span className="episode-title">Episode title</span>
                </div>
                <audio
                  className="episode-audio"
                  src=".../assets/radiolab_podcast040122_inheritance.mp3"
                  controls
                >
                  Episode audio
                </audio>
              </div>
              <div className="episode-main-right-item-dateAdded-length-likeButton-numberofLikes-addToPlaylist">
                <span className="episode-dateAdded">mm/dd/yyyy</span>
                <span className="episode-length">length m</span>
                <img className="episode-like-button" src="" alt="like-icon" />
                <span className="episode-number-of-likes">nr. of likes</span>
                <span className="episode-add-to-your-playlist">
                  add to playlist
                </span>
              </div>
              <div className="episode-main-right-item-description">
                <span className="episode-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore inventore voluptatem placeat est. Excepturi ipsum quo
                  officia minima vitae maiores animi distinctio incidunt
                  corrupti doloribus, numquam velit inventore quae error?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EpisodePage;
