import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../navbarComponent/Navbar.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import LoginForm from '../../pages/LoginForm'
import Explore from "../../pages/Explore";

export default function UnauthorizedApp() {
  return (
    <>
      <Header />
      <h2> Oops! It looks like you are not logged in</h2>
      <p>
        Feel free to check out some of our free features such as the explore
        page
      </p>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link className="linkStyles" to="./pages/Explore">
              Explore
            </Link>
            <Link className="linkStyles" to="./pages/LoginForm">
              Login/ Signup
            </Link>
          </Nav>
        </Container>
        <Routes>
          <Route
            className="loginForm"
            path="/pages/LoginForm"
            element={<LoginForm />}
          />
          <Route
            className="explore"
            path="/pages/Explore"
            element={<Explore />}
          />
        </Routes>
      </Navbar>
      {/* Insert image logo here */}
      <Footer />
    </>
  );
}
