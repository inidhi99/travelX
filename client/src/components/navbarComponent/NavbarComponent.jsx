// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function NavbarComponent() {
//   return (
//     <>
//       <Navbar bg="primary" variant="dark" fixed="bottom">
//         <Container>
//           <Nav className="navbar">
//             {/* Temporary */}
//             <Link className="link" to="./pages/explore">Explore</Link>
//             <Link className="link" to="./pages/PostForm">Post</Link>
//             <Link className="link" to="./pages/profile">Profile</Link>
//             {/* Login should only show if user isn't logged in */}
//             <Link className="link" to="/pages/LoginForm">Login</Link>

//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavbarComponent;


import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from "../../pages/SignupForm";
import LoginForm from "../../pages/LoginForm";

import Auth from '../../utils/auth';

const NavbarComponent = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="./pages/LoginForm">
           Explore
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="./pages/LoginForm">
          Post
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="./pages/LoginForm">
          Profile
          </Navbar.Brand> 
         
         {Auth.loggedIn() ? (
                <>
                  <Navbar.Brand as={Link} to="./pages/Explore">
           Explore
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="./pages/postForm">
          Post
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="./pages/Profile">
          Profile
          </Navbar.Brand>
          <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>

              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
           
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="signup-modal">
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>

          
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignupForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default NavbarComponent;
