import "./Add-to-episodes-playlist-modal.css";

function AddToEpisodesPlaylistModal(props) {
  return (
    <div className="add-to-episodes-playlist-modal-wrapper">
      <div className="add-to-episodes-playlist-modal">
        <div className="close-modal-button-wrapper">
          <button id="close-modal-button">❌</button>
        </div>
        <form className="add-to-episodes-playlist-form" action="">
          <label className="add-to-new-episode-playlist-wrapper" htmlFor="">
            Add to new playlist
            <div className="add-to-new-episode-playlist-label">
              <input
                id="add-to-new-episode-playlist-input"
                type="text"
                placeholder="Enter your episode playlist title"
              />
              <input
                id="add-to-new-episode-playlist-button"
                type="button"
                value="Add"
              />
            </div>
          </label>
          <label
            className="add-to-existing-episode-playlist-wrapper"
            htmlFor=""
          >
            Add to existing playlist
            <div className="add-to-existing-episode-playlist">
              <span className="add-to-existing-episode-playlist-text">
                Show playlist title
              </span>
              <input
                id="add-to-existing-episode-playlist-button"
                type="button"
                value="Add"
              />
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}
export default AddToEpisodesPlaylistModal;
