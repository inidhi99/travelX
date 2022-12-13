import NavbarComponent from "../navbarComponent/NavbarComponent";
import Header from "../header/Header";
import Main from "../main/MainComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostForm from '../../pages/PostForm'
import Profile from '../../pages/Profile'
import Explore from '../../pages/Explore'

function AuthorizedApp() {
  return (
    <div>
      <Router>
        <Header />
        <h3>Welcome Back Nidhi, Evince, Igor, Valeria</h3>
          <NavbarComponent />
          <Routes>
            <Route
              className="mainSection"
              path="/"
              element={<Main />} />
            <Route
              className="postForm"
              path="/create-post"
              element={<PostForm />}
            />
            <Route
              className="profile"
              path="/profile"
              element={<Profile/>}
            />
            <Route
              className="explore"
              path="/explore"
              element={<Explore />}
            />
          </Routes>
          <Footer />
        <Main/>
      </Router>
    </div>
  );
}

export default AuthorizedApp;
