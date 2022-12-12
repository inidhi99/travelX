import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import font awesome in index.html 
function Footer() {
  return (
    <>
        <Navbar bg="primary" variant="dark" fixed="bottom">
          <Container>
            <Nav className="me-auto">

            <Nav.Link href="#Explore" icon="fa-sharp fa-solid fa-hotel"> Hotel </Nav.Link>
              <Nav.Link href="#Explore" icon="fa-solid fa-plane-departure" > Flights</Nav.Link>
              <Nav.Link href="#add event" icon="fa-regular fa-magnifying-glass-location"> Explore </Nav.Link>
              <Nav.Link href="#profile" icon="fa-solid fa-id-badge"> Profile</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    </>
  );
}

export default Footer;
