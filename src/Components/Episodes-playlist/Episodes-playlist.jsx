import { useEffect, useState } from "react";
import "./Episodes-playlist.css";

function EpisodesPlaylist() {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/episodes")
      .then((resp) => resp.json())
      .then((episodes) => setEpisodes(episodes));
  }, []);
  return (
    <div className="episodes-playlist-and-likes-main-right-wrapper">
      {episodes.map((episode) => (
        <div className="episodes-playlist-and-likes-main-right-item-wrapper">
          <div className="episodes-playlist-and-likes-main-right-item">
            <div className="episode-description-number-title-author-dateAdded-wrapper">
              <span className="episode-description-number">
                {episode.numberOfEpisode}
              </span>
              <span className="episode-description-title">{episode.title}</span>
              <span className="episode-description-author">
                {episode.author}
              </span>
              <span className="episode-description-dateAdded">
                {episode.dateAdded}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default EpisodesPlaylist;
