import { Link } from "react-router-dom";
import "./The-best-tracks-page.css";

function BestTracksPage() {
  return (
    <div className="bestTracks-homepage-wrapper">
      <div id="bestTracks-header-wrapper">
        <div id="bestTracks-header">
          <div id="bestTracks-search-section-wrapper">
            <input
              type="search"
              id="bestTracks-search-input"
              placeholder="Search Topics, Shows or Episodes"
            />
            <button id="mag-glasss-button">
              <img id="mag-glass-icon" src="" alt="" />
            </button>
          </div>

          <div id="bestTracks-lower-header">
            <Link to={"/profile/home"}>
              <span id="bestTracks-h1-wrapper">
                <h1>RideCAST</h1>
              </span>
            </Link>
            <Link to={"/profile"}>
              <div id="bestTracks-profile-wrapper">
                <span id="bestTracks-username">Profile</span>
                <img
                  src="public/assets/account_circle_white_36dp.svg"
                  alt=""
                  id="bestTracks-pic"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bestTracks-main-wrapper">
        <div className="bestTracks-main-left-wrapper">
          <span>what’s the best now</span>
        </div>
        <div className="bestTracks-main-right-wrapper">
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
          <img
            id="bestTracks-wrapper"
            src="https://www.rd.com/wp-content/uploads/2021/05/GettyImages-1271148946-e1620838088898.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BestTracksPage;
