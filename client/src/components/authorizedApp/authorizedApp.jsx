import NavbarComponent from "../navbarComponent/NavbarComponent"
import Header from "../header/Header"
import Main from "../main/Main"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function authorizedApp() {
  return (
    <>
    <Router>
    <Header/>
    <h3>Youre currently not logged in, feel free to check it out</h3>
    <div className="Nav">
        <Header />
        <NavbarComponent />
        <Routes>
          <Route className="mainSection" path="/" element={<Main />} />
          <Route
            className="postForm"
            path="/pages/postForm"
            element={<PostForm />}
          />
        </Routes>
        <Footer />
    </div>
    <Main/>
    <NavbarComponent/>
    </Router>
    </>
  )
}

export default authorizedApp