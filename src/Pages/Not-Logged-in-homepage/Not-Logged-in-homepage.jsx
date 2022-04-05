import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Not-Logged-in-homepage.css";

function NotLoggedInHomepage() {
  return (
    <div id="not-logged-in-homepage-wrapper">
      <Header />
      <main>
        <Link to={"/topics"}>
          <div className="topic-not-logged-in-homepage-wrapper">
            <div className="topic-not-logged-in-homepage">
              <h1>topics</h1>
            </div>
          </div>
        </Link>
        <Link to={"/best"}>
          <div className="best-tracks-not-logged-in-homepage-wrapper">
            <div className="best-tracks-not-logged-in-homepage">
              <h2>what's the best now</h2>
            </div>
          </div>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default NotLoggedInHomepage;
