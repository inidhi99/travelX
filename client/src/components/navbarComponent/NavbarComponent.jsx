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
            <Link className="linkStyles" to="./pages/explore">Explore</Link>
            <Link className="linkStyles" to="./pages/create-post">Post</Link>
            <Link className="linkStyles" to="./pages/profile">Profile</Link>
            {/* Login should only show if user isn't logged in */}
            <Link className="linkStyles" to="./pages/login">Login</Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
