import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <Nav className="me-auto">
            {/* Temporary */}
            <Link className="linkStyles" to="./pages/postForm">Post</Link>
            <Link className="linkStyles" to="./pages/Profile">Profile</Link>
            <Link className="linkStyles" to="./pages/Explore">Explore</Link>
            <Link className="linkStyles" to="./pages/PostForm">
              Post
            </Link>

            <Link className="linkStyles" to="./pages/LoginForm">
              login
            </Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
