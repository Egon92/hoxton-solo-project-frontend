import Header from "../../Components/Header/Header";
import "./Not-Logged-in-homepage.css";

function NotLoggedInHomepage() {
  return (
    <div id="not-logged-in-homepage-wrapper">
      <Header />
      <main>
        <div className="topic-not-logged-in-homepage-wrapper">
          <div className="topic-not-logged-in-homepage">
            <h1>topics</h1>
          </div>
        </div>
        <div className="best-tracks-not-logged-in-homepage-wrapper">
          <div className="best-tracks-not-logged-in-homepage">
            <h2>what's the best now</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotLoggedInHomepage;
