import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import NavbarComponent from './components/navbar/NavbarComponent';
import NavbarComponent from "./components/navbarComponent/NavbarComponent";
import Main from "./components/main/MainComp";
import PostForm from "./pages/PostForm";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import Explore from './components/explore/explore';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    // <>
    //   <AuthorizedApp />
    //   {/* <div className="App">
    //     <Router>
    //       <Header />
    //       <NavbarComponent />
    //       <Routes>
    //         <Route className="mainSection" path="/" element={<Main />} />
    //         <Route
    //           className="postForm"
    //           path="/pages/PostForm"
    //           element={<PostForm />}
    //         />
    //       </Routes>
    //       <Footer />
    //     </Router>
    //   </div> */}
    // </>
    <div className="App">
      <Router>
        <Header />
        <NavbarComponent />
        <Routes>
          <Route className="mainSection" path="/" element={<Main />} />
          <Route
            className="postForm"
            path="/create-post"
            element={<PostForm />}
          />
          <Route
            className="signupForm"
            path="/signup"
            element={<SignupForm />}
          />
          <Route
            className="loginForm"
            path="/login"
            element={<LoginForm />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
