import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <Navbar bg="primary" variant="dark" fixed="bottom">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#Explore">Explore</Nav.Link>
            <Nav.Link href="#add event">Document Trip</Nav.Link>
            <Nav.Link href="#profile">Pofile</Nav.Link>
            <Link className="linkStyles" to="./pages/post">
              Post
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
