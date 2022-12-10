import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <footer>
        <Navbar bg="primary" variant="dark" fixed="bottom">
          <Container>
            <Nav className="me-auto">
              <Nav.Link href="#Explore">Explore</Nav.Link>
              <Nav.Link href="#add event">Document Trip</Nav.Link>
              <Nav.Link href="#profile">Pofile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </footer>
    </>
  );
}

export default Footer;
