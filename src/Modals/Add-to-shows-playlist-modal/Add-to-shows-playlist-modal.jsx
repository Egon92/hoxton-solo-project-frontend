import "./Add-to-shows-playlist-modal.css";

function AddToShowsPlaylistModal(props) {
  return (
    <div className="add-to-shows-playlist-modal-wrapper">
      <div className="add-to-shows-playlist-modal">
        <div className="close-modal-button-wrapper">
          <button id="close-modal-button">❌</button>
        </div>
        <form className="add-to-shows-playlist-form" action="">
          <label className="add-to-new-show-playlist-wrapper" htmlFor="">
            Add to new playlist
            <div className="add-to-new-show-playlist-label">
              <input
                id="add-to-new-show-playlist-input"
                type="text"
                placeholder="Enter your show playlist title"
              />
              <input
                id="add-to-new-show-playlist-button"
                type="button"
                value="Add"
              />
            </div>
          </label>
          <label className="add-to-existing-show-playlist-wrapper" htmlFor="">
            Add to existing playlist
            <div className="add-to-existing-show-playlist">
              <span className="add-to-existing-show-playlist-text">
                Show playlist title
              </span>
              <input
                id="add-to-existing-show-playlist-button"
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

export default AddToShowsPlaylistModal;
