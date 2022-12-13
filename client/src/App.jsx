import { useState, React } from "react";
import "./App.css";
// import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
// import NavbarComponent from "./components/navbarComponent/NavbarComponent";
// import Main from "./components/main/Main";
// import PostForm from "./pages/PostForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorizedApp from "./components/authorizedApp/AuthorizedApp";
// import Explore from "./components/explore/Explore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthorizedApp />
      {/* <div className="App">
        <Router>
          <Header />
          <NavbarComponent />
          <Routes>
            <Route className="mainSection" path="/" element={<Main />} />
            <Route
              className="postForm"
              path="/pages/PostForm"
              element={<PostForm />}
            />
          </Routes>
          <Footer />
        </Router>
      </div> */}
    </>
  );
}

export default App;
