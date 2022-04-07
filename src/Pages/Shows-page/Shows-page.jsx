import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shows-page.css";

function ShowsPage() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/shows")
      .then((resp) => resp.json())
      .then((shows) => setShows(shows));
  }, []);
  return (
    <div className="shows-homepage-wrapper">
      <div id="shows-header-wrapper">
        <div id="shows-header">
          <div id="shows-search-section-wrapper">
            <input
              type="search"
              id="shows-search-input"
              placeholder="Search Topics, Shows or Episodes"
            />
            <button id="mag-glasss-button">
              <img id="mag-glass-icon" src="" alt="" />
            </button>
          </div>

          <div id="shows-lower-header">
            <Link to={"/profile/home"}>
              <span id="shows-h1-wrapper">
                <h1>RideCAST</h1>
              </span>
            </Link>
            <Link to={"/profile"}>
              <div id="shows-profile-wrapper">
                <span id="shows-username">Profile</span>
                <img
                  src="public/assets/account_circle_white_36dp.svg"
                  alt=""
                  id="shows-pic"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="shows-main-wrapper">
        <div className="shows-main-left-wrapper">
          <span>topic name</span>
        </div>
        <div className="shows-main-right-wrapper">
          {/* <div className="shows-main-right-item-wrapper">
            <div className="shows-main-right-item">
              <div className="show-title-topic-likeIcon-addToPlaylist-wrapper">
                <span className="show-title">Title</span>
                <span className="show-topic">Author</span>
                <span className="show-likeIcon">
                  <img id="like-icon" src="" alt="like-icon" />
                </span>
                <span className="show-addToPlaylist">
                  Add to your shows-playlist
                </span>
              </div>
            </div>
          </div>
          <div className="shows-main-right-item-wrapper">
            <div className="shows-main-right-item">
              <div className="show-title-topic-likeIcon-addToPlaylist-wrapper">
                <span className="show-title">Title</span>
                <span className="show-topic">Author</span>
                <span className="show-likeIcon">
                  <img id="like-icon" src="" alt="like-icon" />
                </span>
                <span className="show-addToPlaylist">
                  Add to your shows-playlist
                </span>
              </div>
            </div>
          </div>
          <div className="shows-main-right-item-wrapper">
            <div className="shows-main-right-item">
              <div className="show-title-topic-likeIcon-addToPlaylist-wrapper">
                <span className="show-title">Title</span>
                <span className="show-topic">Author</span>
                <span className="show-likeIcon">
                  <img id="like-icon" src="" alt="like-icon" />
                </span>
                <span className="show-addToPlaylist">
                  Add to your shows-playlist
                </span>
              </div>
            </div>
          </div>
          <div className="shows-main-right-item-wrapper">
            <div className="shows-main-right-item">
              <div className="show-title-topic-likeIcon-addToPlaylist-wrapper">
                <span className="show-title">Title</span>
                <span className="show-topic">Author</span>
                <span className="show-likeIcon">
                  <img id="like-icon" src="" alt="like-icon" />
                </span>
                <span className="show-addToPlaylist">
                  Add to your shows-playlist
                </span>
              </div>
            </div>
          </div>
          <div className="shows-main-right-item-wrapper">
            <div className="shows-main-right-item">
              <div className="show-title-topic-likeIcon-addToPlaylist-wrapper">
                <span className="show-title">Title</span>
                <span className="show-topic">Author</span>
                <span className="show-likeIcon">
                  <img id="like-icon" src="" alt="like-icon" />
                </span>
                <span className="show-addToPlaylist">
                  Add to your shows-playlist
                </span>
              </div>
            </div>
          </div>
          <div className="shows-main-right-item-wrapper">
            <div className="shows-main-right-item">
              <div className="show-title-topic-likeIcon-addToPlaylist-wrapper">
                <span className="show-title">Title</span>
                <span className="show-topic">Author</span>
                <span className="show-likeIcon">
                  <img id="like-icon" src="" alt="like-icon" />
                </span>
                <span className="show-addToPlaylist">
                  Add to your shows-playlist
                </span>
              </div>
            </div>
          </div>
          <div className="shows-main-right-item-wrapper">
            <div className="shows-main-right-item">
              <div className="show-title-topic-likeIcon-addToPlaylist-wrapper">
                <span className="show-title">Title</span>
                <span className="show-topic">Author</span>
                <span className="show-likeIcon">
                  <img id="like-icon" src="" alt="like-icon" />
                </span>
                <span className="show-addToPlaylist">
                  Add to your shows-playlist
                </span>
              </div>
            </div>
          </div>
          <div className="shows-main-right-item-wrapper">
            <div className="shows-main-right-item">
              <div className="show-title-topic-likeIcon-addToPlaylist-wrapper">
                <span className="show-title">Title</span>
                <span className="show-topic">Author</span>
                <span className="show-likeIcon">
                  <img id="like-icon" src="" alt="like-icon" />
                </span>
                <span className="show-addToPlaylist">
                  Add to your shows-playlist
                </span>
              </div>
            </div>
          </div> */}
          {shows.map((show) => (
            <div className="shows-main-right-item-wrapper">
              <div className="shows-main-right-item">
                <div className="show-title-topic-likeIcon-addToPlaylist-wrapper">
                  <span className="show-title">{show.title}</span>
                  <span className="show-topic">{show.mediaProvider}</span>
                  <span className="show-likeIcon">
                    <img id="like-icon" src="" alt="like-icon" />
                  </span>
                  <span className="show-addToPlaylist">
                    Add to your shows-playlist
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ShowsPage;
