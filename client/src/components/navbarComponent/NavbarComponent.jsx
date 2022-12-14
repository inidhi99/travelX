import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Auth from '../../utils/auth'


function NavbarComponent() {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const login = () => setLoggedIn(true);
  // const logout = () => setLoggedIn(false);
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <Nav className="me-auto">
            {/* <Link className="linkStyles" to="./pages/postForm">Post</Link> */}
            <Link className="linkStyles" to="./me">
              Profile
            </Link>
            <Link className="linkStyles" to="./pages/Explore">
              Explore
            </Link>
            <Link className="linkStyles" to="./pages/PostForm">
              Post
            </Link>
              {/* <Link className="linkStyles" to="./pages/LoginForm">
                login
              </Link> */}
              <Link className="linkStyles" to="./pages/LogoutPage" onClick={Auth.logout}>
                Logout
              </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;