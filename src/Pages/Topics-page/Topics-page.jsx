import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Topics-page.css";

function Topics() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/topics")
      .then((resp) => resp.json())
      .then((topics) => setTopics(topics));
    console.log(topics);
  }, []);
  return (
    <div className="topics-homepage-wrapper">
      <div id="topics-header-wrapper">
        <div id="topics-header">
          <div id="topics-search-section-wrapper">
            <input
              type="search"
              id="topics-search-input"
              placeholder="Search Topics, Shows or Episodes"
            />
            <button id="mag-glass-button">
              <img
                id="mag-glass-icon"
                src="/public/assets/search_black_36dp.svg"
                alt=""
              />
            </button>
          </div>

          <div id="topics-lower-header">
            <Link to={"/profile/home"}>
              <span id="topics-h1-wrapper">
                <h1>RideCAST</h1>
              </span>
            </Link>
            <Link to={"/profile"}>
              <div id="topics-profile-wrapper">
                <span id="topics-username">Profile</span>
                <img
                  src="public/assets/account_circle_white_36dp.svg"
                  alt=""
                  id="topics-pic"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="topics-main-wrapper">
        <div className="topics-main-left-wrapper">
          <span>topics</span>
        </div>
        <div className="topics-main-right-wrapper">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              className="topic-name"
              to={`/topics/${topic.id}`}
            >
              {topic.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topics;
