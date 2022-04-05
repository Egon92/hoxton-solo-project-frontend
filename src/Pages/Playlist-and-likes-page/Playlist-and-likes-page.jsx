import { Link } from "react-router-dom";
import EpisodesPlaylist from "../../Components/Episodes-playlist/Episodes-playlist";
import ShowsPlaylist from "../../Components/Shows-playlist/Shows-playlist";
import "./Playlist-and-likes-page.css";

function PlaylistAndLikesPage() {
  const boolean = true;
  return (
    <div className="playlist-and-likes-homepage-wrapper">
      <div id="playlist-and-likes-header-wrapper">
        <div id="playlist-and-likes-header">
          <div id="playlist-and-likes-search-section-wrapper">
            <input
              type="search"
              id="playlist-and-likes-search-input"
              placeholder="Search Topics, Shows or Episodes"
            />
            <button id="mag-glasss-button">
              <img id="mag-glass-icon" src="" alt="" />
            </button>
          </div>

          <div id="playlist-and-likes-lower-header">
            <Link to={"/profile/home"}>
              <span id="playlist-and-likes-h1-wrapper">
                <h1>RideCAST</h1>
              </span>
            </Link>
            <Link to={"/profile"}>
              <div id="playlist-and-likes-profile-wrapper">
                <span id="playlist-and-likes-username">Profile</span>
                <img
                  src=".../assets/account_circle_white_36dp.svg"
                  alt=""
                  id="playlist-and-likes-pic"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="playlist-and-likes-main-wrapper">
        <div className="playlist-and-likes-main-left-wrapper">
          {true ? (
            <div className="playlist-and-likes-main-top-left-wrapper">
              <span
                style={{ backgroundColor: "green", color: "yellow" }}
                className="playlist-and-likes-main-top-left-your-shows"
              >
                your shows
              </span>
              <span className="playlist-and-likes-main-top-left-your-liked-shows">
                liked shows
              </span>
              <span className="playlist-and-likes-main-top-left-your-episodes">
                your episodes
              </span>
              <span className="playlist-and-likes-main-top-left-your-liked-episodes">
                liked episodes
              </span>
            </div>
          ) : (
            <div className="playlist-and-likes-main-top-left-wrapper">
              <span className="playlist-and-likes-main-top-left-your-shows">
                your shows
              </span>
              <span className="playlist-and-likes-main-top-left-your-liked-shows">
                liked shows
              </span>
              <span
                style={{ backgroundColor: "green", color: "yellow" }}
                className="playlist-and-likes-main-top-left-your-episodes"
              >
                your episodes
              </span>

              <span className="playlist-and-likes-main-top-left-your-liked-episodes">
                liked episodes
              </span>
            </div>
          )}

          <div className="playlist-and-likes-main-bottom-left-wrapper">
            <span>yours selected</span>
          </div>
        </div>

        {/* {true ? <ShowsPlaylist /> : <EpisodesPlaylist />} */}

        {/* <ShowsPlaylist /> */}
        {/* <EpisodesPlaylist /> */}
      </div>
    </div>
  );
}

export default PlaylistAndLikesPage;
