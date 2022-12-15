import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import LoginForm from "../../pages/LoginForm";
import SignupForm from "../../pages/SignupForm";
import Explore from "../../pages/Explore";
import Header from "../header/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './unauthorizedApp.css';

export default function UnauthorizedApp() {
  return (
    <div>
      <Header />
      <h2> Oops! It looks like you are not logged in</h2>
      <p>
        Feel free to check out some of our free features such as the explore
        page
      </p>
      <Navbar id="navbar">
        <Container>
          <Nav className="me-auto">
            <Link className="linkStyles" to="./pages/Explore">
              Explore
            </Link>
            <Link className="linkStyles" to="./pages/LoginForm">
              Login | Signup
            </Link>
          </Nav>
        </Container>
      </Navbar>
        <Routes>
          <Route
            className="loginForm"
            path="/pages/LoginForm"
            element={<LoginForm />}
          />
          <Route
            className="signupForm"
            path="/pages/SignupForm"
            element={<SignupForm />}
          />
          <Route
            className="explore"
            path="/pages/Explore"
            element={<Explore />}
          />
        </Routes>
      {/* Insert image logo here */}
      <Footer />
    </div>
  );
}
