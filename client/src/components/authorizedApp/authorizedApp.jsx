import NavbarComponent from "../navbarComponent/NavbarComponent";
import Header from "../header/Header";
import Main from "../main/MainComp";
import Footer from "../footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PostForm from "../../pages/PostForm";
import Profile from "../../pages/Profile";
import Explore from "../../pages/Explore";
import SignupForm from "../../pages/SignupForm";
import { Link } from "react-router-dom";
import LogoutPage from "../../pages/LogoutPage";

function AuthorizedApp() {
  return (
    <div>
      <Header/>
      <h3>Welcome Back 'User'</h3>
      <NavbarComponent />
        <Routes>
          <Route className="explore" path="/" element={<Explore />} />
          <Route
            className="postForm"
            path="/pages/PostForm"
            element={<PostForm />}
          />
          <Route
            className="profile"
            path="/pages/Profile"
            element={<Profile />}
          />
          <Route
            className="signupForm"
            path="/pages/SignupForm"
            element={<SignupForm />}
          />
          {/* <Route
            className="explore"
            path="/pages/Explore"
            element={<Explore />}
          /> */}
          <Route
          className='logout'
          path='/pages/LogoutPage'
          element={<LogoutPage/>}
          />
      </Routes>
        <Footer />
    </div>
  );
}

export default AuthorizedApp;
