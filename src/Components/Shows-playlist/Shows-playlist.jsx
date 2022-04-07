import { useEffect, useState } from "react";
import "./Shows-playlist.css";

function ShowsPlaylist() {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/shows")
      .then((resp) => resp.json())
      .then((shows) => setShows(shows));
  }, []);
  return (
    <div className="shows-playlist-and-likes-main-right-wrapper">
      {shows.map((show) => (
        <div className="shows-playlist-and-likes-main-right-item-wrapper">
          <div className="shows-playlist-and-likes-main-right-item">
            <div className="show-description-title-and-topic-wrapper">
              <span className="show-description-title">{show.title}</span>
              <span className="show-description-topic">{show.topic.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ShowsPlaylist;
