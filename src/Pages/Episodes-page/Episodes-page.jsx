import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Episodes-page.css";

function EpisodesPage(props) {
  const [show, setShow] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/shows/${params.showId}`)
      .then((resp) => resp.json())
      .then((show) => setShow(show));
  }, [params.showId]);
  if (show === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="episodes-homepage-wrapper">
      <div id="episodes-header-wrapper">
        <div id="episodes-header">
          <div id="episodes-search-section-wrapper">
            <input
              type="search"
              id="episodes-search-input"
              placeholder="Search Topics, Shows or Episodes"
            />
            <button id="mag-glasss-button">
              <img id="mag-glass-icon" src="" alt="" />
            </button>
          </div>

          <div id="episodes-lower-header">
            <span id="episodes-h1-wrapper">
              <h1>RideCAST</h1>
            </span>

            <div id="episodes-profile-wrapper">
              <span id="episodes-username">Profile</span>
              <img
                src="public/assets/account_circle_white_36dp.svg"
                alt=""
                id="episodes-pic"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="episodes-main-wrapper">
        <div className="episodes-main-left-wrapper">
          <span>{show.title}</span>
        </div>
        <div className="episodes-main-right-wrapper">
          {show.episodes.map((episode) => {
            return (
              <Link
                key={episode.id}
                className="episodes-main-right-item-wrapper"
                to={`/episodes/${episode.id}`}
              >
                <div className="episodes-main-right-item">
                  <div className="episode-title-topic-likeIcon-addToPlaylist-wrapper">
                    <span className="episode-number"></span>
                    <span className="episode-title">{episode.title}</span>
                    <span className="episode-topic">{episode.author}</span>
                    <span className="episode-dateAdded">
                      {episode.dateAdded}
                    </span>
                    <span className="episode-likeIcon">
                      <img
                        id="like-icon"
                        src="/thumb_up_white_24dp.svg"
                        alt="like-icon"
                      />
                    </span>
                    <span className="episode-addToPlaylist">
                      Add to your episodes playlist
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default EpisodesPage;
