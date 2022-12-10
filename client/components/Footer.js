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
              <Nav.Link href="#home">Explore</Nav.Link>
              <Nav.Link href="#features">Add Pciture</Nav.Link>
              <Nav.Link href="#pricing">Pofile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </footer>
    </>
  );
}

export default Footer;
