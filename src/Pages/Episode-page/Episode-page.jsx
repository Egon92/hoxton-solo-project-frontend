import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Episode-page.css";

function EpisodePage(props) {
  const [episode, setEpisode] = useState(null);

  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/episodes/${params.episodeId}`)
      .then((resp) => resp.json())
      .then((episode) => setEpisode(episode));
  }, []);
  if (episode === null) {
    return <h1>Loading...</h1>;
  }
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
                  id="episode-pic"
                  src="http://localhost:4000/10.73-_Zenos_Revolution_Master_.mp3"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="episode-main-wrapper">
        <div className="episode-main-left-wrapper">
          <span>{episode.show.title}</span>
        </div>
        <div className="episode-main-right-wrapper">
          <div className="episode-main-right-item-wrapper">
            <div className="episode-main-right-item">
              <div className="episode-main-right-item-number-title-and-audio">
                <div className="episode-number-and-title">
                  <span className="episode-number">
                    {episode.numberOfEpisode}
                  </span>
                  <span className="episode-title">{episode.title}</span>
                </div>
                <audio
                  className="episode-audio"
                  src={`http://localhost:4000${episode.url}`}
                  controls
                >
                  <code>audio</code> element.
                </audio>
              </div>
              <div className="episode-main-right-item-dateAdded-length-likeButton-numberofLikes-addToPlaylist">
                <span className="episode-dateAdded">{episode.dateAdded}</span>
                <span className="episode-length">{`${episode.length} min`}</span>
                <img
                  className="episode-like-button"
                  src="public/assets/thumb_up_white_24dp.svg"
                  alt="like-icon"
                />
                <span className="episode-number-of-likes">
                  {episode.numberofLikes}
                </span>
                <span className="episode-add-to-your-playlist">
                  add to playlist
                </span>
              </div>
              <div className="episode-main-right-item-description">
                <span className="episode-description">
                  {episode.description}
                </span>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    </div>
  );
}
export default EpisodePage;
