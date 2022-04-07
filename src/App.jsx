import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotLoggedInHomepage from "./Pages/Not-Logged-in-homepage/Not-Logged-in-homepage";
import LoggedInHomepage from "./Pages/Logged-in-homepage/Logged-in-homepage";
import LogInAndSignUpPage from "./Pages/Login-and-Signup-page/Login-and-Signup-page";
import BestTracksPage from "./Pages/The-best-tracks-page/The-best-tracks-page";
import Topics from "./Pages/Topics-page/Topics-page";
import PlaylistAndLikesPage from "./Pages/Playlist-and-likes-page/Playlist-and-likes-page";
import ProfilePage from "./Pages/Profile-page/Profile-page";
import Footer from "./Components/Footer/Footer";
import ShowsPage from "./Pages/Shows-page/Shows-page";
import EpisodesPage from "./Pages/Episodes-page/Episodes-page";
import EpisodePage from "./Pages/Episode-page/Episode-page";
import AddToShowsPlaylistModal from "./Modals/Add-to-shows-playlist-modal/Add-to-shows-playlist-modal";
import AddToEpisodesPlaylistModal from "./Modals/Add-to-episodes-playlist-modal/Add-to-episodes-playlist-modal";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NotLoggedInHomepage />} />
        <Route
          path="/login"
          element={<LogInAndSignUpPage setUser={setUser} />}
        />
        <Route
          path="/profile/home"
          element={<LoggedInHomepage user={user} />}
        />
        {/* {if (props.user){

          
        }} */}
        <Route path="/profile" element={<ProfilePage user={user} />} />
        <Route path="/best" element={<BestTracksPage user={user} />} />
        <Route path="/topics" element={<Topics />} />
        <Route
          path="/selected"
          element={<PlaylistAndLikesPage user={user} />}
        />
        <Route path="/topics/:topicId" element={<ShowsPage user={user} />} />
        <Route path="/shows/:showId" element={<EpisodesPage user={user} />} />
        <Route
          path="/episodes/:episodeId"
          element={<EpisodePage user={user} />}
        />
        <Route
          path="/modal1"
          element={<AddToShowsPlaylistModal user={user} />}
        />
        <Route
          path="/modal2"
          element={<AddToEpisodesPlaylistModal user={user} />}
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
