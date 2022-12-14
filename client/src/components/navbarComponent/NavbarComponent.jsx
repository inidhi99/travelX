import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from "../../pages/SignupForm";
import LoginForm from "../../pages/LoginForm";
import './Navbar.css';
import Auth from '../../utils/auth';

const NavbarComponent = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand className="linkStyles" as={Link} to="./pages/LoginForm">
           Explore
          </Navbar.Brand>
          <Navbar.Brand className="linkStyles" as={Link} to="./pages/LoginForm">
          Post
          </Navbar.Brand>
          <Navbar.Brand className="linkStyles" as={Link} to="./pages/LoginForm">
          Profile
          </Navbar.Brand> 
         
         {Auth.loggedIn() ? (
                <>
                  <Navbar.Brand className="linkStyles" as={Link} to="./pages/Explore">
           Explore
          </Navbar.Brand>
          <Navbar.Brand className="linkStyles" as={Link} to="./pages/postForm">
          Post
          </Navbar.Brand>
          <Navbar.Brand className="linkStyles" as={Link} to="./pages/Profile">
          Profile
          </Navbar.Brand>
          <Nav.Link className="linkStyles" onClick={Auth.logout}>Logout</Nav.Link>
                </>

              ) : (
                <Nav.Link className="linkStyles" onClick={() => setShowModal(true)} to="./pages/LoginForm" >Login/Sign Up</Nav.Link>
              )}
           
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal  className="linkStyles" size="lg" show={showModal} onHide={() => setShowModal(false)} aria-labelledby="signup-modal">
        {/* tab container to do either signup or login component */}
        <Tab.Container  defaultActiveKey="login">
          <Modal.Header className="linkStyles" closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link className="linkStyles" eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="linkStyles" eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>


          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              {/* <Tab.Pane eventKey="signup">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane> */}
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default NavbarComponent;
