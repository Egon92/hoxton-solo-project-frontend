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
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NotLoggedInHomepage />} />
        <Route path="/login" element={<LogInAndSignUpPage />} />
        <Route path="/profile/home" element={<LoggedInHomepage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/best" element={<BestTracksPage />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/selected" element={<PlaylistAndLikesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
