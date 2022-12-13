import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarComponent() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <Nav className="navbar">
            {/* Temporary */}
            <Link className="link" to="./pages/explore">Explore</Link>
            <Link className="link" to="./pages/create-post">Post</Link>
            <Link className="link" to="./pages/profile">Profile</Link>
            {/* Login should only show if user isn't logged in */}
            <Link className="link" to="./pages/login">Login</Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
