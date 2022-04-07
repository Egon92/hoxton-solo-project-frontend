import { Link } from "react-router-dom";
import { useState } from "react";
import EpisodesPlaylist from "../../Components/Episodes-playlist/Episodes-playlist";
import ShowsPlaylist from "../../Components/Shows-playlist/Shows-playlist";
import "./Playlist-and-likes-page.css";

function PlaylistAndLikesPage(props) {
  const [selected, setSelected] = useState("your shows");
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
                  src="public/assets/account_circle_white_36dp.svg"
                  alt=""
                  id="playlist-and-likes-pic"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="playlist-and-likes-main-wrapper">
        {/* ------------------------------------------------------------------------- */}
        <div className="playlist-and-likes-main-left-wrapper">
          <div className="playlist-and-likes-main-top-left-wrapper">
            <span
              className={`playlist-and-likes-main-top-left-your-shows ${
                selected === "your shows" ? "selected" : ""
              }`}
              onClick={() => {
                setSelected("your shows");
              }}
            >
              your shows
            </span>
            <span
              className={`playlist-and-likes-main-top-left-your-liked-shows ${
                selected === "liked shows" ? "selected" : ""
              }`}
              onClick={() => {
                setSelected("liked shows");
              }}
            >
              liked shows
            </span>
            <span
              className={`playlist-and-likes-main-top-left-your-episodes ${
                selected === "your episodes" ? "selected" : ""
              }`}
              onClick={() => {
                setSelected("your episodes");
              }}
            >
              your episodes
            </span>
            <span
              className={`playlist-and-likes-main-top-left-your-liked-episodes ${
                selected === "liked episodes" ? "selected" : ""
              }`}
              onClick={() => {
                setSelected("liked episodes");
              }}
            >
              liked episodes
            </span>
          </div>
          {/*---------------------------------------------------------------------------------- */}
          <div className={`playlist-and-likes-main-bottom-left-wrapper`}>
            <span>yours selected</span>
          </div>
        </div>

        {selected === "your shows" ? <ShowsPlaylist /> : null}
        {selected === "liked shows" ? null : null}
        {selected === "your episodes" ? <EpisodesPlaylist /> : null}
        {selected === "liked episodes" ? null : null}
      </div>
    </div>
  );
}

export default PlaylistAndLikesPage;
