import NavbarComponent from "../navbarComponent/NavbarComponent";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostForm from "../../pages/PostForm";
import Profile from "../../pages/Profile";
import Explore from "../../pages/Explore";
import LoginForm from "../../pages/LoginForm"
import SignupForm from "../../pages/SignupForm";
import LogoutPage from "../../pages/LogoutPage";
import { QUERY_ME } from "../../utils/queries";

function AuthorizedApp() {
const {loading,data}= useQuery(QUERY_ME)
console.log(data);

  return (
    <div>
      <Header/>
      <h3>`Welcome Back`</h3>
      <NavbarComponent />
        <Routes>
          <Route className="explore" path="/" element={<Explore />} />
          <Route
            className="postForm"
            path="/pages/PostForm"
            element={<PostForm />}
          />
          {/* <Route
            className="profile"
            path="/pages/Profile"
            element={<Profile />}
          /> */}
          <Route
            className="signupForm"
            path="/pages/SignupForm"
            element={<SignupForm />}
          />
          <Route
            className="explore"
            path="/pages/Explore"
            element={<Explore />}
          />
           <Route
            className="login"
            path="/pages/LoginForm"
            element={<LoginForm />}
          />
          <Route
          className='logout'
          path='/pages/LogoutPage'
          element={<LogoutPage/>}
          />
          <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username"
                element={<Profile />}
              />
      </Routes>
        <Footer />
    </div>
  );
}

export default AuthorizedApp;
